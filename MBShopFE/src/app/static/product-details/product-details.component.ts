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
  radioPointureValue = '';
  radioColorValue='';
  colorErr=false;
  tailleErr=false;

  productId:Number;
  product:Product;
  products: Product[] = [];
  category: Category;
  tailles:Taille[]=[];
  colors: Couleur[]=[];
  prodImages:ProdImage[]=[];
  mainProductImage:String;
  productImagesUrl:String[]=[];
  categoryId:Number;

  loading = true;
  

  constructor(private titleService: Title,private router:ActivatedRoute,private route : Router,private productService: ProductService) { }

  public createImgPath = (serverPath: String) => { 
    return `https://localhost:44353/${serverPath}`; 
  }
  

  ngOnInit(): void {

    this.titleService.setTitle("MBShop | Product");

    this.productId =this.router.snapshot.params['id'];
    
    this.getProduct(this.productId)


    
    
  }

  getProduct(prodId:Number){
    this.productService.getProductById(prodId).subscribe(data => {
      this.loading = false;
      this.product=data;
      this.categoryId=this.product.categoryId;
      this.tailles=this.product.tailles;
      this.colors=this.product.couleurs;
      this.prodImages=this.product.prodImages;

      this.mainProductImage=this.product.imageURL;
      this.productImagesUrl=[]
      for(var image of this.prodImages){
        for (var image of this.prodImages) {
          if(image.color == 'noir'){
            this.productImagesUrl.push(image.imageURL);
          }
        }
      }
      
      
      this.getRelativeProducts(this.categoryId);
      
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

  getRelativeProducts(cateId:Number){
    this.productService.getProductByCategoriesId(cateId).subscribe(data => {
      this.products=data.products;
      this.RemoveElementFromObjectArray(this.productId);
    })
  }

  goPaiment(){
    if(this.radioColorValue == ''){
      this.colorErr=true;
    }else if(this.radioPointureValue == ''){
      this.tailleErr=true;
    }else{
      this.route.navigate(['/paiement'],{queryParams:{
        prodImg: this.mainProductImage,
        prodName:this.product.label,
        prodColor:this.radioColorValue,
        prodPoint:this.radioPointureValue,
        prodPrice:this.product.price,
        prodQuantity:this.demoValue,
        categoryId:this.categoryId
      }});
    }

  }
  RemoveElementFromObjectArray(key: Number) {
    this.products.forEach((value,index)=>{
        if(value.id==key) this.products.splice(index,1);
    });
} 


}
