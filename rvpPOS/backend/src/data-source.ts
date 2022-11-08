import "reflect-metadata";
import { DataSource } from "typeorm";
import { Products } from "./entity/Products";
import { Users } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "mongodb",
  database: "demopos",
  synchronize: true,
  logging: false,
  entities: [Users, Products],
  migrations: [],
  subscribers: [],
});
