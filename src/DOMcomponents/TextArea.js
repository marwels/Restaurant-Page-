const TextArea = function TextArea(parentEl, className, label, name, rows, placeholder) {

    const labelForTextarea = document.createElement("label");
    labelForTextarea.setAttribute("for", name);
    labelForTextarea.innerText = label;
    parentEl.appendChild(labelForTextarea);

    const textarea = document.createElement("textarea");
    textarea.className = className;
    textarea.setAttribute("minlength", "1");
    textarea.setAttribute("maxlength", "2000");
    textarea.setAttribute("name", name);
    textarea.setAttribute("rows", rows);
    parentEl.appendChild(textarea);

    return () => {
        parentEl.removeChild(labelForTextarea);
        parentEl.removeChild(textarea);
    }
}





export { TextArea };