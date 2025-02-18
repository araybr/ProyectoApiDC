import {Component, Input} from '@angular/core';
import {Character} from '../../character.model';
import {convertToParamMap} from '@angular/router';
import {WebStorageService} from '../web-storage.service';

@Component({
  selector: 'app-character',
  standalone: false,

  templateUrl: './character.component.html',
  styleUrl: './character.component.scss'
})
export class CharacterComponent {
  @Input() character!:Character;
  constructor(public servicio: WebStorageService) {
  }

  protected readonly Character = Character;


}
