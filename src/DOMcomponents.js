const Button = function Button(parentEl, className, label, onClick) {
    const button = document.createElement("button");
    button.className = className;
    button.innerText = label;
    button.addEventListener("click", onClick);
    parentEl.appendChild(button);

    return () => {
        parentEl.removeChild(button);
    }
}


const Ahref = function Ahref(parentEl, className, label, onClick) {
    const a = document.createElement("a");
    const link = document.createTextNode(label);
    a.className = className;
    a.title = label;
    a.appendChild(link);
    // a.href = "https://www.aaa.com"; 
    a.addEventListener("click", onClick);
    parentEl.appendChild(a);

    return () => {
        parentEl.removeChild(a);
    }
}

const MenuButton = function MenuButton(parentEl, label, onClick) {
    const wrapper = document.createElement("div");
    wrapper.className = "buttonWrapper";
    const destroy = Ahref(wrapper, "menu-button", label, onClick);
    parentEl.appendChild(wrapper);

    return () => {
        destroy();
        parentEl.removeChild(wrapper);
    }
}

const FoodItem = function FoodItem(parentEl, className, itemName, price, onClickBuy) {

    const div = document.createElement("div");
    div.className = className;
    const titleWrapper = document.createElement("div");
    titleWrapper.className = "titleWrapper";
    const title = document.createElement("h2");
    title.className = "itemName";
    title.innerText = itemName;
    titleWrapper.appendChild(title);
    const priceOfItem = document.createElement("h2");
    priceOfItem.innerText = price;
    titleWrapper.appendChild(priceOfItem);
    div.appendChild(titleWrapper);

    parentEl.appendChild(div);

    const destroy = Button(div, "order-button", "ORDER", onClickBuy);

    return () => {
        destroy();
        parentEl.removeChild(div);
    }
}


const Input = function Input(parentEl, className, label, type, name, placeholder) {
    const labelForInput = document.createElement("label");
    labelForInput.setAttribute("for", label);
    labelForInput.innerText = label;
    parentEl.appendChild(labelForInput);

    const input = document.createElement("input");
    input.className = className;
    input.setAttribute("minlength", "1");
    input.setAttribute("maxlength", "2000");
    input.setAttribute("type", type);
    input.setAttribute("name", name);
    input.setAttribute("placeholder", placeholder);

    parentEl.appendChild(input);

    return () => {
        parentEl.removeChild(input);
    }
}

export { Button };
export { Ahref };
export { MenuButton };
export { FoodItem };
export { Input };