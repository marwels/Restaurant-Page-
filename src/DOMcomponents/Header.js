const Header = function Header(parentEl) {
    const menuBar = document.createElement("div");
    menuBar.classList.add("menu_bar");

    const logo = document.createElement("div");
    logo.classList.add("logo");
    logo.innerText = "LOGO";
    menuBar.appendChild(logo);

    let menuButtonNames = ["Home", "Sweet", "Savory", "Contact"]

    const menuButtonsDiv = document.createElement("div");
    menuButtonsDiv.classList.add("menuButtonsDiv");

    const children = [];

    for (let i = 0; i < menuButtonNames.length; i++) {
        const btn_name = menuButtonNames[i];
        children.push(MenuButton(menuButtonsDiv, btn_name, () => {
            window.location.hash = `#${btn_name}`
        }))
        // menuButton.addEventListener("click", XXX)
    }
    menuBar.appendChild(menuButtonsDiv);
    parentEl.appendChild(menuBar);

    return () => {
        children.forEach(destroy => destroy());
        parentEl.removeChild(menuBar);
    }
}

export { Header };