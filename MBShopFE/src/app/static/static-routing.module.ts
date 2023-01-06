import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaticComponent } from './static.component';
import { PolitiqueComponent } from './../static/politique/politique.component';
import { ConfidentialiteComponent } from './../static/confidentialite/confidentialite.component';


const routes: Routes = [
  {
    path: '',
    component: StaticComponent,
    children: [
      { path: "", loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule) },
      { path: "products/:id", loadChildren: () => import('./product/product.module').then(mod => mod.ProductModule) },
      { path: "product/:id", loadChildren: () => import('./product-details/product-details.module').then(mod => mod.ProductDetailsModule) },
      { path: "paiement", loadChildren: () => import('./paiement/paiement.module').then(mod => mod.PaiementModule) },
      { path: "politique dechange",component: PolitiqueComponent },
      { path: "confidentialite",component: ConfidentialiteComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticRoutingModule { }
