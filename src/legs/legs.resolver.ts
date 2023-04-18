import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { LegsService } from './legs.service';
import { Cat } from 'src/cats/entities/cat.entity';
import { Leg } from './entities/legs.entity';

@Resolver(() => Cat)
export class LegsResolver {
  constructor(private readonly legsService: LegsService) {}

  @ResolveField(() => [Leg])
  legs(@Parent() cat: Cat): Promise<Leg[]> {
    return this.legsService.legs(cat);
  }
}
