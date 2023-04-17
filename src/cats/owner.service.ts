import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { House, Owner } from './entities/cat.entity';

@Injectable()
export class OwnersService {
  constructor(private prisma: PrismaService) {}

  houses(owner: Owner): Promise<House[]> {
    return this.prisma.house.findMany({
      where: { ownerId: owner.id },
    });
  }
}
