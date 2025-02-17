import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio-sesion',
  standalone: false,

  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.css'
})
export class InicioSesionComponent {
  sesionIniciada = false;
  usuarioPerm = "aray"
  contrasenyaPerm = "1234"
  iniciarSesion(usuario:string, contrasenya:string){
    if(usuario==this.usuarioPerm && contrasenya==this.contrasenyaPerm){
      alert("Inicio de Sesión exitoso!");
      this.sesionIniciada = true;
    }else{
      alert("El usuario o la contrasenya son incorrectos");
    }
  }
  cerrarSesion(){
    this.sesionIniciada = false;
  }
}
