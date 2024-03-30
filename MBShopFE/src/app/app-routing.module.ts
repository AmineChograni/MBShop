import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', loadChildren: () => import('./static/static.module').then(mod => mod.StaticModule) },
  { path: "idaratesebate23", loadChildren: () => import('./dash/dash.module').then(mod => mod.DashModule) },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
