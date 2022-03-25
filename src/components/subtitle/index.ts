export function subtitleInit() {
  class Subtitle extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      this.innerText = "Subtítulo";
      this.style.fontSize = "32px";
      this.style.textAlign = "left";
      this.style.fontWeight = "bold";
      /*     this.style.margin = "70px 0px 30px 30px"; */
    }
  }
  customElements.define("subtitle-text", Subtitle);
}
