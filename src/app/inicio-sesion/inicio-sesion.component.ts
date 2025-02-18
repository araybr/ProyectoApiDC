import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-sesion',
  standalone: false,
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent implements OnInit {
  sesionIniciada: boolean = false;
  usuarioPerm = "aray";
  contrasenyaPerm = "1234";

  constructor() {}

  ngOnInit() {
    this.sesionIniciada = localStorage.getItem('sesionIniciada') === 'true';
  }

  iniciarSesion(usuario: string, contrasenya: string) {
    if (usuario === this.usuarioPerm && contrasenya === this.contrasenyaPerm) {
      console.log("Inicio de sesión exitoso");
      this.sesionIniciada = true;
      localStorage.setItem('sesionIniciada', 'true');
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  }

  cerrarSesion() {
    console.log("Sesión cerrada");
    this.sesionIniciada = false;
    localStorage.removeItem('sesionIniciada');
  }
}
