import { getCollections } from "@/lib/actions/actions";
import Image from "next/image";
import Link from "next/link";

const Collections = async () => {
  const collections = await getCollections();

  return (
    <div className="flex flex-col items-center gap-10 py-5 px-5 mt-10 mb-10">
      <p className="px-12 font-body text-black-bold text-[24px]">Our Collections</p>
      {!collections || collections.length === 0 ? (
        <p className="text-body-bold">No collections found</p>
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-8">
          {collections.map((collection: CollectionType) => (
            <Link href={`/collections/${collection._id}`} key={collection._id}>
              <Image
                key={collection._id}
                src={collection.image}
                alt={collection.title}
                width={540}
                height={300}
                className="rounded-lg cursor-pointer"
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collections;
