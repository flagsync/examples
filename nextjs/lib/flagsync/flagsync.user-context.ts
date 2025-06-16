import type { ReadonlyHeaders, ReadonlyRequestCookies } from 'flags';
import { dedupe } from 'flags/next';
import { nanoid } from 'nanoid';
import type { NextRequest } from 'next/server';
import { CookieMap } from '@/core/constants';
import { CustomAttributes } from '@flagsync/node-sdk';

interface User {
  userId: string;
  role?: string;
}

// Ensure we get the same id throughout the same request context.
const generateId = dedupe(async () => nanoid());

export const getFlagSyncUserContext = async (params: {
  cookies: ReadonlyRequestCookies | NextRequest['cookies'];
  headers: ReadonlyHeaders | NextRequest['headers'];
}) => {
  const cookie = params.cookies.get(CookieMap.JWT)?.value;

  let userContext: User | undefined = undefined;

  if (cookie) {
    try {
      const decoded = atob(cookie);
      userContext = JSON.parse(decoded) as User;
    } catch (err) {
      console.warn(
        `[getUserContextKey]: Failed to decode flagsync user context`,
        err,
      );
    }
  }

  const key = await getUserContextKey(params, userContext);
  const attributes = await getUserAttributes(params, userContext);

  return {
    key,
    attributes,
  };
};

const getUserContextKey = async (
  params: {
    cookies: ReadonlyRequestCookies | NextRequest['cookies'];
    headers: ReadonlyHeaders | NextRequest['headers'];
  },
  user: User | undefined,
): Promise<string> => {
  const userId = user?.userId;
  if (userId) return userId;

  const visitorId = params.cookies.get(CookieMap.VID)?.value;
  if (visitorId) return visitorId;

  /**
   * Fallback in case middleware fails to set cookies
   */
  return generateId();
};

const getUserAttributes = async (
  _: {
    cookies: ReadonlyRequestCookies | NextRequest['cookies'];
    headers: ReadonlyHeaders | NextRequest['headers'];
  },
  user: User | undefined,
): Promise<CustomAttributes> => {
  const role = user?.role;
  return {
    role: role ?? 'Unknown',
    region: _.headers.get('x-region') ?? 'Unknown',
  };
};
