import httpClient from "@/services/httpClient";
import { server } from "@/services/constants";

export const getProducts = () => {
  return httpClient.get(server.PRODUCT_URL);
};

export const getProductById = (id: any) => {
  return httpClient.get(server.PRODUCT_URL + `/id/${id}`);
};

export const getProductByKeyword = (keyword: any) => {
  return httpClient.get(server.PRODUCT_URL + `/name/${keyword}`);
};

export const addProduct = (data: any) => {
  return httpClient.post(server.PRODUCT_URL, data);
};

export const deleteProduct = (id: any) => {
  return httpClient.delete(server.PRODUCT_URL + `/id/${id}`);
};

export const updateProduct = (data: any) => {
  return httpClient.put(server.PRODUCT_URL, data);
};

export const getProductsV2 = (page: number, size: number) => {
  return httpClient.get(server.PRODUCTV2_URL + `?page=${page}&limit=${size}`);
};
