import { Resolver, Parent, ResolveField } from '@nestjs/graphql';
import { OwnersService } from 'src/owners/owners.service';
import { Cat } from 'src/cats/entities/cat.entity';
import { Owner } from './entities/owner.entity';

@Resolver(() => Cat)
export class OwnerResolver {
  constructor(private readonly ownerService: OwnersService) {}

  @ResolveField(() => Owner)
  owner(@Parent() cat: Cat): Promise<Owner> {
    return this.ownerService.owner(cat);
  }
}
