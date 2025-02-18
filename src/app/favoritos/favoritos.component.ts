import { Component } from '@angular/core';
import {Character} from '../../character.model';
import {WebStorageService} from '../web-storage.service';

@Component({
  selector: 'app-favoritos',
  standalone: false,

  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.scss'
})
export class FavoritosComponent {
  constructor(public servicio: WebStorageService) {
  }


}
