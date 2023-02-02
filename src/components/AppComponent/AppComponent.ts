export default class Component {
  #parentElement: HTMLElement | undefined;
  protected element: HTMLElement;

  constructor(
    parentElement: HTMLElement | undefined,
    tag: string,
    cssClasses = ""
  ) {
    this.element = document.createElement(tag);
    this.element.className = cssClasses;
    this.#parentElement = parentElement;
  }

  render() {
    this.#parentElement?.appendChild(this.element);
  }
}
