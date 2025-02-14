import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { InicioComponent } from './inicio/inicio.component';
import { InformacionComponent } from './informacion/informacion.component';
import { CharacterComponent } from './character/character.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { FavoritosComponent } from './favoritos/favoritos.component';


const appRoutes:Routes = [
  {path:"", component: InicioComponent},
  {path:"busqueda", component: BusquedaComponent},
  {path:"informacion", component: InformacionComponent},
  {path:"favoritos", component: FavoritosComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    InicioComponent,
    InformacionComponent,
    CharacterComponent,
    FavoritosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
