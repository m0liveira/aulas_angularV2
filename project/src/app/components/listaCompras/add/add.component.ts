import { Component, OnInit } from '@angular/core';
import { Artigo } from 'src/app/classes/artigo';
import { ListaService } from 'src/app/services/lista.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  listService: ListaService;

  constructor(private list: ListaService) {
    this.listService = list;
   }

  ngOnInit(): void {
  }

  addToList(name, price){
    this.listService.listaCompras.push(new Artigo(name, price));
  }
}
