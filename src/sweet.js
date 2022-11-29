import { Button } from './main_page';


const FoodItem = function FoodItem(parentEl, className, itemName, price, onClickBuy) {
    const div = document.createElement("div");
    div.className = className;
    const title = document.createElement("h2");
    title.innerText = itemName;
    div.appendChild(title);
    const priceOfItem = document.createElement("h2");
    priceOfItem.innerText = price;
    div.appendChild(priceOfItem);

    parentEl.appendChild(div);

    const destroy = Button(div, "order-button", "order", onClickBuy);

    return () => {
        destroy();
        parentEl.removeChild(button);
    }
}

const MakeSweet = function MakeSweet(targetEl) {

    let sweetContainer = document.createElement("div");
    sweetContainer.classList.add("sweetContainer");

    let classNameFoodItem = "foodItem";
    let itemNames = ["muffin", "csruffin", "pain au chocolat", "croissant", "tartelette"];
    let itemPrices = [3, 6, 6, 5, 8];


    for (let i = 0; i < 5; i++) {
        classNameFoodItem += `{i}`
        FoodItem(sweetContainer, classNameFoodItem, itemNames[i], itemPrices[i], onClickBuy);
    }




    return () => {
        targetEl.removeChild(sweetContainer);
    }
}




export { MakeSweet };