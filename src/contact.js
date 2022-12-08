import { Input } from './DOMcomponents';

const MakeForm = function MakeForm(targetEl) {

    const form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "example.com/path");

    Input(form, "formInput", "Email", "email", "email", "");
    Input(form, "formInput", "Name", "text", "name", "");
    Input(form, "formInput", "Address", "text", "address", "");
    Input(form, "formInput", "Message", "text", "message", "");


    // create a submit button
    const submit = document.createElement("button");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Submit");
    submit.innerText = "Submit";
    form.appendChild(submit);

    targetEl.appendChild(form);


    return () => {
        parentEl.removeChild(form);
    }
}

const SquareDivWithIcon = function SquareDivWithIcon(parentEl, className, title, moreText) {
    const div = document.createElement("div");
    div.className = className;

    const icon = document.createElement("div");
    icon.className = "icon"
    div.appendChild(icon);

    const p1 = document.createElement("p");
    p1.innerText = title;
    div.appendChild(p1);

    const p2 = document.createElement("p");
    p2.innerText = moreText;
    div.appendChild(p2);

    parentEl.appendChild(div);

    return () => {
        parentEl.removeChild(div);
    }
}





const MakeContact = function MakeContact(targetEl) {
    document.body.className = "contact";

    let contactContainer = document.createElement("div");
    contactContainer.classList.add("contactContainer");


    MakeForm(contactContainer);

    const squares = document.createElement("div");
    contactContainer.appendChild(squares);

    SquareDivWithIcon(squares, "SquareDivWithIcon, office", "OUR MAIN OFFICE", "Somewher 6, Over the Rainbow 12-345");
    SquareDivWithIcon(squares, "SquareDivWithIcon, phone", "PHONE NUMBER", "1234567890");
    SquareDivWithIcon(squares, "SquareDivWithIcon, fax", "FAX", "1234567890");
    SquareDivWithIcon(squares, "SquareDivWithIcon, email", "FAX", "bun@bakery.com");



    targetEl.appendChild(contactContainer);

    return () => {
        targetEl.removeChild(contactContainer);
    }
}


export { MakeContact };