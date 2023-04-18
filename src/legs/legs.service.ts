import { Injectable } from '@nestjs/common';
import { Cat } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class LegsService {
  constructor(private prisma: PrismaService) {}

  legs(cat: Cat) {
    return this.prisma.leg.findMany({
      where: {
        catId: cat.id,
      },
    });
  }
}
