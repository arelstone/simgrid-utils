import { ID, JSONEntryList } from './types';
import { fetch } from './fetch';

export const json = async (id: ID, forceEntryList: boolean = true, teamEvent: boolean = false): Promise<JSONEntryList> => {
    return {
        ...await fetch<JSONEntryList>(id, 'json', teamEvent),
        forceEntryList: forceEntryList ? 1 : 0,
    };
};
