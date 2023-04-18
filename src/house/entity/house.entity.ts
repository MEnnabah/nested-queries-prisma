import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { House as HouseModel } from '@prisma/client';

@ObjectType()
export class House implements HouseModel {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  address: string;

  @Field(() => Int)
  ownerId: number;
}
