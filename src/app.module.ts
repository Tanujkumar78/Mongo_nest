import { MiddlewareConsumer, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
// import { LoggerMiddleware } from './logger/user/user.middleware';
import { RateLimitMiddleware } from './rate-limit/rate-limit.middleware';
import { ConfigModule } from '@nestjs/config';

@Module({
  // imports: [UserModule,
  //   MongooseModule.forRoot('mongodb+srv://tanukutanujkumar:O95bUnAiTkIU3Uao@cluster0.bwhsu2g.mongodb.net/random?retryWrites=true&w=majority&appName=Cluster0'), // Adjust the connection string as needed
  // ],
  imports: [UserModule,
ConfigModule.forRoot({
isGlobal: true, // Makes ConfigService available everywhere
}),
MongooseModule.forRootAsync({
useFactory: () => ({
uri: process.env.MONGO_URI,
}),
}),
],
 
  controllers: [],
  providers: [],
})
export class AppModule {
configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(RateLimitMiddleware)
      .forRoutes('user');
}
}