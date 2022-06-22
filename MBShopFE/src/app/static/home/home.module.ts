import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//ng-zorro
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ProductSectionComponent } from './product-section/product-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [HomeComponent, HeroSectionComponent, ProductSectionComponent, AboutSectionComponent, ContactSectionComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzGridModule,
    NzCarouselModule,
    NzCardModule,
    NzButtonModule,
    FormsModule,
    NzFormModule,
    ReactiveFormsModule
    
  ]
})
export class HomeModule { }
