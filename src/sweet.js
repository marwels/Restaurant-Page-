// import { Button } from './DOMcomponents';
import { FoodItem } from './DOMcomponents';


const MakeSweet = function MakeSweet(targetEl) {
    document.body.className = "sweet";

    let sweetContainer = document.createElement("div");
    sweetContainer.classList.add("sweetContainer");

    let classNameFoodItem = "foodItem";
    let itemNames = ["muffin", "csruffin", "pain au chocolat", "croissant", "tartelette"];
    let itemPrices = [3, 6, 6, 5, 8];

    let children = []

    for (let i = 0; i < 5; i++) {
        // classNameFoodItem += `${i}`
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