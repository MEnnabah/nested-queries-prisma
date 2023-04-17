import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Properties {
  @Field(() => String)
  color: string;
}

@ObjectType()
export class Cat {
  @Field(() => ID, { description: 'ID of the cat' })
  id: number;

  @Field(() => String, { description: 'Name of the cat' })
  name: string;

  @Field(() => Int, { description: 'Age of the cat' })
  age: number;

  @Field(() => Properties, {
    description: 'Properties of the cat',
    nullable: true,
  })
  properties?: Properties;

  @Field(() => [Cat], {
    description: 'Friends of the cat',
    nullable: true,
  })
  friends?: Cat[];
}
