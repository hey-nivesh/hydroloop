import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import QualityWorkSection from "@/components/QualityWorkSection";
import TestimonialSection from "@/components/TestimonialSection";
import FeadbackForm from "@/components/FeadbackForm";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <AboutSection/>
      <ProcessSection/>
      <QualityWorkSection/>
      <TestimonialSection/>
      <FeadbackForm/>
    </>
  );
}