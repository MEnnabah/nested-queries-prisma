import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { Leg as LegModel } from '@prisma/client';
import { Claw } from 'src/claws/entities/claws.entity';

@ObjectType()
export class Leg implements LegModel {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  color: string;

  @Field(() => Int)
  catId: number;
}
