export function volverButtonInit() {
  class Volver extends HTMLElement {
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
            justify-content: center;
        }
        
      .volver{
        background-color: white;
        height: 55px;
        width: 312px;
        font-size: 22px;
        border: solid 2px black;
        border-radius: 4px;
        font-weight: bold;
        margin-bottom: 60px;
        margin-top: 70px;
      }

        
        `;

      const div = document.createElement("div");
      div.classList.add("root");

      div.innerHTML = `
        
        <button class="volver"> Volver </button>
        
        
        
        `;

      shadow.appendChild(style);
      shadow.appendChild(div);
    }
  }
  customElements.define("button-volver", Volver);
}

/*   margin-top: 69px;
padding: 15px auto  */
