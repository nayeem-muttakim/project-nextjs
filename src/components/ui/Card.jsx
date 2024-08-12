import Image from "next/image";

const Card = ({ product }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <Image
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt=""
          width={200}
          height={200}
          className="rounded-xl"
        />
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
