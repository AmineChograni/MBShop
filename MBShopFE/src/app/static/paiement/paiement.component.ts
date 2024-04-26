import { ProductService } from './../services/product.service';
import { Command } from './../models/Command';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { NzModalService } from 'ng-zorro-antd/modal';
import { FormControl,FormGroup, Validators } from '@angular/forms';

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
  prodPrice:number;
  prodQuantity:number;
  total:number;
  statu:String = 'pas encoure';
  date:Date;
  categoryId:Number;
  
  commForm: FormGroup;

  constructor(private titleService: Title,private router:ActivatedRoute,private route : Router,private productService: ProductService,private modal: NzModalService) { }

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
      this.prodPrice=params['prodPrice'],
      this.prodQuantity=params['prodQuantity']
      this.categoryId=params['categoryId'];
    });
    this.total=this.prodPrice*this.prodQuantity;


    this.commForm = new FormGroup({
      name:new FormControl("",Validators.required),
      tele:new FormControl("",Validators.required),
      adr:new FormControl("",Validators.required),
      ville:new FormControl("",Validators.required),
      codep:new FormControl(null),
      email:new FormControl(null),
    });
  }

  submitForm(){
    
    console.log(this.commForm.valid);
    if(this.commForm.valid){
      //console.log(this.name , this.tele, this.adr, this.ville, this.codep, this.email);
      //console.log(this.prodName , this.prodColor, this.prodPoint, this.prodPrice, this.prodQuantity, this.total);

      //https://sheetdb.io/api/v1/1fuhwuz2s71hh
      this.date=new Date();
      let command=new Command(this.name,this.tele,this.adr,this.ville,this.codep,this.email,this.prodName,this.prodPrice,this.prodQuantity,this.prodPoint,this.prodColor,this.total,this.statu,this.date);
      
      this.productService.postComm(command).subscribe(data=>{
        this.success();
        
      });
    }else {
      console.log("im here");
      Object.values(this.commForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  success(): void {
    this.modal.success({
      nzTitle: 'La demande a réussi',
      nzContent: 'Découvrez plus de nos produits...',
      nzOnOk: () => window.location.href=`/products/${this.categoryId}`
    });
  }

  get name(){return this.commForm.get('name').value};
  get tele(){return this.commForm.get('tele').value};
  get adr(){return this.commForm.get('adr').value};
  get ville(){return this.commForm.get('ville').value};
  get codep(){return this.commForm.get('codep').value};
  get email(){return this.commForm.get('email').value};
  

}
