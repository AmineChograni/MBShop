import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaticComponent } from './static.component';

const routes: Routes = [
  {
    path: '',
    component: StaticComponent,
    children: [
      { path: "", loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule) },
      { path: "product", loadChildren: () => import('./product/product.module').then(mod => mod.ProductModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticRoutingModule { }
