import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  validateForm!: FormGroup;

  constructor(private fb: FormBuilder,private router: Router) { }

  ngOnInit(): void {

    this.validateForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [ Validators.required]]
    });
  }

  get email() { return this.validateForm.get('email')?.value };
  get password() { return this.validateForm.get('password')?.value };

  submitForm(): void {
    if (this.validateForm.valid && this.email == "mohamed@mbshoes.ar" && this.password == "shalimartripologie2030ipdash") {
      this.router.navigate(['/idaratesebate23'])
    } else {
      console.log("goof");
    }
  }

}
