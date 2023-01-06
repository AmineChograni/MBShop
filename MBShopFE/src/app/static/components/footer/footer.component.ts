import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../services/product.service';
import { Category } from '../../models/Category';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private productService: ProductService) { }

  categories : Category[]=[];

  ngOnInit(): void {

    this.productService.getAllCategories().subscribe(data => {
      this.categories=data;
    })
  }

}
