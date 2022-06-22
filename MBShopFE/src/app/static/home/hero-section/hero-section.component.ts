import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {

  heroOBJS: {imgURL: string }[] = [
    { "imgURL": "../../../../assets/images/hommecla.jpg" },
    {  "imgURL": "../../../../assets/images/shoes.jpg" },
    {  "imgURL": "../../../../assets/images/enfant.jpg" },
  ];

  constructor() { }


  ngOnInit(): void {
  }


}
