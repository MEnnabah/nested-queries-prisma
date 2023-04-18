import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CatsModule } from './cats/cats.module';
import { OwnersModule } from './owners/owners.module';
import { LegsModule } from './legs/legs.module';
import { ClawsService } from './claws/claws.service';
import { ClawsModule } from './claws/claws.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      installSubscriptionHandlers: true,
      buildSchemaOptions: {
        numberScalarMode: 'integer',
      },
    }),
    CatsModule,
    OwnersModule,
    LegsModule,
    ClawsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
