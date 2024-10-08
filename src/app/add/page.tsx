"use client";

import axios from "axios";
import { uploadImages } from "@/components/utils/upload";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";

const Add = () => {
  const router = useRouter();
  const [imagesFile, setImagesFile] = useState<FileList | null>(null);

  const handleAdd = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      let ImagesArr = [];
      if (imagesFile && imagesFile.length > 0) {
        for (let i = 0; i < imagesFile.length; i++) {
          const data = await uploadImages(imagesFile[i]);
          ImagesArr.push(data);
        }
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
      axios.post("http://localhost:5500/products", product);
      router.push("/");
    } catch (err) {
      console.error("Error adding", err);
    }
  };

  return (
    <div className="hero">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
        <form className="card-body" onSubmit={handleAdd}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              placeholder="Samsung S23"
              name="title"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              required
              name="category"
              className="select select-bordered w-full"
            >
              <option disabled selected>
                Select Category
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
              required
              onChange={(e) => {
                setImagesFile(e.target.files);
              }}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              placeholder="The Latest S20 Series"
              name="description"
              className="textarea textarea-bordered textarea-md w-full"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
