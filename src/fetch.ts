import axios, { AxiosRequestConfig } from "axios";
import { StatusCodes } from "http-status-codes";
import { EntryListType, ID } from "./types";

export const fetch =async <T = any>(
  id: ID,
  filetype: EntryListType,
  options: AxiosRequestConfig = {},
): Promise<T> =>  {
  const { data, status, statusText } = await axios.get(
    `https://www.thesimgrid.com/admin/championships/${id}/registrations.${filetype}`,
    options,
  );

  if (status !== StatusCodes.OK) {
    throw new Error(`${status}: ${statusText}`);
  }

  return data;
}
