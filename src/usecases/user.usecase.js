import UserService from "@/services/user.service.js";

export default class UserUsecase {
  constructor() {
    this.UserService = new UserService();
  }

  getUser() {
    return this.UserService.list();
  }
}
