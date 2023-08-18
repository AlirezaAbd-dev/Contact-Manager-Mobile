import axios from 'axios';

import { API_URL } from '../env';
import { MutationFunction, QueryFunction } from 'react-query';
import { EditContactSchemaType } from '../components/editContact/Form';

export type FullContact = {
   _id: string;
   fullname: string;
   image?: string;
   phone: string;
   email?: string;
   job?: string;
};

export type Contact = Omit<FullContact, 'job'>;

type QueryKeyParam = (string | null | undefined)[];

export const getContactsAPI: QueryFunction<
   Contact[] | undefined,
   QueryKeyParam
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

export const getContactById: QueryFunction<
   FullContact | undefined,
   QueryKeyParam
> = async ({ queryKey }) => {
   const token = queryKey[1];
   const id = queryKey[2];

   if (token && id) {
      const response = await axios.get(`${API_URL}/contact/${id}`, {
         headers: {
            'x-authentication-token': token,
         },
      });

      return response.data.contact;
   }
};

export const editContactById: MutationFunction<
   FullContact | undefined,
   EditContactSchemaType & { token: string | undefined; id: string }
> = async (data) => {
   const id = data.id;

   const passingData: EditContactSchemaType = {
      fullname: data.fullname,
      phone: data.phone,
      email: data.email,
      job: data.job,
   };

   if (data.token) {
      const response = await axios.put(
         `${API_URL}/contact/${id}`,
         { ...passingData },
         {
            headers: {
               'x-authentication-token': data.token,
            },
         },
      );

      return response.data as FullContact;
   }
};
