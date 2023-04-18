import { Module } from '@nestjs/common';
import { ClawsResolver } from './claws.resolver';
import { PrismaService } from 'src/prisma.service';
import { ClawsService } from './claws.service';

@Module({
  providers: [PrismaService, ClawsService, ClawsResolver],
  exports: [ClawsService],
})
export class ClawsModule {}
