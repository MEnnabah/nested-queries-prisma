import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Properties as PropertiesModel, Cat as CatModel } from '@prisma/client';

@ObjectType()
export class Properties implements PropertiesModel {
  id: number;

  @Field(() => String)
  color: string;

  catId: number;
}

@ObjectType()
export class Cat implements CatModel {
  @Field(() => ID, { description: 'ID of the cat' })
  id: number;

  @Field(() => String, { description: 'Name of the cat' })
  name: string;

  @Field(() => Int, { description: 'Age of the cat' })
  age: number;

  parentId: number;
}
