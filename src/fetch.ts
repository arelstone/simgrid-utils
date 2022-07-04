import axios, { AxiosRequestConfig } from 'axios';
import { StatusCodes } from 'http-status-codes';
import { EntryListType, ID } from './types';

export const fetch =async <T = any>(
    id: ID,
    filetype: EntryListType,
    teamEvent: boolean,
    options: AxiosRequestConfig = {},
): Promise<T> =>  {
    const filename = teamEvent ? 'team_registrations' : 'registrations';
    const url = `https://www.thesimgrid.com/admin/championships/${id}/${filename}.${filetype}`;
    const { data, status, statusText } = await axios.get(url, options);

    if (status !== StatusCodes.OK) {
        throw new Error(`${status}: ${statusText}`);
    }

    return data;
};
