import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientController } from './client/client.controller';
import { clientsSchema } from './client/client.model';
import { ClientService } from './client/client.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Client', schema: clientsSchema }]),
  ],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
