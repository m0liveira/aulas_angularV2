import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ClinicComponent } from './components/clinic/clinic.component';
import { EvAndRefComponent } from './components/ev-and-ref/ev-and-ref.component';
import { FourOfourComponent } from './components/four-ofour/four-ofour.component';
import { HomeComponent } from './components/home/home.component';
import { AddComponent } from './components/listaCompras/add/add.component';
import { BuyComponent } from './components/listaCompras/buy/buy.component';
import { ListaComprasComponent } from './components/listaCompras/lista-compras/lista-compras.component';
import { PColorComponent } from './components/p-color/p-color.component';
import { SColorComponent } from './components/p-color/s-color/s-color.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/Home',
    pathMatch: 'full',
  },
  { path: 'Home', component: HomeComponent },
  { path: 'Calculator', component: CalculatorComponent },
  { path: 'EvAndRef', component: EvAndRefComponent },
  { path: 'Clinic', component: ClinicComponent },
  {
    path: 'List',
    component: ListaComprasComponent,
    children: [
      { path: 'Add', component: AddComponent },
      { path: 'Buy', component: BuyComponent },
    ],
  },
  {
    path: 'p-color',
    component: PColorComponent,
    children: [{ path: ':color', component: SColorComponent }],
  },
  { path: 'NotFound', component: FourOfourComponent },
  {
    path: '**',
    redirectTo: '/NotFound',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
