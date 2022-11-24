
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

const MenuButton = function MenuButton(parentEl, label, onClick) {
    const wrapper = document.createElement("div");
    const destroy = Button(wrapper, "menu-button", label, onClick);
    parentEl.appendChild(wrapper);

    return () => {
        destroy();
        parentEl.removeChild(wrapper);
    }
}

const Header = function Header(parentEl) {
    const menuBar = document.createElement("div");
    menuBar.classList.add("menu_bar");

    const logo = document.createElement("div");
    logo.classList.add("logo");
    menuBar.appendChild(logo);


    // const children = [
    //     MenuButton(menuBar, "+", () => {
    //         alert("Przycisk 1");
    //     }),
    //     MenuButton(menuBar, "-", () => {
    //         alert("Przycisk 2")
    //     })
    // ]

    let menuButtonNames = ["home", "sweet", "savory", "contact"]

    const children = [];

    for (let i = 0; i < menuButtonNames.length; i++) {
        const btn_name = menuButtonNames[i];
        children.push(MenuButton(menuBar, btn_name, () => {
            window.location.hash = `#${btn_name}`
        }))
        // menuButton.addEventListener("click", XXX)
    }

    parentEl.appendChild(menuEl);

    return () => {
        children.forEach(destroy => destroy());
        parentEl.removeChild(menuBar);
    }
}

const Router = function Router(parentEl, routes) {
    let current_route = window.location.hash;
    let destroy;

    function onHashChange() {
        current_route = window.location.hash;
        const nextRoute = selectRoute();
        renderComponent(nextRoute[1]);
    }

    function selectRoute() {
        let target_route = routes.find((route) => route[0] === current_route);
        if (!target_route) {
            target_route = routes.find((route) => route[0] === '');
        }
        return target_route;
    }

    function renderComponent(component) {
        if (destroy) destroy();
        destroy = component(parentEl);
    }

    onHashChange();

    window.addEventListener("hashchange", onHashChange);

    return () => {
        destroy();
        window.removeEventListener("hashchange", onHashChange);
    }
}

const App = function App(parentEl) {
    const children = [
        Header(parentEl),
        Router(parentEl, [
            ['#sweet', (targetEl) => Sweet(targetEl)]
            ['#savory', (targetEl) => Savory(targetEl)]
            ['#contact', (targetEl) => Contact(targetEl)]
            ['#home', (targetEl) => Home(targetEl)]
            ['', (targetEl) => Home(targetEl)]
        ])
    ]

    return () => {
        children.forEach(destroy => destroy());
    }
}

App(document.getElementById("content"));





// export { createManu };
// export { createMainPage };
