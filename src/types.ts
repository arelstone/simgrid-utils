export type ID = string | number

export type EntryListType = 'json' | 'csv'

export type CsvEntry = {
  username: string;
  'real name': string;
  steam64?: string;
  'car class'?: string;
  'car number'?: string;
  'car name'?: string;
  'registered at'?: string;
};

export type Driver = {
  firstName: string;
  lastName: string;
  shortName: string;
  driverCategory: number;
  nationality: number;
  playerID: string;
}

export type JSONEntry = {
  drivers: ReadonlyArray<Driver>;
  raceNumber: number;
  forcedCarModel: number;
  overrideDriverInfo: number;
  defaultGridPosition: number;
  isServerAdmin: 1 | 0;
}

export type JSONEntryList = {
  entries: ReadonlyArray<JSONEntry>;
  forceEntryList: 1 | 0;
}
