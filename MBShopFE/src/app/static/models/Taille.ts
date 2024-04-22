export class Taille{
    id?:Number;
    label: String;
    productId: Number;


    constructor(label: String, productId: Number,id?: Number){
        this.id=id;
        this.label=label;
        this.productId=productId;
    }

}