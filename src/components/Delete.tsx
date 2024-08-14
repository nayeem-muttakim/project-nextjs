"use client";

import axios from "axios";
interface DeleteProps {
  id: number; 
}

const Delete = ({ id }:DeleteProps) => {
//   console.log(id);
  return (
    <div
      onClick={() => {
        axios.delete(`http://localhost:5500/products/${id}`).then((res) => {
          console.log(res);
          if (res.status === 200) {
            alert("Product Deleted");
            location.reload();
          }
        });
      }}
      className="badge badge-error gap-2 absolute right-5 top-3 hover:cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-4 w-4 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
      Delete
    </div>
  );
};

export default Delete;
