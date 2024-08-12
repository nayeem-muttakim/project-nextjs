import Image from "next/image";

const Card = ({ product }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <div className="carousel rounded-box w-96">
          <div className="carousel-item w-1/2">
            <Image
              height={300}
              width={300}
              src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
              className="w-full"
              alt=""
            />
          </div>
          <div className="carousel-item w-1/2">
            <Image
              height={300}
              width={300}
              src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
              className="w-full"
              alt=""
            />
          </div>
          <div className="carousel-item w-1/2">
            <Image
              height={300}
              width={300}
              src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
              className="w-full"
              alt=""
            />
          </div>
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
