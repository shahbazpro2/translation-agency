import Image from 'next/image'
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutMe from './components/AboutMe';
import ContactForm from './ContactForm';

import TestimonialSection from './components/TestimonialSection';



export default function Home() {
  return (
   <>
   <HeroSection />
   <ServicesSection />
   <AboutMe />
   <ContactForm />

   <TestimonialSection />

   </>
  )
}
