import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { FsUserContext } from '@flagsync/nestjs-sdk';

export const UserContext = createParamDecorator(
  (_, ctx: ExecutionContext): FsUserContext => {
    const request = ctx.switchToHttp().getRequest();

    // Populated by middleware or an AuthGuard
    // Alternatively, extract from request.cookies (e.g., JWT)
    // See; https://docs.nestjs.com/guards#authorization-guard
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
        testing: '123',
        region: request.headers['x-region'] ?? 'Unknown',
      },
    };
  },
);
