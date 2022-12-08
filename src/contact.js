


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


const MakeContact = function MakeContact(targetEl) {
    document.body.className = "contact";

    let contactContainer = document.createElement("div");
    contactContainer.classList.add("contactContainer");

    MakeForm(contactContainer);


    targetEl.appendChild(contactContainer);

    return () => {
        targetEl.removeChild(contactContainer);
    }
}


export { MakeContact };