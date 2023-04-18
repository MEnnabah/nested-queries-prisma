import { Module } from '@nestjs/common';
import { LegsService } from './legs.service';
import { PrismaService } from 'src/prisma.service';
import { LegsResolver } from './legs.resolver';

@Module({
  providers: [LegsService, LegsResolver, PrismaService],
  exports: [LegsService],
})
export class LegsModule {}
