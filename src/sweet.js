// import { Button } from './DOMcomponents/Button';
import { FoodItem } from './Components/FoodItem';


const PageSweet = function MakeSweet(targetEl) {
    document.body.className = "sweet";

    let sweetContainer = document.createElement("div");
    sweetContainer.classList.add("sweetContainer");

    let classNameFoodItem = "foodItem";
    // let itemNames = ["muffin", "csruffin", "pain au chocolat", "croissant", "tartelette"];
    // let itemPrices = [3, 6, 6, 5, 8];

    let items = [
        {
            name: "muffin",
            price: 3,
        },
        {
            name: "csruffin",
            price: 6,
        },
        {
            name: "pain au chocolat",
            price: 6,
        },
        {
            name: "croissant",
            price: 5,
        },
        {
            name: "tartelette",
            price: 8,
        }
    ];

    let children = []

    const oldTitle = document.title;
    document.title = "Sweet";

    for (let i = 0; i < 5; i++) {
        // classNameFoodItem += `${i}`
        children.push(
            FoodItem(
                sweetContainer,
                classNameFoodItem,
                items[i].name,
                items[i].price,
                () => alert("This would add item to the order"))
        );
    }


    targetEl.appendChild(sweetContainer);

    return () => {
        document.title = oldTitle;
        children.forEach((destroy) => destroy());
        targetEl.removeChild(sweetContainer);
    }
}




export { PageSweet };