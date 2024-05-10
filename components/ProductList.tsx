import { getProducts } from "@/lib/actions/actions";
import ProductCard from "./ProductCard";

const ProductList = async () => {
  const products = await getProducts();

  return (
    <div className="flex flex-col items-center gap-5 px-5 py-10 mb-20">
    <h1 className="text-[25px] sm:text-[5px] md:text-[32px] lg:text-[38px] font-body font-black text-green1 opacity-75 mt-5 mb-8">
    Our<span className="text-red-1 opacity 75"> Products' </span>Collection
</h1>
      {!products || products.length === 0 ? (
        <p className="text-body-bold">No products found</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-5">
          {products.map((product: ProductType) => (
            <ProductCard key={product._id} product={product}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
