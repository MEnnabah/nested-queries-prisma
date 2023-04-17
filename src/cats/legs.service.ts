import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Claw, Leg } from './entities/cat.entity';

@Injectable()
export class LegsService {
  constructor(private prisma: PrismaService) {}

  claws(leg: Leg): Promise<Claw[]> {
    return this.prisma.claw.findMany({
      where: { legId: leg.id },
    });
  }
}
