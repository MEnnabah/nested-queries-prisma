import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { Claw as ClawModel } from '@prisma/client';

@ObjectType()
export class Claw implements ClawModel {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  length: string;

  @Field(() => Int)
  legId: number;
}
