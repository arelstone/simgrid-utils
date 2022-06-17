import { CsvEntry, ID } from "./types";
import { fetch } from './fetch'
import { parse } from "papaparse";

export const csv = async (id: ID): Promise<ReadonlyArray<CsvEntry>> => {
  return parse<CsvEntry>(
    await fetch<string>(id, 'csv', { responseType: 'blob' }),
    { header: true 
  })
  .data
  .filter(({ username }) => !!username)
}

