export class Couleur{
    id?:Number;
    label: String;
    codeColor:String;
    productId?: Number;

    constructor( label: String,codeColor: String, productId?: Number,id?: Number){
        this.id=id;
        this.label=label;
        this.codeColor=codeColor;
        this.productId=productId;
    }
}