import { Component } from '@angular/core';
import {Character} from '../../character.model';

@Component({
  selector: 'app-busqueda',
  standalone: false,

  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent {
  currentPage = 0
  characters = [];
  async buscar(pagina:number){
    const limit = 20;
    const offset = pagina * limit;
    var url = 'https://rickandmortyapi.com/api/character?limit=${limit}&offset=${offset}';
    const response = await fetch(url);
    const data = await response.json();
   this.characters = data["results"].map((c: any) => new Character(c));
  }
  siguientePagina(){
    this.currentPage++;
    this.buscar(this.currentPage);
  }
  anteriorPagina(){
    if(this.currentPage>0){
      this.currentPage--;
    }
    this.buscar(this.currentPage);
  }
}
