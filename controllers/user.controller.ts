import UserService from "../service/user.service";
export default class UserControllers {
  static async register(req, res, next) {
    try {
      // parse req.body to userDto class
      const userDto = req.body;
      console.log(req.body);
      const user = await UserService.create(userDto);
      res.json(user);
    } catch (error) {}
  }

  static async getAll(req, res, next) {
    try {
      const users = await UserService.findAll();
      res.json(users);
    } catch (error) {}
  }
}
