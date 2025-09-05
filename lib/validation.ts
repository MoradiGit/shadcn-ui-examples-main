import { z } from 'zod';

export const mobileSchema = z.string().regex(
  /^(09\d{9}|(\+98|0098)9\d{9})$/,
  'شماره موبایل معتبر نیست'
);

export const validateIranianMobile = (mobile: string): boolean => {
  try {
    mobileSchema.parse(mobile);
    return true;
  } catch {
    return false;
  }
};