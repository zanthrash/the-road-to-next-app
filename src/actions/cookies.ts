"use server";
import { cookies } from "next/headers";

export const getCookieByKey = async (name: string) => {
  const cookie = (await cookies()).get(name);

  if (!cookie) {
    return null;
  }

  return cookie.value;
};

export const setCookieByKey = async (name: string, value: string) => {
  (await cookies()).set(name, value);
};

export const deleteCookieByKey = async (name: string) => {
  (await cookies()).delete(name);
};
