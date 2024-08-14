"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
interface ProductData {
  title: string;
  category: string;
  description: string;
}
const Update = () => {
  const [data, setData] = useState<ProductData>();
  const { id } = useParams();

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
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

    axios
      .patch(`http://localhost:5500/products/${id}`, product)
      .then((res) => {
        // console.log(res);
        location.reload();
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios(`http://localhost:5500/products/${id}`).then((res) =>
      setData(res.data)
    );
  }, [id]);
  return (
    <div className="hero">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
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
              required
              defaultValue={data?.title}
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
                {data?.category}
              </option>
              <option>Electronics</option>
              <option>Food</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              placeholder="The Latest S20 Series"
              name="description"
              className="textarea textarea-bordered textarea-md w-full max-w-xs"
              defaultValue={data?.description}
              required
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
