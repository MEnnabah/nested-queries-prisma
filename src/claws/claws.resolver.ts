import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { ClawsService } from './claws.service';
import { Leg } from 'src/legs/entities/legs.entity';
import { Claw } from './entities/claws.entity';

@Resolver(() => Leg)
export class ClawsResolver {
  constructor(private readonly clawsService: ClawsService) {}

  @ResolveField(() => [Claw])
  claws(@Parent() leg: Leg): Promise<Claw[]> {
    return this.clawsService.claws(leg);
  }
}
