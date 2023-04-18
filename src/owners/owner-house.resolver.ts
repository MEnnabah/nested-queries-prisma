import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Owner } from './entities/owner.entity';
import { House } from 'src/house/entity/house.entity';
import { HouseService } from 'src/house/house.service';

@Resolver(() => Owner)
export class OwnerHouseResolver {
  constructor(private readonly houseService: HouseService) {}

  @ResolveField(() => [House])
  houses(@Parent() owner: Owner): Promise<House[]> {
    return this.houseService.housesByOwnerId(owner.id);
  }
}
