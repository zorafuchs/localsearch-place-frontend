export class OpeningHourModel {
  days: string;
  value: string[];

  constructor(days: string, value: string[]) {
    this.days = days;
    this.value = value;
  }
}
