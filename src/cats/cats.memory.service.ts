import { Injectable } from '@nestjs/common';
import { Cat, Leg, Owner } from './entities/cat.entity';

@Injectable()
export class CatsMemoryService {
  private readonly owners: Owner[] = [
    {
      id: 1,
      name: 'Human',
    },
  ];

  private cats: Cat[] = [
    {
      id: 1,
      name: 'Kitty',
      age: 3,
      ownerId: 1,
    },
  ];

  private catLegs: Leg[] = [
    {
      id: 1,
      catId: 1,
      color: 'orange',
    },
    {
      id: 2,
      catId: 1,
      color: 'gray',
    },
    {
      id: 3,
      catId: 1,
      color: 'orange',
    },
    {
      id: 4,
      catId: 1,
      color: 'blue',
    },
  ];

  findOne(id: number): Promise<Cat> {
    return Promise.resolve(this.cats.find((cat) => cat.id === id));
  }

  owner(cat: Cat): Promise<Owner> {
    return Promise.resolve(
      this.owners.find((owner) => owner.id === cat.ownerId),
    );
  }

  legs(cat: Cat): Promise<Leg[]> {
    return Promise.resolve(this.catLegs.filter((leg) => leg.catId === cat.id));
  }
}
