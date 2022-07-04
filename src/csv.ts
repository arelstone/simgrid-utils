import { CsvEntry, ID } from './types';
import { fetch } from './fetch';
import { parse } from 'papaparse';

export const csv = async (id: ID, teamEvent: boolean = false): Promise<ReadonlyArray<CsvEntry>> => {
    return parse<CsvEntry>(
        await fetch<string>(id, 'csv', teamEvent, { responseType: 'blob' }),
        {
            header: true,
        })
        .data
        .filter(({ username }) => !!username);
};

