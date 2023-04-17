import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Cat, Leg, Owner } from './entities/cat.entity';

@Injectable()
export class CatsDiskService {
  constructor(private prisma: PrismaService) {}

  findOne(id: number): Promise<Cat> {
    return this.prisma.cat.findUnique({
      where: { id },
    });
  }

  owner(cat: Cat): Promise<Owner> {
    return this.prisma.owner.findUnique({
      where: { id: cat.id },
    });
  }

  legs(cat: Cat): Promise<Leg[]> {
    return this.prisma.leg.findMany({
      where: { catId: cat.id },
    });
  }
}
