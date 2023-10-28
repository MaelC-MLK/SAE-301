/**
 *  Les classes existent aussi en Javascript comme dans tous les langages orientés objets.
 * 
 *  Au besoin, vous avez tout ici : https://fr.javascript.info/classes
 *  Ou là : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes
 * 
 * 
 *  Il existe quelques différences de syntaxe et le support des propriétés privées est 
 *  relativement récent donc pas pris en charge pas des navigateurs plus anciens. Mais
 *  Toutes les versions de navigateurs sorties depuis 2021 les supportent donc vous
 *  pouvez vous en servir.
 * 
 */

class Product {
    _id;
    _name;
    _category;
    _main_color;
    _img;
    _description;
    _ratio;
    _price;
    _image_secondaire;
    _image_tertiaire;
    _stock;

    constructor(id, name, idcat, main_color, img, description, ratio, price, image_secondaire, image_tertiaire, stock){
        this._id = id;
        this._name = name;
        this._category = idcat;
        this._main_color = main_color;
        this._img = img;
        this._description = description;
        this._ratio = ratio;
        this._price = price;
        this._image_secondaire = image_secondaire;
        this._image_tertiaire = image_tertiaire;
        this._stock = stock;
    }

    getId(){
        return this._id;
    }

    getName(){
        return this._name;
    }

    getIdCategory(){
        return this._category;
    }

    getMainColor(){
        return this._main_color;
    }

    getImg(){
        return this._img;
    }

    getDescription(){
        return this._description;
    }

    getRatio(){
        return this._ratio;
    }

    getPrice(){
        return this._price;
    }

    getImageSecondaire(){
        return this._image_secondaire;
    }

    getImageTertiaire(){
        return this._image_tertiaire;
    }

    getStock(){
        return this._stock;
    }

}

export {Product};