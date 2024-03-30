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




@NgModule({
  declarations: [DashComponent, ProductComponent, CategoryComponent, GroupComponent, CommandesComponent],
  imports: [
    CommonModule,
    DashRoutingModule,
    NzLayoutModule,
    NzGridModule,
    NzIconModule,
    NzMenuModule,
    NzButtonModule
  ]
})
export class DashModule { }
