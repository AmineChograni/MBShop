import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ProductDetailsComponent } from './product-details.component';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzAlertModule } from 'ng-zorro-antd/alert';


@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [
    CommonModule,
    ProductDetailsRoutingModule,
    NzGridModule,
    NzBreadCrumbModule,
    FormsModule,
    NzInputNumberModule,
    NzButtonModule,
    NzIconModule,
    NzTabsModule,
    NzCardModule,
    NzBadgeModule,
    NzPageHeaderModule,
    NzDropDownModule,
    NzSelectModule,
    NzRadioModule,
    NzImageModule,
    NzAlertModule
    
  ]
})
export class ProductDetailsModule { }
