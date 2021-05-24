import { Component, OnInit } from '@angular/core';
import { Artigo } from 'src/app/classes/artigo';
import { ListaService } from 'src/app/services/lista.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css'],
})
export class BuyComponent implements OnInit {
  listService: ListaService;

  constructor(list: ListaService) {
    this.listService = list;
  }

  ngOnInit(): void {}

  Comprar(artigo: Artigo) {
    artigo.cart = true;
  }
}
