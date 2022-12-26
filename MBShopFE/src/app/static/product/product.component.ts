import { Category } from './../models/Category';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './../models/Product';
import { ProductService } from './../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  selectedValue = null;
  selectedColorValue=null;
  selectedCategoriesValue=null;
  show = false;


  categoryId: Number;
  products: Product[] = [];
  category: Category;

  constructor(private titleService: Title,private router:ActivatedRoute,private route : Router,private productService: ProductService) { }

  public createImgPath = (serverPath: string) => { 
    return `https://localhost:44353/${serverPath}`; 
  }


  ngOnInit(): void {

    this.titleService.setTitle("MBShop | Categories");

    this.categoryId = this.router.snapshot.params['id'];

    this.productService.getProductByCategoriesId(this.categoryId).subscribe(data => {
      this.category=data;
      
      this.products=this.category.products;
      
      console.log(this.products);
      
    })

  }

  log(): void {
    console.log('click dropdown button');
  }

}
