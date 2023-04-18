import { Module } from '@nestjs/common';
import { OwnersService } from './owners.service';
import { PrismaService } from 'src/prisma.service';
import { OwnerResolver } from './owner.resolver';

@Module({
  providers: [OwnersService, OwnerResolver, PrismaService],
  exports: [OwnersService],
})
export class OwnersModule {}
