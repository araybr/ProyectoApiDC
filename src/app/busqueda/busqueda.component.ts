import { Component } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  standalone: false,

  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent {
  async buscar(){
    var url = "https://www.amiiboapi.com/api/amiibo/";
    const response = await fetch(url);
    const data = await response.json();
    this.showAmiibos(data.results);
  }

  async showAmiibos(amiibos:AuthenticationExtensionsPRFValues){

  }

}
