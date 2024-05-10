import React from "react";
import Collections from "@/components/Collections";
import HeroSection from "@/components/Hero";
import ProductList from "@/components/ProductList";


export default function Home() {
  return (
    <>
    <HeroSection />
        <Collections />
      <ProductList />
    </>
  );
}

export const dynamic = "force-dynamic";

