import { Category } from "./Category";

export class Group{
    id?: Number;
    label: String;
    categories: Category[];
    
    constructor(id:Number, label: String){
        this.id=id;
        this.label=label;
    }
}