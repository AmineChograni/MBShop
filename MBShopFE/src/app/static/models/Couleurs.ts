export class Couleurs{
    id?:Number;
    label: String;
    productId: Number;

    constructor(id: Number, label: String, productId: Number){
        this.id=id;
        this.label=label;
        this.productId=productId;
    }
}