import { Product } from "../class/product.js";

const productTemplateBiere = document.querySelector("#card_biere").innerHTML;
const productTemplateVerre = document.querySelector("#card_verre").innerHTML;
const productTemplateAccompagnement = document.querySelector("#card_accompagnement").innerHTML;


let renderProduct = function (data) {
  
  let all = "";
  if (data instanceof Array === false) {
    console.error("data has to be an array of Products");
    return all;
  }
  for (let p of data) {
    if (p.getIdCategory() == 1) all += renderBeer(p);
    else if (p.getIdCategory() == 2) all += renderGlass(p);
    else if (p.getIdCategory() == 3) all += renderAccompagnement(p);
  }
  return all;
};

let renderBeer = function (data) {
  let html = "";

  html = productTemplateBiere.replace("{{id}}", data.getId() );
  html = html.replace("{{nom}}", data.getName() );
  html = html.replace("{{id}}", data.getId() );
  html = html.replace("{{main-color}}", data.getMainColor() );
  html = html.replace("{{image1}}", data.getImg() );
  html = html.replace("{{image2}}", data.getImageSecondaire() );
  html = html.replace("{{image3}}", data.getImageTertiaire() );


  return html;
};

let renderGlass = function (data) {
let html = "";

  html = productTemplateVerre.replace("{{id}}", data.getId() );
  html = html.replace("{{nom}}", data.getName() );
  html = html.replace("{{id}}", data.getId() );
  html = html.replace("{{main-color}}", data.getMainColor() );
  html = html.replace("{{image}}", data.getImg() );


  return html;
};

let renderAccompagnement = function (data) {
let html = "";

  html = productTemplateAccompagnement.replace("{{id}}", data.getId() );
  html = html.replace("{{nom}}", data.getName() );
  html = html.replace("{{id}}", data.getId() );
  html = html.replace("{{main-color}}", data.getMainColor() );
  html = html.replace("{{image}}", data.getImg() );

  return html;
};


export { renderProduct as productRenderer };

// let render = function(data){

//   let html = "";
//   let all = "";
//   // on vérifie que data est bien est tableau
//   if (data instanceof Array === false) {
//       console.error( "data has to be an array of Products");
//       return all;
//   }
//   for(let p of data){
//       // on vérifie que p est bien un Product
//       if (p instanceof Product){
//           html = productTemplateVerre.replace("{{id}}", p.getId() );
//           html = html.replace("{{name}}", p.getName() );
//           html = html.replace("{{category}}", p.getIdCategory() );
//           all += html;
//           html = html.replace("{{main_color}}", p.getMainColor() );
//           html = html.replace("{{img}}", p.getImg() );
//           html = html.replace("{{description}}", p.getDescription() );
//           html = html.replace("{{ratio}}", p.getRatio() );
//           html = html.replace("{{price}}", p.getPrice() );
//           html = html.replace("{{image_secondaire}}", p.getImageSecondaire() );
//           html = html.replace("{{image_tertiaire}}", p.getImageTertiaire() );
//           html = html.replace("{{stock}}", p.getStock() );
//       }
//   }

//   return all;
// }

