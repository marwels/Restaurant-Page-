import { Button } from './DOMcomponents/Button';
// import { Ahref } from './DOMcomponents/Ahref';
import { MenuButton } from './DOMcomponents/MenuButton';
import { Header } from './DOMcomponents//Header';
import { PageHome } from './home';
import { PageSweet } from './sweet';
import { MakeSavory } from './savory';
import { PageContact } from './contact';
import './style.css';




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
            ['#Sweet', (targetEl) => PageSweet(targetEl)],
            ['#Savory', (targetEl) => MakeSavory(targetEl)],
            ['#Contact', (targetEl) => PageContact(targetEl)],
            ['#Home', (targetEl) => PageHome(targetEl)],
            ['', (targetEl) => PageHome(targetEl)]
        ])
    ]

    return () => {
        children.forEach(destroy => destroy());
    }
}


App(document.getElementById("content"));


