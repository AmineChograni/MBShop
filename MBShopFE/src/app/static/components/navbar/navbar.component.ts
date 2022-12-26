import { Category } from './../../models/Category';
import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  constructor(private productService: ProductService) { }

  categoryH : Category[]=[];
  categoryE : Category[]=[];

  ngOnInit(): void {
    
      $(function() {
        $('nav ul li > a:not(:only-child)').click(function(e) {
          $(this)
            .siblings('.nav-dropdown')
            .slideToggle()
          $('.nav-dropdown')
            .not($(this).siblings())
            .hide()
          e.stopPropagation()
        })
        $('html').click(function() {
          $('.nav-dropdown').hide()
        })
        // Toggle open and close nav styles on click
        $('#nav-toggle').click(function() {
          $('nav ul').slideToggle();
        });
        $('#nav-toggle').on('click', function() {
          this.classList.toggle('active')
        })
      })

      this.productService.getCategoriesByGroupId(4).subscribe(data => {
        this.categoryH=data.categories;
      })

      this.productService.getCategoriesByGroupId(5).subscribe(data => {
        this.categoryE=data.categories;
      })
  
  }

}
