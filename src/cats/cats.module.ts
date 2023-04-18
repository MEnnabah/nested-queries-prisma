import { Module } from '@nestjs/common';
import { CatsResolver } from './cats.resolver';
import { PrismaService } from 'src/prisma.service';
import { CatsService } from './cats.service';
import { OwnersModule } from 'src/owners/owners.module';
import { CatOwnerResolver } from './cats-owner.resolver';

@Module({
  imports: [OwnersModule],
  providers: [CatsResolver, CatOwnerResolver, CatsService, PrismaService],
})
export class CatsModule {}
