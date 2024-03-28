import { UserDto } from "../Dto/user.dto";
import { myDataSource } from "../app-data-source";
import { User } from "../src/entity/user.entity";
export default class UserService {
  async find(id) {}

  static async create(user: UserDto) {
    var newUser = new User();
    newUser.firstName = user.firstName;
    newUser.lastName = user.lastName;
    const res = await myDataSource.manager.save(newUser);
    return res;
  }

  static async findAll() {
    return await myDataSource.manager.find(User);
  }
}
