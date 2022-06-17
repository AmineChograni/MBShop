import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

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
  }

}
