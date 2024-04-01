import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';
import { DashComponent } from './dash.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { GroupComponent } from './group/group.component';
import { CommandesComponent } from './commandes/commandes.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { AddProductComponent } from './add-product/add-product.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzMessageModule } from 'ng-zorro-antd/message';



@NgModule({
  declarations: [DashComponent, ProductComponent, CategoryComponent, GroupComponent, CommandesComponent, AddProductComponent],
  imports: [
    CommonModule,
    DashRoutingModule,
    NzLayoutModule,
    NzGridModule,
    NzIconModule,
    NzMenuModule,
    NzButtonModule,
    NzTableModule,
    NzImageModule,
    NzModalModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzUploadModule,
    NzMessageModule
  ]
})
export class DashModule { }
