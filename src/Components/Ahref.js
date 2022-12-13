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

export { Ahref };