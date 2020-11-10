import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { TypeProductComponent } from './type-product/type-product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {PaginatorModule} from 'primeng/paginator';
@NgModule({
    declarations: [
        HomeComponent,
        DetailsComponent,
        TypeProductComponent

    ],
    imports: [
      CommonModule,
      HomeRoutingModule,
       NgbModule,
       PaginatorModule
    ]
  })
  export class HomeModule { }