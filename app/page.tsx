import React from 'react';
import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import Testimonial from "@/components/Home/Testimonial";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Testimonial />
      {/* <Skillset /> */}
    </>
  );
}