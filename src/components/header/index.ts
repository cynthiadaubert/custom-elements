export function headerInit() {
  class Header extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      this.style.backgroundColor = "#bce0d6";
      this.style.height = "60px";
      this.style.width = "375px";
      this.style.display = "flex";
      this.style.justifyContent = "center";
      this.style.alignItems = "center";
    }
  }
  customElements.define("header-page", Header);
}
