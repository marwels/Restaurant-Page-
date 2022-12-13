import { Button } from './Button';

const FoodItem = function FoodItem(parentEl, className, itemName, price, onClickBuy) {

    const divFoodItem = document.createElement("div");
    divFoodItem.className = className;
    const titleWrapper = document.createElement("div");
    titleWrapper.className = "titleWrapper";
    const title = document.createElement("h2");
    title.className = "itemName";
    title.innerText = itemName;
    titleWrapper.appendChild(title);
    const priceOfItem = document.createElement("h2");
    priceOfItem.innerText = price;
    titleWrapper.appendChild(priceOfItem);
    divFoodItem.appendChild(titleWrapper);

    parentEl.appendChild(divFoodItem);

    const destroy = Button(divFoodItem, "order-button", "ORDER", onClickBuy);

    return () => {
        destroy();
        parentEl.removeChild(divFoodItem);
    }
}

export { FoodItem };