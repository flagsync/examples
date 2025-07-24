import { dedupe } from 'flags/next';
import { ReadonlyHeaders, ReadonlyRequestCookies } from 'flags';
import { nanoid } from 'nanoid';
import type { NextRequest } from 'next/server';

const generateId = dedupe(async () => nanoid());

export const getContext = async (params: {
  cookies: ReadonlyRequestCookies | NextRequest['cookies'];
  headers: ReadonlyHeaders | NextRequest['headers'];
}) => {
  const key = await getUserContextKey(params);

  return {
    key,
    attributes: {
      region: params.headers.get('x-region'),
    },
  };
};

const getUserContextKey = async (params: {
  cookies: ReadonlyRequestCookies | NextRequest['cookies'];
  headers: ReadonlyHeaders | NextRequest['headers'];
}) => {
  const userId = params.cookies.get('user-id')?.value;
  if (userId) return userId;

  const visitorId = params.cookies.get('visitor-id')?.value;
  if (visitorId) return visitorId;

  return generateId();
};
