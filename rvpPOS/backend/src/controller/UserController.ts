import { Users } from "../entity/User";
import { AppDataSource } from "../data-source";
import { TypedBodyRequest } from "../types/Request.types";

export class UserController {
  private userRepository = AppDataSource.getMongoRepository(Users);

  register(request: TypedBodyRequest<Users>, response, next) {
    try {
      req.body.created = savedValue(req.body.created, new Date());
      req.body.level = savedValue(req.body.level, "normal");
      req.body.__v = savedValue(req.body.__v, 0);

      req.body.password = await bcrypt.hash(req.body.password, 8);
      const doc = await this.userRepository.save(req.body);
      return { result: "ok", message: doc };
    } catch (e) {
      return { result: "nok", message: "invalid data" };
    }
  }
}
