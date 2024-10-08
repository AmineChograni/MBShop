import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//ng-zorro
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { StaticRoutingModule } from './static-routing.module';
import { StaticComponent } from './static.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PolitiqueComponent } from './politique/politique.component';
import { ConfidentialiteComponent } from './confidentialite/confidentialite.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';


@NgModule({
  declarations: [StaticComponent, NavbarComponent, FooterComponent, PolitiqueComponent, ConfidentialiteComponent, AboutComponent, LoginComponent],
  imports: [
    CommonModule,
    StaticRoutingModule,
    NzGridModule,
    NzLayoutModule,
    NzButtonModule,
    NzDropDownModule,
    NzTypographyModule,
    FormsModule,
    NzFormModule,
    ReactiveFormsModule
  ]
})
export class StaticModule { }
