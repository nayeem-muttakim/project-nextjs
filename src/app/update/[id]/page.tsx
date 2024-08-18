"use client";

import { uploadImages } from "@/components/utils/upload";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
interface ProductData {
  title: string;
  category: string;
  description: string;
  images: { publicId: string; url: string }[];
}
const Update = () => {
  const [data, setData] = useState<ProductData>({
    title: "",
    category: "",
    description: "",
    images: [],
  });
  const [imagesFile, setImagesFile] = useState([]);
  const { id } = useParams();

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      let ImagesArr = [...data?.images];
      for (let i = 0; i < imagesFile.length; i++) {
        const imageData = await uploadImages(imagesFile[i]);
        ImagesArr.push(imageData);
      }
      const form = e.target as HTMLFormElement;
      const title = (form.elements.namedItem("title") as HTMLInputElement)
        .value;
      const category = (form.elements.namedItem("category") as HTMLInputElement)
        .value;

      const description = (
        form.elements.namedItem("description") as HTMLTextAreaElement
      ).value;

      const product = {
        title,
        category,
        description,
        images: ImagesArr,
      };
      // console.log(product);
      axios
        .patch(`http://localhost:5500/products/${id}`, product)
        .then((res) => {
          location.reload();
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteImage = async (imageId: string) => {
    axios.delete(`http://localhost:5500/products/${id}/image/${imageId}`).then((res) => {
      console.log(res);
      if (res.status === 200) {
        alert("Image Removed");
        location.reload();
      }
    });

  };
  useEffect(() => {
    axios(`http://localhost:5500/products/${id}`).then((res) =>
      setData(res.data as ProductData)
    );
  }, [id]);
  return (
    <div className="hero">
      <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
        <form className="card-body" onSubmit={handleUpdate}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              placeholder="Samsung S23"
              name="title"
              className="input input-bordered"
              defaultValue={data?.title}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select name="category" className="select select-bordered w-full">
              <option disabled selected>
                {data?.category}
              </option>
              <option>Electronics</option>
              <option>Food</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Images</span>
            </label>
            <input
              type="file"
              multiple={true}
              name="images"
              className="input input-bordered"
              onChange={(e) => {
                setImagesFile(e.target.files);
              }}
            />
          </div>
          <div className=" mx-auto bg-base-300 grid md:grid-cols-2 rounded-box max-w-md space-x-4 p-4">
            {data?.images?.map((image) => (
              <div
                key={image.publicId}
                className="w-fit relative group"
              >
                <Image
                  height={500}
                  width={500}
                  alt=""
                  src={image.url}
                  className="rounded-box"
                />
                <button
                  onClick={() => handleDeleteImage(image.publicId)}
                  className="btn btn-circle absolute opacity-50 right-3 top-3 group-hover:opacity-100 ease-in-out transition-all duration-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    viewBox="0,0,256,256"
                  >
                    <g
                      fill="#d60404"
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="1"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-dasharray=""
                      stroke-dashoffset="0"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                      className="mix-blend-normal size-1"
                    >
                      <g transform="scale(10.66667,10.66667)">
                        <path d="M10.80664,2c-0.517,0 -1.01095,0.20431 -1.37695,0.57031l-0.42969,0.42969h-5c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h16c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587h-5l-0.42969,-0.42969c-0.365,-0.366 -0.85995,-0.57031 -1.37695,-0.57031zM4.36523,7l1.52734,13.26367c0.132,0.99 0.98442,1.73633 1.98242,1.73633h8.24805c0.998,0 1.85138,-0.74514 1.98438,-1.74414l1.52734,-13.25586z"></path>
                      </g>
                    </g>
                  </svg>
                </button>
              </div>
            ))}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              placeholder="The Latest S20 Series"
              name="description"
              className="textarea textarea-bordered textarea-md w-full"
              defaultValue={data?.description}
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Update Id : {id}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
