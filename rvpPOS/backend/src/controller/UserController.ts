import { Users } from "../entity/User";
import { AppDataSource } from "../data-source";

export class UserController {
  private userRepository = AppDataSource.getMongoRepository(Users);

  register(request, response, next) {
    return request.body;
  }
}
