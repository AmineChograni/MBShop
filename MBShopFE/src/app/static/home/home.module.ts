import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//ng-zorro
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ProductSectionComponent } from './product-section/product-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NzTypographyModule } from 'ng-zorro-antd/typography';



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
    ReactiveFormsModule,
    NzIconModule,
    NzToolTipModule,
    NzTypographyModule,
    NzSkeletonModule
  ]
})
export class HomeModule { }
