import { csv } from './csv';
import { json } from './json';
import { fetch } from './fetch';

export * from './types';

export const Simgrid = {
    entryList: {
        ACC: {
            json,
            csv,
        },
        fetch,
    },
};

