export function formInit() {
  class Form extends HTMLElement {
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
             
          }
          
        .label {
            font-size: 18px;
        }

        .input {
            background-color: white;
            height: 55px;
            width: 312px;
            font-size: 18px;
            border: solid 2px black;
            border-radius: 4px;
            padding: 0px 0px 0px 13px ; 
            margin-bottom: 16px;
        }

        .button{
          background-color: #9CBBE9;
          height: 55px;
          width: 312px;
          font-size: 22px;
          border: none;
          border-radius: 4px;
          font-weight: bold;
          align-self: center;
        }
  
          
          `;

      const div = document.createElement("div");
      div.classList.add("root");

      div.innerHTML = `   
     
        <label class="label">Nombre</label>
        <input class="input" type="text" placeholder="ingresá tu nombre"/>
        <button class="button"> Button </button>
          
          `;

      shadow.appendChild(style);
      shadow.appendChild(div);
    }
  }
  customElements.define("form-comp", Form);
}
