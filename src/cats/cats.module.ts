import { Module } from '@nestjs/common';
import { CatsResolver } from './cats.resolver';
import { PrismaService } from 'src/prisma.service';
import { CatsDiskService } from './cats.service';
import { OwnerResolver } from './owner.resolver';
import { OwnersService } from './owner.service';
import { LegsResolver } from './legs.resolver';
import { LegsService } from './legs.service';
import { CatsMemoryService } from './cats.memory.service';
import { LegsMemoryService } from './legs.memory.service';

@Module({
  providers: [
    CatsResolver,
    OwnerResolver,
    OwnersService,
    LegsResolver,
    LegsService,
    CatsDiskService,
    CatsMemoryService,
    LegsMemoryService,
    PrismaService,
  ],
})
export class CatsModule {}
