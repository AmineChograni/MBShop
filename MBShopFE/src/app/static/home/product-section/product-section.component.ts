import { Product } from './../../models/Product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.scss']
})
export class ProductSectionComponent implements OnInit {

  Hprod: {PTitle: string,PPrice: number, imgURL: string }[] = [
    { "PTitle": "Rppaz" ,"PPrice":125, "imgURL": "../../../../assets/images/Hprod1.jpg" },
    { "PTitle": "Gokze" ,"PPrice":253, "imgURL": "../../../../assets/images/Hprod2.jpg" },
    { "PTitle": "Tdff" ,"PPrice":325,  "imgURL": "../../../../assets/images/Hprod3.jfif" },
    { "PTitle": "Tinf" ,"PPrice":214, "imgURL": "../../../../assets/images/Hprod4.jfif" },
    { "PTitle": "Tolf" ,"PPrice":452, "imgURL": "../../../../assets/images/71D9ImsvEtL._UY500_.jpg" },
  ];

  Fprod: {PTitle: string,PPrice: number, imgURL: string }[] = [
    { "PTitle": "Mirama" ,"PPrice":156, "imgURL": "../../../../assets/images/Fprod1.jpeg" },
    { "PTitle": "Loza" ,"PPrice":325, "imgURL": "../../../../assets/images/fprod2.jfif" },
    { "PTitle": "TSilo" ,"PPrice":123,  "imgURL": "../../../../assets/images/Fprod3.jpeg" },
    { "PTitle": "Tamila" ,"PPrice":415, "imgURL": "../../../../assets/images/Fprod4.jpg" },
    { "PTitle": "Tamin" ,"PPrice":235, "imgURL": "../../../../assets/images/Fprod5.jfif" },
  ];

  Cprod: {PTitle: string,PPrice: number, imgURL: string }[] = [
    { "PTitle": "Mokasa" ,"PPrice":745, "imgURL": "../../../../assets/images/Cprod1.jpg" },
    { "PTitle": "Lobana" ,"PPrice":142, "imgURL": "../../../../assets/images/Cprod2.jfif" },
    { "PTitle": "TSonami" ,"PPrice":256,  "imgURL": "../../../../assets/images/Cprod3.jpg" },
    { "PTitle": "Taztaza" ,"PPrice":856, "imgURL": "../../../../assets/images/Cprod4.jpg" },
    { "PTitle": "Fatima" ,"PPrice":321, "imgURL": "../../../../assets/images/Cprod5.jpg" },
  ];

  products: Product[];

  constructor(private productService: ProductService) { }

  public createImgPath = (serverPath: string) => { 
    return `https://localhost:44353/${serverPath}`; 
  }

  ngOnInit(): void {

    this.productService.getProducts().subscribe(data => {
      this.products=data;
      console.log(this.products);
    })

  }

}
