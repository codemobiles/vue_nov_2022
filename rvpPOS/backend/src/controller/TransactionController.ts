import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Users } from "../entity/User";
import { AppDataSource } from "../data-source";
import { Products } from "../entity/Products";
import { Transactions } from "../entity/Transactions";

export class TransactionController {
  private transactionRepository =
    AppDataSource.getMongoRepository(Transactions);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.transactionRepository.find();
  }
}
