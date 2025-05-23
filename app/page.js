


import Features from "@/components/Features/Features";
import Hero from "@/components/Hero/Hero";
import Products from "@/components/Products/Products";
import Testimonials from "@/components/Testomonials/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
      <div className="mt-20 flex flex-col justify-center gap-10">
        <Hero/>
        <Products/>
        <Testimonials/>
        <Features/>
      </div>
  );
}
