import { Injectable } from '@nestjs/common';
import { Claw, Leg } from './entities/cat.entity';

@Injectable()
export class LegsMemoryService {
  private catClaws: Claw[] = [
    {
      id: 1,
      legId: 1,
      length: '0.4cm',
    },
    {
      id: 2,
      legId: 1,
      length: '0.5cm',
    },
    {
      id: 2,
      legId: 1,
      length: '0.5cm',
    },
    {
      id: 2,
      legId: 1,
      length: '0.5cm',
    },
  ];

  claws(leg: Leg): Promise<Claw[]> {
    return Promise.resolve(
      this.catClaws.filter((claw) => claw.legId === leg.id),
    );
  }
}
