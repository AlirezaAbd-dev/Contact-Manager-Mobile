import axios from 'axios';

import { API_URL } from '../env';
import { QueryFunction } from 'react-query';

export interface Contact {
   _id: string;
   fullname: string;
   image?: string;
   phone: string;
   email?: string;
}

export const getContactsAPI: QueryFunction<
   Contact[] | undefined,
   (string | null | undefined)[]
> = async ({ queryKey }) => {
   const token = queryKey[1];

   if (token) {
      const response = await axios.get(`${API_URL}/contacts`, {
         headers: {
            'x-authentication-token': token,
         },
      });

      return response.data.contacts as Contact[];
   }
};
