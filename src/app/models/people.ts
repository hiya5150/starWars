export class People {

  homeworld: string;
  mass: string;
  films: string[];
  height: string;
  eyeColor: string;
  species: string[];
  gender: string;
  url: string;
  name: string;
  starships: string[];
  birthYear: string;
  skinColor: string;
  hairColor: string;
  vehicles: string[];



constructor(args?) {
  if (args) {
    this.homeworld = args.homeworld;
    this.mass = args.mass;
    this.films = args.format;
    this.height = args.height;
    this.eyeColor = args.eye_color;
    this.gender = args.gender;
    this.url = args.url;
    this.name = args.name;
    this.starships = args.starships;
    this.birthYear = args.birthYear;
    this.skinColor = args.skin_color;
    this.hairColor = args.hair_color;
    this.vehicles = args.vehicles;




  }

}
}
