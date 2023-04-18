import { Module } from '@nestjs/common';
import { HouseResolver } from './house.resolver';
import { PrismaService } from 'src/prisma.service';
import { HouseService } from './house.service';

@Module({
  providers: [HouseResolver, HouseService, PrismaService],
  exports: [HouseService],
})
export class HouseModule {}
