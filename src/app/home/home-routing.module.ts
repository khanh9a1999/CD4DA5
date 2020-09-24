import { DetailsComponent } from './details/details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { TypeProductComponent } from './type-product/type-product.component';


const routes: Routes = [
    //đây là file link của home module
  {path:'',component:HomeComponent},//link là localhost:4200/home 
  { path:'details',component: DetailsComponent},//link là localhost:4200/home/details
  { path:'type-product',component: TypeProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
