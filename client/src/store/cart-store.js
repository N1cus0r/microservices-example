import { create } from "zustand";
import NotificationService from "../services/notification-service.js";
import LocalstorageService from "../services/localstorage-service.js";

const useCartStore = create((set) => ({
  cartState: LocalstorageService.getLocalStorageCart(),
  addToCart: (item) =>
    set((store) => {
      let isItemInCart = false;

      for (let cartItem of store.cartState) {
        if (cartItem.product.id === item.id) {
          isItemInCart = true;
          cartItem.quantity += 1;
        }
      }

      if (!isItemInCart) {
        store.cartState.push({ quantity: 1, product: item });
      }

      LocalstorageService.setLocalStorageCart(store.cartState);

      NotificationService.successNotification(
        "Success",
        "Product was added to cart",
      );
      return {
        cartState: [...store.cartState],
      };
    }),
  removeFromCart: (item) =>
    set((store) => {
      for (let cartItem of store.cartState) {
        if (cartItem.product.id === item.id) {
          if (cartItem.quantity === 1) {
            store.cartState = store.cartState.filter(
              (i) => i.product.id !== cartItem.product.id,
            );
          } else {
            cartItem.quantity -= 1;
          }
        }
      }

      LocalstorageService.setLocalStorageCart(store.cartState);

      NotificationService.successNotification(
        "Success",
        "Product was removed from cart",
      );
      return {
        cartState: [...store.cartState],
      };
    }),
  emptyCart: () =>
    set(() => {
      return {
        cartState: [],
      };
    }),
}));

export default useCartStore;
