export function textBodyInit() {
  class Text extends HTMLElement {
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
      }
      
    .p {
        font-size: 18px;
        text-align: left;
        font-weight: light;
    }

      
      `;

      const div = document.createElement("div");
      div.classList.add("root");

      div.innerHTML = `   
 
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?";</p>
      
      `;

      shadow.appendChild(style);
      shadow.appendChild(div);
    }
  }
  customElements.define("body-text", Text);
}
