import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaticComponent } from './static.component';

const routes: Routes = [
  {
    path: '',
    component: StaticComponent,
    children: [
      { path: "", loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule) },
      { path: "products", loadChildren: () => import('./product/product.module').then(mod => mod.ProductModule) },
      { path: "product", loadChildren: () => import('./product-details/product-details.module').then(mod => mod.ProductDetailsModule) },
      { path: "paiement", loadChildren: () => import('./paiement/paiement.module').then(mod => mod.PaiementModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticRoutingModule { }
