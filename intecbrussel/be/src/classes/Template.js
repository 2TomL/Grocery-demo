"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Template = void 0;
const GroceryList_js_1 = require("./GroceryList.js");
class Template {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        const li = document.createElement("li");
        const h4 = document.createElement("h4");
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement("p");
        p.innerText = item.format();
        li.append(p);
        const img = document.createElement("img");
        img.src = "C:\Users\lamer\IdeaProjects\TSC\Grocery-demo\delete-btn.png";
        img.width = 20;
        img.height = 20;
        li.appendChild(img);
        const updateButton = document.createElement("button");
        updateButton.innerText = "UPDATE";
        updateButton.style.backgroundColor = "green";
        li.appendChild(updateButton);
        if (pos === "start") {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
        img.addEventListener("click", () => {
            li.remove();
        });
        updateButton.addEventListener("click", () => {
            if (item instanceof GroceryList_js_1.GroceryList) {
                const upItem = prompt("Enter new item: ");
                const upQuantity = prompt("Enter new quantity: ");
                const upStore = prompt("Enter new store name: ");
                if (upItem && upQuantity && upStore) {
                    const newItem = item;
                    newItem.item = upItem;
                    newItem.quantity = parseInt(upQuantity);
                    newItem.store = upStore;
                    h4.innerText = heading;
                    p.innerText = newItem.format();
                }
            }
        });
    }
}
exports.Template = Template;
