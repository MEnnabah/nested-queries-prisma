import { Module } from '@nestjs/common';
import { OwnersService } from './owners.service';
import { PrismaService } from 'src/prisma.service';
import { OwnerResolver } from './owner.resolver';
import { HouseModule } from 'src/house/house.module';
import { OwnerHouseResolver } from './owner-house.resolver';

@Module({
  imports: [HouseModule],
  providers: [OwnersService, OwnerHouseResolver, OwnerResolver, PrismaService],
  exports: [OwnersService],
})
export class OwnersModule {}
