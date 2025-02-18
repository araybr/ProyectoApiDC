export class Character{
  id:string;
  name:string;
  imagen:string;
  species:string;
  gender:string;
  origin: {name:string,url:string};
  status:string;


  estaFavoritos:boolean;
  constructor(data: any) {
    this.id = data["id"];
    this.name = data["name"];
    this.imagen = data["image"];
    this.species = data["species"];
    this.estaFavoritos = false;
    this.origin = data["origin"];
    this.gender = data["gender"];
    this.status = data["status"];
  }
}
