import { Module } from '@nestjs/common';
import { CatsResolver } from './cats.resolver';
import { PrismaService } from 'src/prisma.service';
import { InMemoryCatsService } from './cats.memory.service';
import { CatsDiskService } from './cats.disk.service';

@Module({
  providers: [
    CatsResolver,
    InMemoryCatsService,
    CatsDiskService,
    PrismaService,
  ],
})
export class CatsModule {}
