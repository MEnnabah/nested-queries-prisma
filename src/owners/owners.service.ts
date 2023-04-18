import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Cat, Owner } from '@prisma/client';

@Injectable()
export class OwnersService {
  constructor(private prisma: PrismaService) {}

  owner(cat: Cat): Promise<Owner> {
    return this.prisma.owner.findUnique({
      where: { id: cat.ownerId },
    });
  }
}
