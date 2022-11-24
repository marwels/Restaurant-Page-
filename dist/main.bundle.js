(self["webpackChunkrestaurant_page_"] = self["webpackChunkrestaurant_page_"] || []).push([["main"],{

/***/ "./src/main_page.js":
/*!**************************!*\
  !*** ./src/main_page.js ***!
  \**************************/
/***/ (() => {


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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/main_page.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7O0FBRUE7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0EsdUNBQXVDLFNBQVM7QUFDaEQsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7OztBQU1BLFlBQVk7QUFDWixZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLS8uL3NyYy9tYWluX3BhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBCdXR0b24gPSBmdW5jdGlvbiBCdXR0b24ocGFyZW50RWwsIGNsYXNzTmFtZSwgbGFiZWwsIG9uQ2xpY2spIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgYnV0dG9uLmlubmVyVGV4dCA9IGxhYmVsO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25DbGljayk7XG4gICAgcGFyZW50RWwuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHBhcmVudEVsLnJlbW92ZUNoaWxkKGJ1dHRvbik7XG4gICAgfVxufVxuXG5jb25zdCBNZW51QnV0dG9uID0gZnVuY3Rpb24gTWVudUJ1dHRvbihwYXJlbnRFbCwgbGFiZWwsIG9uQ2xpY2spIHtcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBkZXN0cm95ID0gQnV0dG9uKHdyYXBwZXIsIFwibWVudS1idXR0b25cIiwgbGFiZWwsIG9uQ2xpY2spO1xuICAgIHBhcmVudEVsLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgZGVzdHJveSgpO1xuICAgICAgICBwYXJlbnRFbC5yZW1vdmVDaGlsZCh3cmFwcGVyKTtcbiAgICB9XG59XG5cbmNvbnN0IEhlYWRlciA9IGZ1bmN0aW9uIEhlYWRlcihwYXJlbnRFbCkge1xuICAgIGNvbnN0IG1lbnVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVCYXIuY2xhc3NMaXN0LmFkZChcIm1lbnVfYmFyXCIpO1xuXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKTtcbiAgICBtZW51QmFyLmFwcGVuZENoaWxkKGxvZ28pO1xuXG5cbiAgICAvLyBjb25zdCBjaGlsZHJlbiA9IFtcbiAgICAvLyAgICAgTWVudUJ1dHRvbihtZW51QmFyLCBcIitcIiwgKCkgPT4ge1xuICAgIC8vICAgICAgICAgYWxlcnQoXCJQcnp5Y2lzayAxXCIpO1xuICAgIC8vICAgICB9KSxcbiAgICAvLyAgICAgTWVudUJ1dHRvbihtZW51QmFyLCBcIi1cIiwgKCkgPT4ge1xuICAgIC8vICAgICAgICAgYWxlcnQoXCJQcnp5Y2lzayAyXCIpXG4gICAgLy8gICAgIH0pXG4gICAgLy8gXVxuXG4gICAgbGV0IG1lbnVCdXR0b25OYW1lcyA9IFtcImhvbWVcIiwgXCJzd2VldFwiLCBcInNhdm9yeVwiLCBcImNvbnRhY3RcIl1cblxuICAgIGNvbnN0IGNoaWxkcmVuID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVCdXR0b25OYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBidG5fbmFtZSA9IG1lbnVCdXR0b25OYW1lc1tpXTtcbiAgICAgICAgY2hpbGRyZW4ucHVzaChNZW51QnV0dG9uKG1lbnVCYXIsIGJ0bl9uYW1lLCAoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGAjJHtidG5fbmFtZX1gXG4gICAgICAgIH0pKVxuICAgICAgICAvLyBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBYWFgpXG4gICAgfVxuXG4gICAgcGFyZW50RWwuYXBwZW5kQ2hpbGQobWVudUVsKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goZGVzdHJveSA9PiBkZXN0cm95KCkpO1xuICAgICAgICBwYXJlbnRFbC5yZW1vdmVDaGlsZChtZW51QmFyKTtcbiAgICB9XG59XG5cbmNvbnN0IFJvdXRlciA9IGZ1bmN0aW9uIFJvdXRlcihwYXJlbnRFbCwgcm91dGVzKSB7XG4gICAgbGV0IGN1cnJlbnRfcm91dGUgPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcbiAgICBsZXQgZGVzdHJveTtcblxuICAgIGZ1bmN0aW9uIG9uSGFzaENoYW5nZSgpIHtcbiAgICAgICAgY3VycmVudF9yb3V0ZSA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuICAgICAgICBjb25zdCBuZXh0Um91dGUgPSBzZWxlY3RSb3V0ZSgpO1xuICAgICAgICByZW5kZXJDb21wb25lbnQobmV4dFJvdXRlWzFdKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZWxlY3RSb3V0ZSgpIHtcbiAgICAgICAgbGV0IHRhcmdldF9yb3V0ZSA9IHJvdXRlcy5maW5kKChyb3V0ZSkgPT4gcm91dGVbMF0gPT09IGN1cnJlbnRfcm91dGUpO1xuICAgICAgICBpZiAoIXRhcmdldF9yb3V0ZSkge1xuICAgICAgICAgICAgdGFyZ2V0X3JvdXRlID0gcm91dGVzLmZpbmQoKHJvdXRlKSA9PiByb3V0ZVswXSA9PT0gJycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YXJnZXRfcm91dGU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICBpZiAoZGVzdHJveSkgZGVzdHJveSgpO1xuICAgICAgICBkZXN0cm95ID0gY29tcG9uZW50KHBhcmVudEVsKTtcbiAgICB9XG5cbiAgICBvbkhhc2hDaGFuZ2UoKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCBvbkhhc2hDaGFuZ2UpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgZGVzdHJveSgpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIiwgb25IYXNoQ2hhbmdlKTtcbiAgICB9XG59XG5cbmNvbnN0IEFwcCA9IGZ1bmN0aW9uIEFwcChwYXJlbnRFbCkge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gW1xuICAgICAgICBIZWFkZXIocGFyZW50RWwpLFxuICAgICAgICBSb3V0ZXIocGFyZW50RWwsIFtcbiAgICAgICAgICAgIFsnI3N3ZWV0JywgKHRhcmdldEVsKSA9PiBTd2VldCh0YXJnZXRFbCldXG4gICAgICAgICAgICBbJyNzYXZvcnknLCAodGFyZ2V0RWwpID0+IFNhdm9yeSh0YXJnZXRFbCldXG4gICAgICAgICAgICBbJyNjb250YWN0JywgKHRhcmdldEVsKSA9PiBDb250YWN0KHRhcmdldEVsKV1cbiAgICAgICAgICAgIFsnI2hvbWUnLCAodGFyZ2V0RWwpID0+IEhvbWUodGFyZ2V0RWwpXVxuICAgICAgICAgICAgWycnLCAodGFyZ2V0RWwpID0+IEhvbWUodGFyZ2V0RWwpXVxuICAgICAgICBdKVxuICAgIF1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goZGVzdHJveSA9PiBkZXN0cm95KCkpO1xuICAgIH1cbn1cblxuQXBwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKSk7XG5cblxuXG5cblxuLy8gZXhwb3J0IHsgY3JlYXRlTWFudSB9O1xuLy8gZXhwb3J0IHsgY3JlYXRlTWFpblBhZ2UgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==