class LocalstorageService {
    static getLocalStorageToken() {
        const localStorageTokenJson = localStorage.getItem("access_token")
        return localStorageTokenJson ? JSON.parse(localStorageTokenJson) : null;
    }

    static setLocalStorageToken(token) {
        localStorage.setItem("access_token", JSON.stringify(token));
    }

    static delLocalStorageToken() {
        localStorage.removeItem("access_token");
    }

    static getLocalStorageCart() {
        const localStorageCartJson = localStorage.getItem("cart")
        return localStorageCartJson ? JSON.parse(localStorageCartJson) : [];
    }

    static setLocalStorageCart(cartState) {
        localStorage.setItem("cart", JSON.stringify(cartState));
    }
}

export default LocalstorageService
