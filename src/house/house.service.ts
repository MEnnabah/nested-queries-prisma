import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { House } from './entity/house.entity';

@Injectable()
export class HouseService {
  constructor(private readonly prisma: PrismaService) {}

  async housesByOwnerId(ownerId: number): Promise<House[]> {
    return this.prisma.house.findMany({
      where: {
        ownerId,
      },
    });
  }

  async house(id: number) {
    return this.prisma.house.findUnique({
      where: {
        id,
      },
    });
  }
}
