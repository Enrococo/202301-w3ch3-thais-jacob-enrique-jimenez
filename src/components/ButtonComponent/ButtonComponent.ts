import Component from "../AppComponent/AppComponent.js";

export default class Button extends Component {
  #text: string;

  constructor(
    text: string,
    parentElement: HTMLElement | null,
    cssClasses: string = ""
  ) {
    super(parentElement, "button", cssClasses);
    this.#text = text;
  }
  render() {
    super.render();
    this.element.textContent = this.#text;
  }
}
