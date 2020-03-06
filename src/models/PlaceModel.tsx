import { OpeningHourModel } from './OpeningHourModel';

export class PlaceModel {
  name: string;
  address: string;
  openingHours: OpeningHourModel[];

  constructor(name: string, address: string, openingHours: OpeningHourModel[]) {
    this.name = name;
    this.address = address;
    this.openingHours = openingHours;
  }
}
