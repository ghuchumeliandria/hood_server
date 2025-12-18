import {
    CanActivate,
    ExecutionContext,
    ForbiddenException,
    Injectable,
  } from '@nestjs/common';
  
  @Injectable()
  export class OwnershipGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
      const request = context.switchToHttp().getRequest();
  
      const userIdFromToken = request.user?.id; 
      const userIdFromParams = request.params.id; 
  
      if (!userIdFromToken) {
        throw new ForbiddenException('Unauthorized');
      }
  
      if (userIdFromToken !== userIdFromParams) {
        throw new ForbiddenException('You can delete only your own account');
      }
  
      return true;
    }
  }
  