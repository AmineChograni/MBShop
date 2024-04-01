import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/static/models/Category';
import { ProductService } from 'src/app/static/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  currentStep: number = 1;
  selectedValue = null;

  categories: Category[] = [];

  firstForm: FormGroup;
  


  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    this.productService.getAllCategories().subscribe(data => {
      this.categories=data;
      console.log(this.categories);
      
    })

    this.firstForm = new FormGroup({
      productName:new FormControl("",Validators.required),
      productPrice:new FormControl("",Validators.required),
      productCategory:new FormControl("",Validators.required),
    });
  }
  


  submitFirstForm(): void {
    if (this.firstForm.valid) {
      console.log('submit', this.firstForm.value);
      
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
