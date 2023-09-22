"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroceryList = void 0;
class GroceryList {
    constructor(item, quantity, store) {
        this.item = item;
        this.quantity = quantity;
        this.store = store;
    }
    format() {
        return `${this.quantity} X ${this.item} from: ${this.store}`;
    }
}
exports.GroceryList = GroceryList;
