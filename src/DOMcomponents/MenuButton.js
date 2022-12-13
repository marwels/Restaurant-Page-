import { Ahref } from './Ahref';

const MenuButton = function MenuButton(parentEl, label, onClick) {
    const wrapper = document.createElement("div");
    wrapper.className = "buttonWrapper";
    const destroy = Ahref(wrapper, "menu-button", label, onClick);
    parentEl.appendChild(wrapper);

    return () => {
        destroy();
        parentEl.removeChild(wrapper);
    }
}
export { MenuButton };