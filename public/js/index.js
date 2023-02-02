import Button from "./components/ButtonComponent/ButtonComponent.js";
const buttonSend = new Button("Enviar", document.body);
buttonSend.render();
buttonSend.element.addEventListener("click", () => {
    buttonSend.element.classList.toggle("button-disabled");
});
