export function footerInit() {
  class Footer extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      this.style.backgroundColor = "#f7989c";
      this.style.height = "233px";
      this.style.width = "375px";
      this.style.display = "flex";
    }
  }
  customElements.define("footer-page", Footer);
}
