import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';

//ng-zorro
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { ProductSectionComponent } from './product-section/product-section.component';


@NgModule({
  declarations: [HomeComponent, HeroSectionComponent, ProductSectionComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzGridModule,
    NzCarouselModule
  ]
})
export class HomeModule { }
