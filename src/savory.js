import { FoodItem } from './Components/FoodItem';


const PageSavory = function PageSavory(targetEl) {
    document.body.className = "savory";

    let savoryContainer = document.createElement("div");
    savoryContainer.classList.add("savoryContainer");

    let classNameFoodItem = "foodItem";

    // let itemNames = ["artisan bread", "roll", "ciabatta"];
    // let itemPrices = [10, 3, 4];

    const items = [
        {
            name: "artisan bread",
            price: 10
        },
        {
            name: "roll",
            price: 3
        },
        {
            name: "ciabatta",
            price: 4
        }
    ]


    let children = []

    const oldTitle = document.title;
    document.title = "Savory";

    for (let i = 0; i < 3; i++) {
        // classNameFoodItem += `${i}`
        children.push(
            FoodItem(
                savoryContainer,
                classNameFoodItem,
                items[i].name,
                items[i].price,
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




export { PageSavory };