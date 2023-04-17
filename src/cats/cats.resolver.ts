import {
  Resolver,
  Query,
  Args,
  Int,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { CatsService } from './cats.service';
import { Cat, Properties } from './entities/cat.entity';

@Resolver(() => Cat)
export class CatsResolver {
  constructor(private readonly catsService: CatsService) {}

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
