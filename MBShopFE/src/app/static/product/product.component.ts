import { Taille } from './../models/Taille';
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


export class ProductComponent implements OnInit{

  selectedValue: number;
  search: string;


  categoryId: Number;
  products: Product[] = [];
  category: Category;
  allCategories : Category[]=[];

  loading = true;


  constructor(private titleService: Title,private router:ActivatedRoute,private route : Router,private productService: ProductService) { }

  public createImgPath = (serverPath: string) => { 
    return `https://localhost:44353/${serverPath}`; 
  }


  ngOnInit(): void {

    this.titleService.setTitle("MBShop | Categories");

    this.categoryId = this.router.snapshot.params['id'];

    this.productService.getProductByCategoriesId(this.categoryId).subscribe(data => {
      
      this.category=data;
      this.loading = false;
      this.products=this.category.products;
    })
    

    this.productService.getAllCategories().subscribe(data => {
      this.allCategories=data;
    })

  }

  log(): void {
    console.log('click dropdown button');
  }

  goBack() {
    window.history.back()
  }

  Search(){
    this.loading = true;
    if(this.search != ""){
      this.productService.getProductByCategoriesIdFilterLabel(this.categoryId,this.search).subscribe(data =>{
        this.category=data;
        this.loading = false;
        this.products=this.category.products;
      })

    }else if(this.search == ""){
      this.ngOnInit();
    }
  }

  selectCategory(id: number){
    window.location.href=`/products/${id}`;
  }

}
