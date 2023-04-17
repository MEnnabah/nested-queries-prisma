import { Resolver, ResolveField } from '@nestjs/graphql';
import { LegsService } from './legs.service';
import { Claw, Leg } from './entities/cat.entity';
import { LegsMemoryService } from './legs.memory.service';

@Resolver(() => Leg)
export class LegsResolver {
  constructor(private readonly legsService: LegsService) {}
  // constructor(private readonly legsService: LegsMemoryService) {}

  @ResolveField(() => [Claw])
  claws(leg: Leg): Promise<Claw[]> {
    return this.legsService.claws(leg);
  }
}
