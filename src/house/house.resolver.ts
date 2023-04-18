import { Args, Query, Resolver } from '@nestjs/graphql';
import { House } from './entity/house.entity';
import { HouseService } from './house.service';

@Resolver(() => House)
export class HouseResolver {
  constructor(private readonly houseService: HouseService) {}

  @Query(() => House)
  async house(@Args('id') id: number) {
    return this.houseService.house(id);
  }
}
