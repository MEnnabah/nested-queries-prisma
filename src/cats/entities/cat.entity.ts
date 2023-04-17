import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import {
  Cat as CatModel,
  Owner as OwnerModel,
  House as HouseModel,
  Leg as LegModel,
  Claw as ClawModel,
} from '@prisma/client';

@ObjectType()
export class House implements HouseModel {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  address: string;

  @Field(() => Int, { nullable: true })
  ownerId: number;
}

@ObjectType()
export class Owner implements OwnerModel {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  name: string;
}

@ObjectType()
export class Cat implements CatModel {
  @Field(() => ID, { description: 'ID of the cat' })
  id: number;

  @Field(() => String, { description: 'Name of the cat' })
  name: string;

  @Field(() => Int, { description: 'Age of the cat' })
  age: number;

  @Field(() => Int)
  ownerId: number;
}

@ObjectType()
export class Leg implements LegModel {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  color: string;

  @Field(() => Int)
  catId: number;

  @Field(() => [Claw], { nullable: true })
  claws?: Claw[] | null;
}

@ObjectType()
export class Claw implements ClawModel {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  length: string;

  @Field(() => Int)
  legId: number;
}
