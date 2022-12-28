import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './../models/Product';
import { ProductService } from './../services/product.service';
import { Category } from './../models/Category';
import { Taille } from '../models/Taille';
import { Couleur } from '../models/Couleur';
import { ProdImage } from '../models/ProdImage';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  demoValue = 1;
  radioPointureValue = 'A';
  radioColorValue='A';

  categoryId: Number;
  productId:Number;
  product:Product;
  products: Product[] = [];
  category: Category;
  tailles:Taille[]=[];
  colors: Couleur[]=[];
  prodImages:ProdImage[]=[];
  mainProductImage:String;
  productImagesUrl:String[]=[];
  

  constructor(private titleService: Title,private router:ActivatedRoute,private route : Router,private productService: ProductService) { }

  public createImgPath = (serverPath: String) => { 
    return `https://localhost:44353/${serverPath}`; 
  }
  

  ngOnInit(): void {

    this.titleService.setTitle("MBShop | Product");

    this.productId =this.router.snapshot.params['id'];

    this.productService.getProductById(this.productId).subscribe(data => {
      this.product=data;
      this.tailles=this.product.tailles;
      this.colors=this.product.couleurs;
      this.prodImages=this.product.prodImages;
      this.mainProductImage=this.product.imageURL;
      for(var image of this.prodImages){
        this.productImagesUrl.push(image.imageURL);
      }
      console.log(this.productImagesUrl);
    })

    

  }
  colorSelect(){
    this.productImagesUrl=[]
    for (var image of this.prodImages) {
      if(image.color == this.radioColorValue){
        this.productImagesUrl.push(image.imageURL);
      }
    }
    this.mainProductImage=this.productImagesUrl[0];

  }


}
