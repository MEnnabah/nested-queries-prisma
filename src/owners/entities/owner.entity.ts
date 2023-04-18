import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Owner as OwnerModel } from '@prisma/client';

@ObjectType()
export class Owner implements OwnerModel {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  name: string;
}
