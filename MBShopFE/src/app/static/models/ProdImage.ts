export class ProdImage{
    id?: Number;
    color: String;
    imageURL: String;
    productId: Number;

    constructor(id: Number, color: String, imageURL: String, productId: Number){
        this.id=id;
        this.color=color;
        this.imageURL=imageURL;
        this.productId=productId;
    }
}