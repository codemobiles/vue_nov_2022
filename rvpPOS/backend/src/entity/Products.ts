import { Entity, ObjectIdColumn, ObjectID, Column } from "typeorm";

@Entity()
export class Products {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  name: string;

  @Column()
  stock: number;

  @Column()
  price: number;
}
