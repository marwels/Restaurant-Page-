import { Button } from './main_page';


const FoodItem = function FoodItem(parentEl, className, itemName, price, onClickBuy) {
    document.body.className = "sweet";
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
        parentEl.removeChild(div);
    }
}

const MakeSweet = function MakeSweet(targetEl) {

    let sweetContainer = document.createElement("div");
    sweetContainer.classList.add("sweetContainer");

    let classNameFoodItem = "foodItem";
    let itemNames = ["muffin", "csruffin", "pain au chocolat", "croissant", "tartelette"];
    let itemPrices = [3, 6, 6, 5, 8];

    let children = []

    for (let i = 0; i < 5; i++) {
        classNameFoodItem += `{i}`
        children.push(
            FoodItem(
                sweetContainer,
                classNameFoodItem,
                itemNames[i],
                itemPrices[i],
                () => alert("This would add item to the order"))
        );
    }


    targetEl.appendChild(sweetContainer);

    return () => {
        children.forEach((destroy) => destroy());
        targetEl.removeChild(sweetContainer);
    }
}




export { MakeSweet };