import { defineStore } from 'pinia';
import { Book } from './../models/BookModel';
import { defineStore } from 'pinia';
export const useCartStore = defineStore ('cart',{
state:() => ({
cartItems : [] as Book [],
totalItems:0,
}),
    actions: {
        addToCart(book: Book) {
            this.cartItems.push(book);
            this.totalItems+= 1;
    }
}
});

