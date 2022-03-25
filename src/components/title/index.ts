export function titleInit() {
  class Title extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      var shadow = this.attachShadow({ mode: "open" });

      const style = document.createElement("style");
      style.innerText = `
    
      .root {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
      }
      
      .title {
        font-size: 52px;
        font-weight: bold;
        text-align: center;
        margin: 40px 0px 20px 0px;
       
      }

      .sub {
        font-size: 18px;
        font-weight: regular;
        text-align: center;
      }

      
      `;

      const div = document.createElement("div");
      div.classList.add("root");

      div.innerHTML = `
      
      <p class="title">Soy el título de la página</p>
      <p class="sub">Esta página sin dudas es la mejor</p>
      
      
      
      `;

      shadow.appendChild(style);
      shadow.appendChild(div);
    }
  }
  customElements.define("title-page", Title);
}
