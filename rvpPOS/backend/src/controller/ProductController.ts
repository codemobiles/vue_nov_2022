import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Users } from "../entity/User";
import { AppDataSource } from "../data-source";
import { Products } from "../entity/Products";
import * as formidable from "formidable";


export class ProductController {
  private productRepository = AppDataSource.getMongoRepository(Products);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.productRepository.find();
  }

  async add(request: Request, response: Response, next: NextFunction) {

  }

}
