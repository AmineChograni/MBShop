import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/static/models/Product';
import { ProductService } from 'src/app/static/services/product.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];


  constructor(private productService: ProductService,private router: Router) { }

  public createImgPath = (serverPath: string) => { 
    return `https://localhost:44353/${serverPath}`; 
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products=data;
      console.log(this.products);
    })
  }
  add(){
    this.router.navigate(['/addprod']) 
  }
}
