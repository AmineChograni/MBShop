import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/static/models/Category';
import { Product } from 'src/app/static/models/Product';
import { ProductFP } from 'src/app/static/models/ProductFP';
import { Taille } from 'src/app/static/models/Taille';
import { ProductService } from 'src/app/static/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  currentStep: number = 4;
  selectedValue = null;

  imageFile: File;

  tailles:Taille[]=[];

  categories: Category[] = [];
  productId: Number;


  firstForm: FormGroup;


  //third form
  listOfOption: string[] = [];
  listOfSelectedTailles = [];

  


  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    this.productService.getAllCategories().subscribe(data => {
      this.categories=data;
      
    })



    this.firstForm = new FormGroup({
      productName:new FormControl("",Validators.required),
      productPrice:new FormControl("",Validators.required),
      productCategory:new FormControl("",Validators.required),
    });

    //third form 
    const children: string[] = [];
    for (let i = 25; i < 46; i++) {
      children.push(`${i}`);
    }
    this.listOfOption = children;


  }
  
  //first form

  submitFirstForm(): void {
    if (this.firstForm.valid) {
      let Product = new ProductFP(this.productName,this.productPrice,this.productCategory);
      this.productService.postProductFP(Product).subscribe(data=>{
        this.productId = data.id
        
      });
      
      this.currentStep++;
    } else {
      Object.values(this.firstForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  //second form

  onFileSelected(event: any) {
    this.imageFile = event.target.files[0];
  }
  onUpload() {

    const formData = new FormData();
    formData.append('', this.imageFile);
    formData.append('ProductId', this.productId.toString());

    this.productService.PostImagePrincipal(formData).subscribe(
    (response) => {
      console.log('Upload successful', response);
      // Handle success response here
    },
    (error) => {
      console.error('Upload failed', error);
      // Handle error response here
    }
    
    );
    this.currentStep++;
  }



  get productName() { return this.firstForm.get('productName')?.value };
  get productPrice() { return this.firstForm.get('productPrice')?.value };
  get productCategory() { return this.firstForm.get('productCategory')?.value };



  //third form

  nexttofourStep(){

    for (let  zise of this.listOfSelectedTailles) {
      let taille = new Taille(zise,this.productId);
      this.productService.postProductT(taille).subscribe(data=>{
      });
    }

    this.currentStep++;
  }



  
  //global function
  nextStep() {
    this.currentStep++;
  }

  prevStep() {
    this.currentStep--;
  }

  submitLast() {
    // Handle form submission, e.g., send data to server
  }

}
