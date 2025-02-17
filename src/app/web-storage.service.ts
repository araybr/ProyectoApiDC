import { Injectable } from '@angular/core';

import {Character} from '../character.model';

@Injectable({
  providedIn: 'root'
})
export class WebStorageService {
  favoritos = JSON.parse(<string>localStorage.getItem("favoritos")) || [];

  constructor() { }

  anyadirAFavoritos(character:Character){
    if(this.favoritos.some((c:Character)=> c.id == character.id)){
      alert("No se puede guardar el mismo personaje")
    }else if(this.favoritos.length >= 6){
      alert("Tu equipo esta completo")
    }else{
      character.estaFavoritos = true;
      this.favoritos.push(character);
      this.saveTeamToLocalStorage();
    }
  }
  saveTeamToLocalStorage = () => {
    localStorage.setItem("favoritos", JSON.stringify(this.favoritos));
  };
  eliminar(character:Character){
    this.favoritos.splice(this.favoritos.indexOf(character),1);
    this.saveTeamToLocalStorage();
    character.estaFavoritos = false;
  }
}
