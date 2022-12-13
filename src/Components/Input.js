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
        parentEl.removeChild(labelForInput);
        parentEl.removeChild(input);
    }
}





export { Input };