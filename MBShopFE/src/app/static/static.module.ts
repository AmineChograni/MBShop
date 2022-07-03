import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//ng-zorro
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { StaticRoutingModule } from './static-routing.module';
import { StaticComponent } from './static.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [StaticComponent, NavbarComponent, FooterComponent],
  imports: [
    CommonModule,
    StaticRoutingModule,
    NzGridModule,
    NzLayoutModule,
    NzButtonModule
  ]
})
export class StaticModule { }
