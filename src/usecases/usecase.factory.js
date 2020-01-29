import UserUsecase from "@/usecases/user.usecase.js";
import OrderUsecase from "@/usecases/order.usecase.js";
import ProductUsecase from "@/usecases/product.usecase.js";
import MessageUsecase from "@/usecases/message.usecase.js";
import OrderNoteUsecase from "@/usecases/orderNote.usecase.js";
import NotificationUsecase from "@/usecases/notification.usecase.js";
const classes = {
  user: UserUsecase,
  order: OrderUsecase,
  product: ProductUsecase,
  message: MessageUsecase,
  orderNote: OrderNoteUsecase,
  notification: NotificationUsecase
};

export default class UsecaseFactory {
  constructor() {}
  static create(name) {
    return new classes[name]();
  }
}
