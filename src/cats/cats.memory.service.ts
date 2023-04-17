import { Injectable } from '@nestjs/common';
import { Cat, Properties } from './entities/cat.entity';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class InMemoryCatsService {
  private readonly childrenMapping: Record<number, number[]> = {
    1: [2, 3, 4],
    2: [],
    3: [],
    4: [],
  };

  private readonly propertiesMapping: Record<number, Properties | undefined> = {
    1: {
      catId: 1,
      color: 'orange',
      id: 1,
    },
    2: undefined,
    3: {
      id: 3,
      color: 'gray',
      catId: 3,
    },
    4: {
      id: 4,
      color: 'rainbow',
      catId: 4,
    },
  };

  private readonly cats: Cat[] = [
    {
      parentId: undefined,
      id: 1,
      name: 'Grumpy Cat',
      age: 6,
    },
    {
      parentId: 1,
      id: 2,
      name: 'Garfield',
      age: 3,
    },
    {
      parentId: 1,
      id: 3,
      name: 'Nyan Cat',
      age: 1,
    },
    {
      parentId: 1,
      id: 4,
      name: 'Keyboard Cat',
      age: 2,
    },
  ];

  constructor(private readonly prisma: PrismaService) {}

  findOne(id: number): Promise<Cat> {
    return Promise.resolve(this.cats.find((cat) => cat.id === id));
  }

  children(id: number): Promise<Cat[]> {
    return Promise.resolve(
      this.cats.filter((cat) => this.childrenMapping[id].includes(cat.id)),
    );
  }

  propertiesOf(id: number) {
    return Promise.resolve(this.propertiesMapping[id]);
  }
}
