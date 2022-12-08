import { Button } from './DOMcomponents';
// import { Ahref } from './DOMcomponents';
import { MenuButton } from './DOMcomponents';
import { MakeHome } from './home';
import { MakeSweet } from './sweet';
import { MakeSavory } from './savory';
import { MakeContact } from './contact';




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
            ['#Sweet', (targetEl) => MakeSweet(targetEl)],
            ['#Savory', (targetEl) => MakeSavory(targetEl)],
            ['#Contact', (targetEl) => MakeContact(targetEl)],
            ['#Home', (targetEl) => MakeHome(targetEl)],
            ['', (targetEl) => MakeHome(targetEl)]
        ])
    ]

    return () => {
        children.forEach(destroy => destroy());
    }
}


// const Home = function Home(targetEl) {
//     const el = document.createElement("div")
//     el.innerText = "test";

//     targetEl.appendChild(el)
//     return () => {
//         targetEl.removeChild(el);
//     }
// }


App(document.getElementById("content"));





export { Button };
// export { createMainPage };
