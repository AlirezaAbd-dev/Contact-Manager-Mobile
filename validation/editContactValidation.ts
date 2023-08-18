import { z } from 'zod';

export const editContactValidation = z.object({
   fullname: z
      .string({ required_error: 'لطفا فیلد نام را پر کنید!' })
      .min(3, { message: 'نام شما باید حداقل داری 3 کاراکتر باشد!' }),
   phone: z
      .string({ required_error: 'لطفا فیلد شماره تلفن را پر کنید!' })
      .min(8, { message: 'شماره تلفن باید حداقل 8 کاراکتر باشد!' })
      .max(12, { message: 'شماره تلفن باید حداکثر 12 کاراکتر باشد!' }),
   email: z.union([
      z
         .string()
         .email({ message: 'لطفا از ایمیل معتبر استفاده کنید!' })
         .optional(),
      z.literal(''),
   ]),
   job: z
      .string()
      .min(2, { message: 'شغل باید خالی و یا حداقل دارای 2 کاراکتر باشد!' })
      .optional(),
});
