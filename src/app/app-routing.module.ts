import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { PaymentComponent } from './payment/payment.component';


const routes: Routes = [{path:'hotel-list',component: HotelsListComponent},
{path:'payment',component: PaymentComponent},{path:'',component: HotelsListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
