import { footerInit } from "./components/footer/index";
import { headerInit } from "./components/header/index";
import { subtitleInit } from "./components/subtitle/index";
import { titleInit } from "./components/title/index";
import { textBodyInit } from "./components/text_body/index";
import { volverButtonInit } from "./components/button_volver/index";
import { formInit } from "./components/form/index";

function main() {
  console.log("soy el main");
  headerInit();
  titleInit();
  subtitleInit();
  textBodyInit();
  volverButtonInit();
  formInit();
  footerInit();
}
main();
