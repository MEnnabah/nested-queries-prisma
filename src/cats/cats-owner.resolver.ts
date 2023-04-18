import { Resolver, Parent, ResolveField } from '@nestjs/graphql';
import { OwnersService } from 'src/owners/owners.service';
import { Cat } from 'src/cats/entities/cat.entity';
import { Owner } from 'src/owners/entities/owner.entity';

@Resolver(() => Cat)
export class CatOwnerResolver {
  constructor(private readonly ownerService: OwnersService) {}

  @ResolveField(() => Owner)
  owner(@Parent() cat: Cat): Promise<Owner> {
    console.log('CatOwnerResolver resolving owner for cat: ', cat);
    return this.ownerService.ownerByCat(cat);
  }
}
