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

    getProductById(productId:Number): Observable<any>{
        return this.httpClient.get<any>(`${this.productApi}/product/${productId}`)
    }
}