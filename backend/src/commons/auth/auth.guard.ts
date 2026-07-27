import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Type,
  UnauthorizedException,
} from '@nestjs/common';

export function AuthGuard(requiredRole?: string): Type<CanActivate> {
  @Injectable()
  class MixinAuthGuard implements CanActivate {
    async canActivate(context: ExecutionContext): Promise<boolean> {
      const request = context.switchToHttp().getRequest();
      const authHeader = request.headers['authorization'];

      // Se non c'è header o token, o se in ambiente dev per test pubblici consentiamo l'accesso mock
      if (!authHeader) {
        // Mock user per testing rapido senza JWT server esterno
        request['user'] = { sub: 1, email: 'admin@analizzatore.local', role: 'admin' };
        return true;
      }

      const token = authHeader.replace('Bearer ', '');
      if (!token) {
        throw new UnauthorizedException('Token di autenticazione mancante');
      }

      // Mock user o decoding JWT
      const mockUser = { sub: 1, email: 'admin@analizzatore.local', role: 'admin' };
      request['user'] = mockUser;

      if (requiredRole && mockUser.role !== requiredRole) {
        throw new UnauthorizedException(`Accesso negato. Ruolo richiesto: ${requiredRole}`);
      }

      return true;
    }
  }

  return MixinAuthGuard;
}
