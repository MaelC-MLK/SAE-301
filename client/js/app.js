import { ProductCollection } from "./class/product-manager.js";
import { productRenderer } from "./renderer/product-renderer.js";
import { pageRenderer } from "./renderer/page-renderer.js";



let M = {
  products: new ProductCollection(),
};

let V = {};

let C = {};

let menu = document.querySelector("#menu-select");


V.init = function () {
  menu.addEventListener("click", C.handler_clickOnFilter);
  document
    .querySelector("#bouton-all")
    .addEventListener("click", C.handler_clickOnButton);
  document
    .querySelector("#card-grid")
    .addEventListener("click", C.handler_clickOnCard);


    
};

V.render = function (data) {
  document.querySelector("#card-grid").innerHTML = productRenderer(data);
};

V.renderPage = function (data) {
  document.querySelector("#content").innerHTML = pageRenderer(data);

};



C.handler_clickOnFilter = function (ev) {
  if (ev.target.tagName === "LI" || ev.target.tagName === "P") {
    const listItem =
      ev.target.tagName === "LI" ? ev.target : ev.target.closest("li");
    if (listItem) {
      for (let item of menu.children) {
        item.classList.remove("select-active");
      }
      listItem.classList.add("select-active");
    }

    if (ev.target.dataset.filter == "biere") {
      V.render(M.products.findByCategory(1));
    } else if (ev.target.dataset.filter == "verres") {
      V.render(M.products.findByCategory(2));
    } else if (ev.target.dataset.filter == "accompagnements") {
      V.render(M.products.findByCategory(3));
    }
  }
  
};

C.handler_clickOnButton = function (ev) {
  if (ev.target.tagName === "BUTTON") {
    if (ev.target.dataset.filter == "all") {
      V.render(M.products.findAll());

      for (let item of menu.children) {
        item.classList.remove("select-active");
      }
    }
  }
  
};

C.handler_clickOnCard = function (ev) {
  const clickedLI = ev.target.closest("li");

  if (clickedLI) {

      const productId = ev.target.closest("li").id;
      const product = M.products.find(productId);

      if (product) {
        V.renderPage([product]);
      } else {
        console.error("Product not found.");
      }
    
  }
};



C.init = async function () {
  let nb = await M.products.load("https://mmi.unilim.fr/~cheron8/api/products");
  console.log(nb + " products added in the ProductCollection");
  V.init();
  V.render(M.products.findAll());
  
};

C.init();
