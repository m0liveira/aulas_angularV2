import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { FormsModule } from '@angular/forms';
import { EvAndRefComponent } from './components/ev-and-ref/ev-and-ref.component';
import { ClinicComponent } from './components/clinic/clinic.component';
import { FourOfourComponent } from './components/four-ofour/four-ofour.component';
import { ListaComprasComponent } from './components/listaCompras/lista-compras/lista-compras.component';
import { AddComponent } from './components/listaCompras/add/add.component';
import { BuyComponent } from './components/listaCompras/buy/buy.component';
import { PColorComponent } from './components/p-color/p-color.component';
import { SColorComponent } from './components/p-color/s-color/s-color.component';
import { CoockiesComponent } from './components/coockies/coockies.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    CalculatorComponent,
    EvAndRefComponent,
    ClinicComponent,
    FourOfourComponent,
    ListaComprasComponent,
    AddComponent,
    BuyComponent,
    PColorComponent,
    SColorComponent,
    CoockiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
