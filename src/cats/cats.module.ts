import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsResolver } from './cats.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [CatsResolver, CatsService, PrismaService],
})
export class CatsModule {}
