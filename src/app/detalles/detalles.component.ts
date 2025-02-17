import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Character} from '../../character.model';

@Component({
  selector: 'app-detalles',
  standalone: false,

  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent implements OnInit{
  idRecibida:string;
  character:Character = new Character("");

  constructor(private router:ActivatedRoute) {
    this.idRecibida = this.router.snapshot.params["id"];
  }
  ngOnInit() {
    this.detalles();
  }

  async detalles(){
    var url = 'https://rickandmortyapi.com/api/character/' + this.idRecibida;
    const response = await fetch(url);
    const data = await response.json();
    this.character = new Character(data)
  }

}
