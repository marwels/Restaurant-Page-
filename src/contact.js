
const MakeContact = function MakeContact(targetEl) {
    document.body.className = "contact";

    let contactContainer = document.createElement("div");
    contactContainer.classList.add("contactContainer");




    targetEl.appendChild(contactContainer);

    return () => {
        targetEl.removeChild(savoryContainer);
    }
}




export { MakeContact };