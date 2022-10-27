export interface ICharacter {
  id: number;
  name: string;
  status: IStatus;
  species: ISpecies;
  type: string;
  gender: IGender;
  origin: ILocation;
  location: ILocation;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

export enum IGender {
  Female = "Female",
  Male = "Male",
  Unknown = "unknown",
}

export interface ILocation {
  name: string;
  url: string;
}

export enum ISpecies {
  Alien = "Alien",
  Human = "Human",
}

export enum IStatus {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "unknown",
}
