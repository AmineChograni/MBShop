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
    
}