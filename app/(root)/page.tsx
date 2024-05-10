import ProductListByTag from "@/components/CategoryList";
import ProductListByCategory from "@/components/CategoryList";
import Collections from "@/components/Collections";
import HeroSection from "@/components/Hero";
import ProductList from "@/components/ProductList";

import Image from "next/image";

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

