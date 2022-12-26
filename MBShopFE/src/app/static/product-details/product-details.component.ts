import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './../models/Product';
import { ProductService } from './../services/product.service';
import { Category } from './../models/Category';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  demoValue = 1;
  radioValue = 'A';

  categoryId: Number;
  productId:Number;
  product:Product;
  products: Product[] = [];
  category: Category;

  constructor(private titleService: Title,private router:ActivatedRoute,private route : Router,private productService: ProductService) { }

  public createImgPath = (serverPath: string) => { 
    return `https://localhost:44353/${serverPath}`; 
  }
  

  ngOnInit(): void {

    this.titleService.setTitle("MBShop | Product");

    this.productId =this.router.snapshot.params['id'];

    this.productService.getProductById(this.productId).subscribe(data => {
      this.product=data;
      
      
      
      console.log(this.product);
      
    })
    
  }

}
