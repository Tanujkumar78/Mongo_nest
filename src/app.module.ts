import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule,
    MongooseModule.forRoot('mongodb+srv://tanukutanujkumar:O95bUnAiTkIU3Uao@cluster0.bwhsu2g.mongodb.net/random?retryWrites=true&w=majority&appName=Cluster0'), // Adjust the connection string as needed
  ],
 
  controllers: [],
  providers: [],
})
export class AppModule {}