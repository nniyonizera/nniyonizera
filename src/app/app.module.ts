import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { HotelCardComponent } from './hotel-card/hotel-card.component';
import { PaymentComponent } from './payment/payment.component';
import { HttpClientModule } from '@angular/common/http';
import { DataapiService } from './data/dataapi.service';


@NgModule({
  declarations: [
    AppComponent,
    HotelsListComponent,
    HotelCardComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [DataapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
