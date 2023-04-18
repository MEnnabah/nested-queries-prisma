import { Module } from '@nestjs/common';
import { CatsResolver } from './cats.resolver';
import { PrismaService } from 'src/prisma.service';
import { CatsService } from './cats.service';
import { OwnersModule } from 'src/owners/owners.module';

@Module({
  imports: [OwnersModule],
  providers: [CatsResolver, CatsService, PrismaService],
})
export class CatsModule {}
