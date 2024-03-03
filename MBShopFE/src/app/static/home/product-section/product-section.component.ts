import { Product } from './../../models/Product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.scss']
})
export class ProductSectionComponent implements OnInit {



  products: Product[] = [];
  prodH: Product[] = [];
  prodE:  Product[] = [];

  loading = true;

  constructor(private productService: ProductService) { }

  public createImgPath = (serverPath: string) => { 
    return `https://localhost:44353/${serverPath}`; 
  }

  ngOnInit(): void {

    this.productService.getProducts().subscribe(data => {
      this.loading = false;
      this.products=data;
      
      
      for (var product of this.products) {
        if(product.categoryId == 3 || product.categoryId == 4){
          this.prodE.push(product);
          
        }else{
          this.prodH.push(product);
        }
      }
      
    })

    

  }

}
