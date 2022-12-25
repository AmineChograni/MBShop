import { Product } from "./Product";

export class Category{
    id?: Number;
    label : String;
    groupId : Number;
    products : Product[];

    constructor(id: Number,label: String,groupId: Number){
        this.id=id;
        this.groupId=groupId;
        this.label=label;
    }
}