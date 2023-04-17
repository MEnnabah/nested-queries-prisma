import { Resolver, Parent, ResolveField } from '@nestjs/graphql';
import { House, Owner } from './entities/cat.entity';
import { OwnersService } from './owner.service';

@Resolver(() => Owner)
export class OwnerResolver {
  constructor(private readonly ownerService: OwnersService) {}

  @ResolveField(() => [House], { nullable: true })
  houses(@Parent() owner: Owner): Promise<House[]> {
    return this.ownerService.houses(owner);
  }
}
