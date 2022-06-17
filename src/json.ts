import { ID, JSONEntryList } from "./types";
import {fetch} from './fetch'

export const json = async (id: ID, forceEntryList: boolean = true): Promise<JSONEntryList> => {
  return {
    ...await fetch<JSONEntryList>(id, 'json'),
    forceEntryList: forceEntryList ? 1 : 0
  }
}
