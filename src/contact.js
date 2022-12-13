import { Form } from './Components/Form';



const SquareDivWithIcon = function SquareDivWithIcon(parentEl, className, iconUniCode, title, moreText) {
    const divSquareDivWithIcon = document.createElement("div");
    divSquareDivWithIcon.className = className;

    const icon = document.createElement("div");
    icon.className = "icon, material-symbols-outlined";
    icon.innerText=iconUniCode;
    divSquareDivWithIcon.appendChild(icon);

    const p1 = document.createElement("p");
    p1.innerText = title;
    divSquareDivWithIcon.appendChild(p1);

    const p2 = document.createElement("p");
    p2.innerText = moreText;
    divSquareDivWithIcon.appendChild(p2);

    parentEl.appendChild(divSquareDivWithIcon);

    return () => {
        parentEl.removeChild(divSquareDivWithIcon);
    }
}




const PageContact = function PageContact(targetEl) {
    document.body.className = "contact";

    let contactContainer = document.createElement("div");
    contactContainer.classList.add("contactContainer");

    const children = [];
    children.push(Form(contactContainer));

    //Jasio: czy tu użyć HumbleDiv i on sprząta czy jak?
    const squares = document.createElement("div");
    squares.classList.add("squares");
    contactContainer.appendChild(squares);
    children.push(SquareDivWithIcon(squares, "SquareDivWithIcon", "home_pin", "OUR MAIN OFFICE", "Somewher 6, Over the Rainbow 12-345"));
    children.push(SquareDivWithIcon(squares, "SquareDivWithIcon", "call", "PHONE NUMBER", "1234567890"));
    children.push(SquareDivWithIcon(squares, "SquareDivWithIcon", "fax", "FAX", "1234567890"));
    children.push(SquareDivWithIcon(squares, "SquareDivWithIcon", "mail", "EMAIL", "bun@bakery.com"));

    targetEl.appendChild(contactContainer);

    return () => {
        children.forEach(destroy => destroy());
        targetEl.removeChild(contactContainer);
    }
}


export { PageContact };