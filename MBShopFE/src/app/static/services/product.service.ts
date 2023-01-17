import { Command } from './../models/Command';
import { Product } from './../models/Product';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions={
    headers:new HttpHeaders({'Content-type':'application/json'})
};

@Injectable({
    providedIn: 'root'
})
export class ProductService{
    productApi=environment.baseUrl;

    products:Product[];

    constructor(private httpClient:HttpClient) { }

    getProducts(): Observable<any>{
        return this.httpClient.get<any>(`${this.productApi}/product`)
    }



    getCategoriesByGroupId(groupId: Number): Observable<any>{
        return this.httpClient.get<any>(`${this.productApi}/group/${groupId}`)
    }
    getProductByCategoriesId(categoryId: Number): Observable<any>{
        return this.httpClient.get<any>(`${this.productApi}/categories/${categoryId}`)
    }
    getProductByCategoriesIdFilterLabel(categoryId: Number,label: string): Observable<any>{
        return this.httpClient.get<any>(`${this.productApi}/categories/${categoryId}/${label}`)
    }

    getProductById(productId:Number): Observable<any>{
        return this.httpClient.get<any>(`${this.productApi}/product/${productId}`)
    }
    getAllCategories():Observable<any>{
        return this.httpClient.get<any>(`${this.productApi}/categories`)
    }

    postComm(command:Command){
        return this.httpClient.post('https://sheetdb.io/api/v1/1fuhwuz2s71hh',command);

    }
}