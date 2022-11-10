import { ObjectID } from "mongodb";
import { NextFunction, Request, Response } from "express";
import { Users } from "../entity/User";
import { AppDataSource } from "../data-source";
import { Products } from "../entity/Products";
import { Transactions } from "../entity/Transactions";
import { generateSeq } from "../utils/cm-util";

export class TransactionController {
  private transactionRepository =
    AppDataSource.getMongoRepository(Transactions);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.transactionRepository.find();
  }

  async add(req, res: Response, next: NextFunction) {
    try {
      req.body.staff_id = ObjectID(req.userId);
      req.body.transaction_id = await generateSeq("transaction_id");
      req.body.timestamp = new Date();
      req.body.__v = 0;

      const doc = await this.transactionRepository.save(req.body);
      return { result: "ok", message: doc };
    } catch (e) {
      return { result: "nok", message: "invalid data" };
    }
  }
}
