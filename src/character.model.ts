export class Character{
  name:string;
  imagen:string;
  species:string;
  constructor(data: any) {
    this.name = data["name"];
    this.imagen = data["image"];
    this.species = data["species"];
  }
}
