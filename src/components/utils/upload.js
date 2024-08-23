import axios from "axios";

export const uploadImages = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "my-uploads");
  const { data } = await axios.post(
    "https://api.cloudinary.com/v1_1/datu9x2hp/image/upload",
    formData
  );

  return { url: data?.secure_url };
};
