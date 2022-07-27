import { registerEnumType } from 'type-graphql';


export enum Measurement {
  HOURS = 'HOURS',
  YEARS = 'YEARS',
}

registerEnumType(Measurement, {
  name: 'Measurement',
});
