import { Component } from '@angular/core';
import {Character} from '../../character.model';

@Component({
  selector: 'app-busqueda',
  standalone: false,

  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent {
  currentPage = 1
  characters = [];
  inicio = 1;
  final = 10;
  async buscar(){
    var url = 'https://rickandmortyapi.com/api/character/';
    for (let i = this.inicio; i <= this.final; i++) {
      if(i<=826){
        url+=i.toString()
        if(i!=this.final){
          url+=","
        }
      }else{
        break;
      }
    }
    const response = await fetch(url);
    const data = await response.json();
    this.characters = data.map((c: any) => new Character(c));
  }
  siguientePagina(){
    if (this.final<=830){
      this.inicio+=10;
      this.final+=10;
    }
    this.buscar();
  }
  anteriorPagina(){
    if(this.inicio>1){
      this.inicio-=10;
      this.final-=10;
    }
    this.buscar();
  }
}
