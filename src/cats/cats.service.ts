import { Injectable } from '@nestjs/common';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  private readonly friendMapping: Record<number, number[]> = {
    1: [2],
    2: [1, 4],
    3: [],
    4: [1],
  };

  private readonly propertiesMapping: Record<number, Cat['properties']> = {
    1: {
      color: 'orange',
    },
    2: undefined,
    3: {
      color: 'gray',
    },
    4: {
      color: 'gray',
    },
  };

  private readonly cats: Cat[] = [
    {
      id: 1,
      name: 'Garfield',
      age: 3,
    },
    {
      id: 2,
      name: 'Nyan Cat',
      age: 1,
    },
    {
      id: 3,
      name: 'Grumpy Cat',
      age: 6,
    },
    {
      id: 4,
      name: 'Keyboard Cat',
      age: 2,
    },
  ];

  findOne(id: number): Promise<Cat> {
    return Promise.resolve(this.cats.find((cat) => cat.id === id));
  }

  friendsOf(id: number): Promise<Cat[]> {
    return Promise.resolve(
      this.cats.filter((cat) => this.friendMapping[id].includes(cat.id)),
    );
  }

  propertiesOf(id: number): Promise<Cat['properties']> {
    return Promise.resolve(this.propertiesMapping[id]);
  }
}
