import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  Query,
  HttpStatus,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  editFileName,
  imageFileFilter,
} from '../../utils/file-uploading.utils';
import { ClientService } from './client.service';
import { Client } from './client.model';

@Controller('clients')
export class ClientController {
  public constructor(private readonly clientService: ClientService) {}
  @Post()
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './files',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    })
  )
  public async addClient(
    @UploadedFile() file,
    @Body('name') name: string,
    @Body('address') address: string,
    @Body('phone') phone: string,
    @Body('notes') notes: string
  ): Promise<{ statusCode: HttpStatus; message: string; data: Client }> {
    let client;
    if (file) {
      const savedFile = {
        originalname: file.originalname,
        filename: file.filename,
      };
      client = {
        name,
        address,
        phone,
        notes,
        image: savedFile.filename,
      };
    } else {
      client = {
        name,
        address,
        phone,
        notes,
      };
    }
    const addedClient = await this.clientService.insertClient(client);
    return {
      statusCode: HttpStatus.OK,
      message: 'Client added successfully',
      data: addedClient,
    };
  }

  @Get()
  public async getClients(@Query('page') page): Promise<Client[]> {
    const suppliers = await this.clientService.getClients(page, '8');
    return suppliers;
  }

  @Get(':id')
  public async getClient(@Param('id') clientId: string): Promise<Client> {
    return this.clientService.getSingleClient(clientId);
  }

  @Patch(':id')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './files',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    })
  )
  public async updateClient(
    @Param('id') clientId: string,
    @Body('name') name: string,
    @Body('address') address: string,
    @Body('phone') phone: string,
    @Body('notes') notes: string,
    @UploadedFile() file
  ): Promise<{ statusCode: HttpStatus; message: string; client: Client }> {
    let client;
    if (file) {
      const savedFile = {
        originalname: file.originalname,
        filename: file.filename,
      };
      client = {
        name,
        address,
        phone,
        notes,
        image: savedFile.filename,
      };
    } else {
      client = {
        name,
        address,
        phone,
        notes,
      };
    }

    const updatedClient = await this.clientService.updateClient(
      client,
      clientId
    );
    return {
      statusCode: HttpStatus.OK,
      message: 'client updated successfully',
      client: updatedClient,
    };
  }

  @Delete(':id')
  public async removeClient(
    @Param('id') clientId: string
  ): Promise<{ statusCode: HttpStatus; message: string }> {
    const isDeleted = await this.clientService.deleteClient(clientId);
    if (isDeleted) {
      return {
        statusCode: HttpStatus.OK,
        message: 'Client deleted successfully',
      };
    }
  }
}
