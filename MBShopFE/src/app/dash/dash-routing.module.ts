import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './dash.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { GroupComponent } from './group/group.component';
import { CommandesComponent } from './commandes/commandes.component';

const routes: Routes = [
  {
    path: "",
    component: DashComponent,
    children: [
      { path: "",component: ProductComponent },
      { path: "category",component: CategoryComponent },
      { path: "group",component: GroupComponent },
      { path: "commandes",component: CommandesComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashRoutingModule { }
