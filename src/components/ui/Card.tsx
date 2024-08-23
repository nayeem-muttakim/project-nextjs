import Image from "next/image";
import Delete from "../Delete";
import Link from "next/link";
interface Image {
  id: number;
  url: string;
}
interface ProductProps {
  product: {
    id: number;
    title: string;
    category: string;
    description: string;
    images: Image[];
  };
}

const Card = ({ product }: ProductProps) => {
  return (
    <div className="card bg-base-100 mx-auto  shadow-xl relative">
      <Link
        href={`/update/${product.id}`}
        className="badge badge-accent absolute right-28 top-3"
      >
        Update
      </Link>
      <Delete id={product.id} />
      <figure className="px-10 pt-10">
        <div className="rounded-box grid md:grid-cols-2 gap-1">
          {product?.images?.map((image) => (
            <div key={image.id} className="  border-black border">
              <Image
                height={500}
                width={500}
                src={image.url}
                className="w-full"
                alt=""
              />
            </div>
          ))}
        </div>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product.title}</h2>
        <p>{product.description}</p>
        <div className="card-actions">
          <button className="btn btn-primary">{product.category}</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
