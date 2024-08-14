"use client";

import axios from "axios";
import { redirect, useRouter } from "next/navigation";

const Add = () => {
  const router = useRouter();
  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const title = (form.elements.namedItem("title") as HTMLInputElement).value;
    const category = (form.elements.namedItem("category") as HTMLInputElement)
      .value;
    const description = (
      form.elements.namedItem("description") as HTMLTextAreaElement
    ).value;

    const product = {
      title,
      category,
      description,
    };
    // console.log(product);
    // axios
    //   .post("http://localhost:5500/products", product)
    //   .then((res) => {
    //     // console.log(res);
    //     router.push("/");
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <div className="hero">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
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
              className="select select-bordered w-full max-w-xs"
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
              multiple
              name="title"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              placeholder="The Latest S20 Series"
              name="description"
              className="textarea textarea-bordered textarea-md w-full max-w-xs"
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
