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

export { Button };