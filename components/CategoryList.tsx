"use client"
import { getProductsByTag } from "@/lib/actions/actions";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

const ProductListByTag = ({ tag }: { tag: string }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await getProductsByTag(tag);
      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, [tag]);

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      <p className="text-heading1-bold">{tag} Products</p>
      {!products || products.length === 0 ? (
        <p className="text-body-bold">No products found for tag {tag}</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-16">
          {products.map((product: ProductType) => (
            <ProductCard key={product._id} product={product}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductListByTag;