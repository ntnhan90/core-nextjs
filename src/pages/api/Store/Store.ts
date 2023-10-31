import axiosAuthen from "../../../axios/axiosAuthen";

export const GetStore = async () => {
  const response = await axiosAuthen.get("/store");
  return response.data;
};

export const CreateStoreAPI = async (formData: any) => {
  const response = await axiosAuthen.post("/store", formData);
  return response.data;
};
