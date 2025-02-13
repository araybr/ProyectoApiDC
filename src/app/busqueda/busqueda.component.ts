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
  esBusquedaGenero = false;
  esBusquedaVida = false;
  esPagina2Lista = [false, false, false];
  paginas = [1,1,1]
  inicio = 1;
  final = 10;
  genero = "";
  status = "";
  busqueda = "";
  async buscar(busqueda:string){
    this.busqueda = busqueda;
    if(this.busqueda == ""){
      this.esBusquedaGenero = false;
      this.esBusquedaNombre = false;
      this.esBusquedaVida = false;
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
      this.esBusquedaGenero = false;
      this.esBusquedaVida = false;
      var url = 'https://rickandmortyapi.com/api/character/?page=' + this.paginas[0].toString() + '&name=' + this.busqueda;
      const response = await fetch(url);
      const data = await response.json();
      this.characterBusqueda1 = data["results"].slice(0,10)
      this.characterBusqueda2 = data["results"].slice(10)
      if (!this.esPagina2Lista[0]){
        this.characters = this.characterBusqueda1.map((c: any) => new Character(c))
      }else{
        this.characters = this.characterBusqueda2.map((c: any) => new Character(c))
      }
    }else{
      this.esBusquedaGenero = false;
      this.esBusquedaNombre = false;
      this.esBusquedaVida = false;
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
      this.paginas[1] = 1;  //Reseteo página por estado de vida
      this.paginas[2] = 1;  //Reseteo página por género
      if(this.esPagina2Lista[0]){
          this.paginas[0] +=1;
          this.esPagina2Lista[0] = false;
      }else{
        this.esPagina2Lista[0] = true;
      }
      this.buscar(this.busqueda);
    }else if(this.esBusquedaGenero){
      this.inicio = 1;    //Reseteo la busqueda normal
      this.final = 10;
      this.paginas[0] = 1;   //Reseto pagina por nombre
      this.paginas[2] = 1;  //Reseteo página por estado de vida
      if(this.esPagina2Lista[1]){
        this.paginas[1] +=1;
        this.esPagina2Lista[1] = false;
      }else{
        this.esPagina2Lista[1] = true;
      }
      this.buscarPorGenero(this.genero);
    }else if(this.esBusquedaVida){
      this.inicio = 1;    //Reseteo la busqueda normal
      this.final = 10;
      this.paginas[0] = 1;   //Reseto página por nombre
      this.paginas[1] = 1;  //Reseteo página por estado de vida
      if(this.esPagina2Lista[2]){
        this.paginas[2] +=1;
        this.esPagina2Lista[2] = false;
      }else{
        this.esPagina2Lista[2] = true;
      }
      this.buscarPorVida(this.status);
    }else{
      this.paginas[0] = 1;    //Reseteo la busqueda por Nombre
      this.paginas[1] = 1;  //Reseteo página por estado de vida
      this.paginas[2] = 1;   //Reseteo página por género
      if (this.final<=830){
        this.inicio+=10;
        this.final+=10;
      }
      this.buscar(this.busqueda);
    }
  }
  anteriorPagina(){
    if (this.esBusquedaNombre){
      this.paginas[1] = 1;   //Reseto pagina por género
      this.paginas[2] = 1;  //Reseteo página por estado de vida
      this.inicio = 1;   //Reseteo la busqueda normal
      this.final = 10;
      if(!this.esPagina2Lista[0]){
        if (this.paginas[0]>1){
          this.paginas[0] -= 1;
          this.esPagina2Lista[0] = true;
        }
      }else{
        this.esPagina2Lista[0] = false;
      }
      this.buscar(this.busqueda);
    }else if (this.esBusquedaGenero){
      this.paginas[0] = 1;   //Reseto pagina por nombre
      this.paginas[2] = 1;  //Reseteo página por estado de vida
      this.inicio = 1;   //Reseteo la busqueda normal
      this.final = 10;
      if(!this.esPagina2Lista[1]){
        if (this.paginas[1]>1){
          this.paginas[1] -= 1;
          this.esPagina2Lista[1] = true;
        }
      }else{
        this.esPagina2Lista[1] = false;
      }
      this.buscarPorGenero(this.genero);
    }else if (this.esBusquedaVida){
      this.paginas[0] = 1;   //Reseto pagina por nombre
      this.paginas[1] = 1;  //Reseteo página por género
      this.inicio = 1;   //Reseteo la busqueda normal
      this.final = 10;
      if(!this.esPagina2Lista[2]){
        if (this.paginas[2]>1){
          this.paginas[2] -= 1;
          this.esPagina2Lista[2] = true;
        }
      }else{
        this.esPagina2Lista[2] = false;
      }
      this.buscarPorVida(this.status);
    }else{
      this.paginas[0] = 1;   //Reseteo la busqueda por Nombre
      this.paginas[1] = 1;   //Reseteo página por estado de vida
      this.paginas[2] = 1;   //Reseteo página por género
      if(this.inicio>1){
        this.inicio-=10;
        this.final-=10;
      }
      this.buscar(this.busqueda);
    }
  }
  async buscarPorGenero(genero:string){
    this.esBusquedaGenero = true;
    this.esBusquedaNombre = false;
    this.esBusquedaVida = false;
    this.genero = genero;
    var url = 'https://rickandmortyapi.com/api/character/?page=' + this.paginas[1].toString() + '&gender=' + genero;
    const response = await fetch(url);
    const data = await response.json();
    this.characterBusqueda1 = data["results"].slice(0,10)
    this.characterBusqueda2 = data["results"].slice(10)
    if (!this.esPagina2Lista[1]){
      this.characters = this.characterBusqueda1.map((c: any) => new Character(c))
    }else{
      this.characters = this.characterBusqueda2.map((c: any) => new Character(c))
    }
  }
  async buscarPorVida(status:string){
    this.status = status;
    this.esBusquedaGenero = false;
    this.esBusquedaNombre = false;
    this.esBusquedaVida = true;
    var url = 'https://rickandmortyapi.com/api/character/?page=' + this.paginas[2].toString() + '&status=' + status;
    const response = await fetch(url);
    const data = await response.json();
    this.characterBusqueda1 = data["results"].slice(0,10)
    this.characterBusqueda2 = data["results"].slice(10)
    if (!this.esPagina2Lista[2]){
      this.characters = this.characterBusqueda1.map((c: any) => new Character(c))
    }else{
      this.characters = this.characterBusqueda2.map((c: any) => new Character(c))
    }
  }

}
