import {
  Resolver,
  Query,
  Args,
  Int,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { Cat, Leg, Owner } from './entities/cat.entity';
import { CatsDiskService } from './cats.service';
import { CatsMemoryService } from './cats.memory.service';

@Resolver(() => Cat)
export class CatsResolver {
  constructor(private readonly catsService: CatsDiskService) {}
  // constructor(private readonly catsService: CatsMemoryService) {}

  @Query(() => Cat, { name: 'cat' })
  findOne(@Args('id', { type: () => Int }) id: number): Promise<Cat> {
    return this.catsService.findOne(id);
  }

  @ResolveField(() => [Leg])
  legs(@Parent() cat: Cat): Promise<Leg[]> {
    return this.catsService.legs(cat);
  }

  @ResolveField(() => Owner)
  owner(@Parent() cat: Cat): Promise<Owner> {
    return this.catsService.owner(cat);
  }
}
