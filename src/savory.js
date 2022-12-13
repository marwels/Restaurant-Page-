import { FoodItem } from './DOMcomponents/FoodItem';


const MakeSavory = function MakeSavory(targetEl) {
    document.body.className = "savory";

    let savoryContainer = document.createElement("div");
    savoryContainer.classList.add("savoryContainer");

    let classNameFoodItem = "foodItem";
    let itemNames = ["artisan bread", "roll", "ciabatta"];
    let itemPrices = [10, 3, 4];

    let children = []

    const oldTitle = document.title;
    document.title = "Savory";

    for (let i = 0; i < itemNames.length; i++) {
        // classNameFoodItem += `${i}`
        children.push(
            FoodItem(
                savoryContainer,
                classNameFoodItem,
                itemNames[i],
                itemPrices[i],
                () => alert("This would add item to the order"))
        );
    }


    targetEl.appendChild(savoryContainer);

    return () => {
        children.forEach((destroy) => destroy());
        targetEl.removeChild(savoryContainer);
        document.title = oldTitle;
    }
}




export { MakeSavory };