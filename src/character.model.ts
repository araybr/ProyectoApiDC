export class Character{
  id:string;
  name:string;
  imagen:string;
  species:string;
  estaFavoritos:boolean;
  constructor(data: any) {
    this.id = data["id"];
    this.name = data["name"];
    this.imagen = data["image"];
    this.species = data["species"];
    this.estaFavoritos = false;
  }
}
