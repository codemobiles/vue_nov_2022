import { Users } from "../entity/User";
import { AppDataSource } from "../data-source";
import { TypedBodyRequest } from "../types/Request.types";

export class UserController {
  private userRepository = AppDataSource.getMongoRepository(Users);

  register(request: TypedBodyRequest<Users>, response, next) {
    return { message: "hey" };
  }
}
