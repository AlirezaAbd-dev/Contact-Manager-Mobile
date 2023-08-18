import { z } from 'zod';

export const signValidation = z.object({
   email: z
      .string({
         required_error: 'لطفا فیلد ایمیل را خالی نگذارید!',
         invalid_type_error: 'لطفا از ایمیل معتبر استفاده کنید!',
      })
      .email({ message: 'لطفا از ایمیل معتبر استفاده کنید!' }),
   password: z
      .string({ required_error: 'لطفا فیلد رمز عبور را پر کنید!' })
      .min(8, { message: 'رمز عبور باید بیشتر از 8 کاراکتر باشد!' }),
});
