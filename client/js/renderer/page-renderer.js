import { Product } from "../class/product.js";

const TemplatePageBeer = document.querySelector(
  "#template-page-biere"
).innerHTML;
const TemplatePageGlass = document.querySelector(
  "#template-page-verre"
).innerHTML;
const TemplatePageAccompagnement = document.querySelector(
  "#template-page-accompagnement"
).innerHTML;

let renderPage = function (data) {
  let all = "";
  if (data instanceof Array === false) {
    console.error("data has to be an array of Products");
    return all;
  }
  for (let p of data) {
    if (p.getIdCategory() == 1) all += renderPageBeer(p);
    else if (p.getIdCategory() == 2) all += renderPageGlass(p);
    else if (p.getIdCategory() == 3) all += renderPageAccompagnement(p);
  }
  return all;
};

let renderPageBeer = function (data) {
  let html = "";

  html = TemplatePageBeer.replace("{{id}}", data.getId());
  html = html.replace("{{nom}}", data.getName());
  html = html.replace("{{category}}", data.getIdCategory());
  html = html.replace("{{main-color}}", data.getMainColor());
  html = html.replace("{{image}}", data.getImg());
  html = html.replace("{{description}}", data.getDescription());
  html = html.replace("{{ratio}}", data.getRatio());
  html = html.replace("{{prix}}", data.getPrice());
  html = html.replace("{{stock}}", data.getStock());

  return html;
};

let renderPageGlass = function (data) {
  let html = "";

  html = TemplatePageGlass.replace("{{id}}", data.getId());
  html = html.replace("{{nom}}", data.getName());
  html = html.replace("{{category}}", data.getIdCategory());
  html = html.replace("{{main-color}}", data.getMainColor());
  html = html.replace("{{image}}", data.getImg());
  html = html.replace("{{description}}", data.getDescription());
  html = html.replace("{{ratio}}", data.getRatio());
  html = html.replace("{{prix}}", data.getPrice());
  html = html.replace("{{stock}}", data.getStock());

  

  return html;
};

let renderPageAccompagnement = function (data) {
  let html = "";

  html = TemplatePageAccompagnement.replace("{{id}}", data.getId());
  html = html.replace("{{nom}}", data.getName());
  html = html.replace("{{category}}", data.getIdCategory());
  html = html.replace("{{main-color}}", data.getMainColor());
  html = html.replace("{{image}}", data.getImg());
  html = html.replace("{{description}}", data.getDescription());
  html = html.replace("{{ratio}}", data.getRatio());
  html = html.replace("{{prix}}", data.getPrice());
  html = html.replace("{{stock}}", data.getStock());

  return html;
};




export { renderPage as pageRenderer };