import { Product } from "./product.js";
import { getRequest, postRequest } from "../api-queries.js";

class ProductCollection {

    _uri; // pour mémoriser l'uri utilisée pour chargée les produits (peut être utile si refresh, enregistrement de produit etc...)
    _products; // tableau de Product

    constructor(){
        this._uri = "";
        this._products = [];
    }

    async load(uri){
        this._uri = uri;
        let objects = await getRequest(uri);
        for(let item of objects){
            let p = new Product(item.id, item.name, item.category, item.main_color, item.img, item.description, item.ratio, item.price, item.image_secondaire, item.image_tertiaire, item.stock);
            this._add(p);
        }
        return this._products.length;
    }

    // _ marche aussi sur les méthodes
    _add(p){
        if ( p instanceof Product) // prevent from adding object that are not Product instances
            this._products.push(p);
    }

    async create(name, idcat, main_color, img, description, ratio, price, image_secondaire, image_tertiaire, stock){
        if (this._uri == "" ){
            console.log("Warning, the api server uri is not set.");
        }
        let object = await postRequest(this._uri, {name: name, category: idcat, main_color: main_color, img: img, description: description, ratio: ratio, price: price, image_secondaire: image_secondaire, image_tertiaire: image_tertiaire, stock: stock});
        if (object){
            this._add(new Product(object.id, object.name, object.category, object.main_color, object.img, object.description, object.ratio, object.price, object.image_secondaire, object.image_tertiaire, object.stock));
        }
        else{
            console.log("Fail to create the Product");
        }
    }

    find(id){
        return this._products.find( p => p.getId()==id );
    }

    findAll(){
        return this._products;
    }

    findByCategory(idcat){
        return this._products.filter( p => p.getIdCategory()==idcat);
    }
}


export {ProductCollection}