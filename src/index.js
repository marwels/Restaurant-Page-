import { Header } from './Components/Header';
import { Router } from './Components/Router';
import { PageHome } from './home';
import { PageSweet } from './sweet';
import { PageSavory } from './savory';
import { PageContact } from './contact';

import './style.css';






const App = function App(parentEl) {
    const children = [
        Header(parentEl),
        Router(parentEl, [
            ['#Sweet', (targetEl) => PageSweet(targetEl)],
            ['#Savory', (targetEl) => PageSavory(targetEl)],
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


