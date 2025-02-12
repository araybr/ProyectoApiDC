import { Component } from '@angular/core';
import {Character} from '../../character.model';

@Component({
  selector: 'app-busqueda',
  standalone: false,

  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent {
  characters:Character[] = [];
  characterBusqueda1 = []
  characterBusqueda2 = []
  esBusquedaNombre = false;
  esPagina2 = false
  pagina = 1;
  inicio = 1;
  final = 10;
  busqueda = "";
  async buscar(busqueda:string){
    this.busqueda = busqueda;
    if(this.busqueda == ""){
      this.pagina = 1;
      this.esBusquedaNombre = false;
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
    }else if(isNaN(this.busqueda as any)){
      this.esBusquedaNombre = true;
      var url = 'https://rickandmortyapi.com/api/character/?page=' + this.pagina.toString() + '&name=' + this.busqueda;
      const response = await fetch(url);
      const data = await response.json();
      this.characterBusqueda1 = data["results"].slice(0,10)
      this.characterBusqueda2 = data["results"].slice(10)
      if (!this.esPagina2){
        this.characters = this.characterBusqueda1.map((c: any) => new Character(c))
      }else{
        this.characters = this.characterBusqueda2.map((c: any) => new Character(c))
      }
    }else{
      this.pagina = 1
      var url = 'https://rickandmortyapi.com/api/character/' + this.busqueda;
      const response = await fetch(url);
      const data = await response.json();
      this.characters.push(new Character(data))
    }
  }
  siguientePagina(){
    if (this.esBusquedaNombre){
      this.inicio = 1;    //Reseteo la busqueda normal
      this.final = 10;
      if(this.esPagina2){
          this.pagina +=1;
          this.esPagina2 = false;
      }else{
        this.esPagina2 = true;
      }
    }else{
      this.pagina = 1;    //Reseteo la busqueda por Nombre
      if (this.final<=830){
        this.inicio+=10;
        this.final+=10;
      }
    }
    this.buscar(this.busqueda);
  }
  anteriorPagina(){
    if (this.esBusquedaNombre){
      this.inicio = 1;   //Reseteo la busqueda normal
      this.final = 10;
      if(!this.esPagina2){
        if (this.pagina>1){
          this.pagina -= 1;
          this.esPagina2 = true;
        }
      }else{
        this.esPagina2 = false;
      }
    }else{
      this.pagina = 1;   //Reseteo la busqueda por Nombre
      if(this.inicio>1){
        this.inicio-=10;
        this.final-=10;
      }
    }
    this.buscar(this.busqueda);
  }
  buscarPorGenero(genero:string){

  }
}
