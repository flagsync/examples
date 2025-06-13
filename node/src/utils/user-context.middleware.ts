import type { Request, Response, NextFunction } from 'express';
import type { FsUserContext } from '@flagsync/node-sdk';

import { UserContextSymbol } from './user-context.js';

interface User {
  userId: string;
  role?: string;
}
/**
 * Middleware to construct a FlagSync-compatible FsUserContext from the request.
 *
 * In production, `req.user` is usually populated by prior auth middleware
 * (e.g., decoding a JWT or a session cookie).
 *
 * If the user is authenticated, we use their userId as the targeting key.
 * If unauthenticated, we assign a temporary anonymous "visitorId".
 *
 * More: https://docs.flagsync.com/sdks-server-side/nodejs#user-context-identification
 */
export function userContextMiddleware(
  req: Request,
  _: Response,
  next: NextFunction,
) {
  const user = (req as any).user as User | undefined;

  const ctx: FsUserContext = user
    ? {
        key: user.userId,
        attributes: {
          jobTitle: user.role,
          region: req.headers['x-region'] ?? 'Unknown',
        },
      }
    : // Note: In production, assign a stable "visitorId" to unauthenticated users
      // to maintain consistent flag evaluations across sessions.
      // See: https://docs.flagsync.com/sdks/overview#user-context-best-practices
      {
        key: `visitor-${Math.random()}`,
      };

  (req as any)[UserContextSymbol] = ctx;
  next();
}
