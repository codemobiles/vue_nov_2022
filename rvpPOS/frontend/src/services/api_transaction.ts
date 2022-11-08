import httpClient from "@/services/httpClient";
import { server } from "@/services/constants";
import type { Transaction } from "@/models/transaction.model";
import type { AxiosResponse } from "axios";

export const getTransactions = (): Promise<AxiosResponse<Transaction[]>> => {
  return httpClient.get<Transaction[]>(server.TRANSACTION_URL);
};

export const sendTransaction = (data: any) => {
  return httpClient.post(server.TRANSACTION_URL, data);
};
