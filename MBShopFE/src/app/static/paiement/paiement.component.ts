import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.scss']
})
export class PaiementComponent implements OnInit {

  prodImg:String;
  prodName:String;
  prodColor:String;
  prodPoint:Number;
  prodPrice:Number;
  

  constructor(private titleService: Title,private router:ActivatedRoute,private route : Router) { }

  public createImgPath = (serverPath: String) => { 
    return `https://localhost:44353/${serverPath}`; 
  }

  ngOnInit(): void {
    this.titleService.setTitle("MBShop | Paiement");
    this.router.queryParams.subscribe(params => {
      this.prodImg = params['prodImg'],
      this.prodName=params['prodName'],
      this.prodColor=params['prodColor'],
      this.prodPoint=params['prodPoint'],
      this.prodPrice=params['prodPrice']
    });

  }

}
