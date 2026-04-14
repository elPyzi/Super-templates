import * as z from 'zod';

import { Regexs } from '@shared-config';

export const StringSchems = {
  optional: z.string().trim().optional().nullable(),
  required: z.string().trim().min(1).max(255),
};

export const NumberSchems = {
  optional: z.number().nullable().optional(),
  required: z
    .number()
    .refine((number) => number !== null && number !== undefined),
};

export const DateSchems = {
  optional: z.date().nullable().optional(),
  required: z.date(),
};

export const EmailSchems = {
  optional: z
    .string()
    .trim()
    .nullable()
    .optional()
    .refine((email) => !email || Regexs.EMAIL.test(email)),
  required: z.string().trim().regex(Regexs.EMAIL),
};

export const MobilePhoneSchems = {
  optional: z
    .string()
    .trim()
    .nullable()
    .optional()
    .refine((phone) => !phone || Regexs.PHONE.test(phone)),
  required: z.string().trim().regex(Regexs.PHONE),
};
