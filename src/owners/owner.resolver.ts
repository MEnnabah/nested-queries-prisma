import { Resolver, Query, Args } from '@nestjs/graphql';
import { OwnersService } from 'src/owners/owners.service';
import { Owner } from './entities/owner.entity';

@Resolver(() => Owner)
export class OwnerResolver {
  constructor(private readonly ownerService: OwnersService) {}

  @Query(() => Owner)
  async ownerById(@Args('id') id: number): Promise<Owner> {
    return this.ownerService.ownerById(id);
  }
}
