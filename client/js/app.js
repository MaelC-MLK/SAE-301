import { ProductCollection } from "./class/product-manager.js";
import { productRenderer } from "./renderer/product-renderer.js";
import { pageRenderer } from "./renderer/page-renderer.js";



let M = {
  products: new ProductCollection(),
};

let V = {};

let C = {};





V.render = function (data) {
  document.querySelector("#card-grid").innerHTML = productRenderer(data);
};

V.renderPage = function (data) {
  document.querySelector("#content").innerHTML = pageRenderer(data);

};





C.init = async function () {
  let nb = await M.products.load("https://mmi.unilim.fr/~cheron8/api/products");
  console.log(nb + " products added in the ProductCollection");
  V.render(M.products.findAll());
  
};

C.init();
