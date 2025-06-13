import type { Request } from 'express';
import type { FsUserContext } from '@flagsync/node-sdk';

export const UserContextSymbol = Symbol('UserContext');

export function getUserContext(req: Request): FsUserContext {
  return (req as any)[UserContextSymbol];
}
