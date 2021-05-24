import { Injectable } from '@angular/core';
import { Artigo } from "../classes/artigo";

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  constructor() { }

  listaCompras: Array<Artigo> = new Array<Artigo>();
}
