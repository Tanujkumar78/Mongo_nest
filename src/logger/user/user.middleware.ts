// import { Injectable, NestMiddleware } from '@nestjs/common';

// @Injectable()
// export class UserMiddleware implements NestMiddleware {
//   use(req: any, res: any, next: () => void) {
//     next();
//   }
// }


import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
use(req: Request, res: Response, next: NextFunction) {
console.log('🟢 [Middleware] Before Request');
res.on('finish', () => {
console.log('🏁 [Middleware] Before Response Sent');
});
next();
}
} 