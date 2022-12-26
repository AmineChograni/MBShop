import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

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

  constructor(private titleService: Title) { }


  ngOnInit(): void {
    this.titleService.setTitle("MBShop | Categories");
  }

  log(): void {
    console.log('click dropdown button');
  }

}
