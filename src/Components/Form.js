import { Input } from './Components/Input';
import { TextArea } from './Components/TextArea';
// import { HumbleDiv } from './Components/HumbleDiv';



const Form = function Form(targetEl) {
    const form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "example.com/path");

    const children = [];
    children.push(Input(form, "formInput", "Email", "email", "email", ""));
    children.push(Input(form, "formInput", "Name", "text", "name", ""));
    children.push(Input(form, "formInput", "Address", "text", "address", ""));
    children.push(TextArea(form, "message", "Message", "message", "6", "" ));
   

    // create a submit button
    const submit = document.createElement("button");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Submit");
    submit.innerText = "Submit";
    form.appendChild(submit);

    targetEl.appendChild(form);


    return () => {
        children.forEach(destroy => destroy());
        targetEl.removeChild(form);
    }
}

export { Form };