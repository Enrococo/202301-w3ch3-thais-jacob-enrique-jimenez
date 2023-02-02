/*export default class Button extends Component {
  #text: string;
  properties: HTMLButtonElement;

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
    this.element.
  }
}*/
export default class Button {
    element = document.createElement("button");
    #parentElement;
    #text;
    constructor(text, parentElement, cssClasses = "") {
        this.element.className = cssClasses;
        this.#parentElement = parentElement;
        this.#text = text;
    }
    render() {
        this.#parentElement?.appendChild(this.element);
        this.element.textContent = this.#text;
    }
}
