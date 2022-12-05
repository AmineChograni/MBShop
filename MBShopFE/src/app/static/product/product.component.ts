import { Component, OnInit } from '@angular/core';

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

  constructor() { }


  ngOnInit(): void {
  }

  log(): void {
    console.log('click dropdown button');
  }

}
