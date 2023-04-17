import { Injectable } from '@nestjs/common';
import { Cat } from './entities/cat.entity';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CatsService {
  constructor(private prisma: PrismaService) {}

  findOne(id: number): Promise<Cat> {
    return this.prisma.cat.findUnique({
      where: { id },
    });
  }

  children(id: number): Promise<Cat[]> {
    return this.prisma.cat.findMany({
      where: { parentId: id },
    });
  }

  propertiesOf(id: number) {
    return this.prisma.properties.findMany({
      where: {
        catId: id,
      },
    });
  }
}
