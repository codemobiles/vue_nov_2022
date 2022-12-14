import "reflect-metadata";
import { DataSource } from "typeorm";
import { Counters } from "./entity/Counters";
import { Products } from "./entity/Products";
import { Transactions } from "./entity/Transactions";
import { Users } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "mongodb",
  host: process.env.MONGO_HOST ? process.env.MONGO_HOST : "127.0.0.1",
  port: process.env.MONGO_PORT ? Number(process.env.MONGO_PORT) : 27017,
  database: "demopos",
  synchronize: true,
  logging: false,
  entities: [Users, Products, Transactions, Counters],
  migrations: [],
  subscribers: [],
});
