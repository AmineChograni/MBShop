import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaiementComponent } from './paiement.component';

const routes: Routes = [
  {
    path: "", component: PaiementComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaiementRoutingModule { }
