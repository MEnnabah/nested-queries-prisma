import {
  Resolver,
  Query,
  Args,
  Int,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { Cat, Properties } from './entities/cat.entity';
import { CatsDiskService } from './cats.disk.service';
import { InMemoryCatsService } from './cats.memory.service';

@Resolver(() => Cat)
export class CatsResolver {
  /**
   * Toggle between the following constructors to test either behavior
   */

  constructor(private readonly catsService: CatsDiskService) {}
  // constructor(private readonly catsService: InMemoryCatsService) {}

  @Query(() => Cat, { name: 'cat' })
  findOne(@Args('id', { type: () => Int }) id: number): Promise<Cat> {
    return this.catsService.findOne(id);
  }

  @ResolveField(() => [Cat])
  children(@Parent() cat: Cat): Promise<Cat[]> {
    return this.catsService.children(cat.id);
  }

  @ResolveField(() => Properties, { nullable: true })
  properties(@Parent() cat: Cat) {
    console.log('properties', cat);
    return Promise.resolve(this.catsService.propertiesOf(cat.id));
  }
}
