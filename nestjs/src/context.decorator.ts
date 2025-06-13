import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { FsUserContext } from '@flagsync/nestjs-sdk';

/**
 * Custom NestJS parameter decorator to inject a FlagSync-compatible `FsUserContext`
 * into route handlers.
 *
 * This decorator assumes that `request.user` has been populated by an upstream
 * AuthGuard or middleware.
 *
 * In most production setups, this would be done by decoding a JWT or using a session cookie.
 *
 * If the user is not authenticated, a fallback anonymous visitor ID is assigned
 * to ensure that feature flags can still be evaluated consistently across sessions
 * for unauthenticated users.
 *
 * See:
 * - https://docs.nestjs.com/guards#authorization-guard
 * - https://docs.flagsync.com/sdks/overview#user-context-best-practices
 */
export const UserContext = createParamDecorator(
  (_, ctx: ExecutionContext): FsUserContext => {
    const request = ctx.switchToHttp().getRequest();

    const user = request.user;

    if (!user) {
      // In production, assign a stable visitorId to unauthenticated users
      // to maintain consistent flag evaluations across sessions.
      // See: https://docs.flagsync.com/sdks/overview#user-context-best-practices
      return {
        key: `visitor-${Math.random()}`,
      };
    }

    return {
      key: user.userId,
      attributes: {
        jobTitle: user.role,
        region: request.headers['x-region'] ?? 'Unknown',
      },
    };
  },
);
