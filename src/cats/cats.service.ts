import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  constructor(private prisma: PrismaService) {}

  findOne(id: number): Promise<Cat> {
    return this.prisma.cat.findUnique({
      where: { id },
    });
  }
}
