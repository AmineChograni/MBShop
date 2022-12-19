import { Taille } from "./Taille";
import { Couleur } from "./Couleur";
import { Tag } from "./Tag";
import { ProdImage } from "./ProdImage";

export class Product {
    id?: Number;
    label: String;
    description: String;
    sold: Boolean;
    new: Boolean;
    price: Number;
    priceSold: Number;
    categoryId: Number;
    tailles:Taille[];
    couleurs:Couleur[];
    tags:Tag[];
    imageURL: String;
    prodImages:ProdImage[];
    date: Date;

    constructor(id: Number, label: String, description: String, sold: Boolean, neww: boolean ,price: Number, priceSold: Number, categoryId: Number, imageURL: String){
        this.id=id;
        this.label=label;
        this.description=description;
        this.sold=sold;
        this.new=neww;
        this.price=price;
        this.priceSold=priceSold;
        this.categoryId=categoryId;
        this.imageURL=imageURL;
    }
}