"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

function TestimonialSection() {
  const testimonials = [
    {
      imageUrl: "/path/to/image1.jpg",
      name: "Tika Kohlschein",
      review: "Smooth, professional service. Easy communication, received my translation really quickly. Would definitely use Veronique again.",
    },
    {
      imageUrl: "/path/to/image2.jpg",
      name: "S Som",
      review:
        "Ich bin durch die Website der Stadt Hamburg auf Frau Zamorano aufmerksam geworden. Sie antwortet sehr schnell auf Anfragen und auf Wunsch und Möglichkeit übersetzt sie auch innerhalb weniger Tage. Die Dokumente wurden uns nach Deutschland zugeschickt, auch das ging immer schnell und ohne Probleme. Wir haben ihre Dienste inzwischen mehrmals in Anspruch genommen und sind mehr als nur zufrieden. Unsere Dokumente haben wir für Behörden gebraucht und sie wurden immer ohne Probleme akzeptiert. Ihre Kontaktdaten haben wir gespeichert, bei einem so guten Service kommen wir bestimmt wieder auf sie zurück. Danke! :)",
    },
    {
      imageUrl: "/path/to/image2.jpg",
      name: "S Som",
      review:
        "Ich bin durch die Website der Stadt Hamburg auf Frau Zamorano aufmerksam geworden. Sie antwortet sehr schnell auf Anfragen und auf Wunsch und Möglichkeit übersetzt sie auch innerhalb weniger Tage. Die Dokumente wurden uns nach Deutschland zugeschickt, auch das ging immer schnell und ohne Probleme. Wir haben ihre Dienste inzwischen mehrmals in Anspruch genommen und sind mehr als nur zufrieden. Unsere Dokumente haben wir für Behörden gebraucht und sie wurden immer ohne Probleme akzeptiert. Ihre Kontaktdaten haben wir gespeichert, bei einem so guten Service kommen wir bestimmt wieder auf sie zurück. Danke! :)",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    slidesPerView: 1,
    mode: "snap",
    spacing: 15,
    loop: false, // We handle looping logic in our interval
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (slider && slider.details) {
        const totalSlides = slider.details().size;
        let nextSlide = (currentSlide + 1) % totalSlides;
        slider.slideTo(nextSlide);
        setCurrentSlide(nextSlide);
      }
    }, 1000); // change every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, [slider, currentSlide, testimonials.length]);

  return (
    <div className="bg-[#1b1a1a] text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <Image src={"/assets/client.jpg"} alt={"client"} width={960} height={579} />
          {/*  {testimonials.map((testimonial, idx) => (
            <div key={idx} className="m-2 overflow-hidden rounded">
              <Image src={testimonial.imageUrl} alt={testimonial.name} width={100} height={100} />
            </div>
          ))} */}
        </div>
        <div className="p-10 flex flex-col justify-center">
          <div className="text-4xl font-bold">What Our Client Say</div>
          <div ref={sliderRef} className="keen-slider mt-7">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="keen-slider__slide space-y-3">
                <p className="italic text-lg">"{testimonial.review}"</p>
                <p className="font-semibold">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
