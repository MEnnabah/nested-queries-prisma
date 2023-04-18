import { Injectable } from '@nestjs/common';
import { Leg } from 'src/legs/entities/legs.entity';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ClawsService {
  constructor(private readonly prismaService: PrismaService) {}

  /**
   * This is a demo of the main issue caused by the Prisma client.
   *
   * Using `$transaction`, `findMany` or `findFirst` will always crash the app.
   * However, using `findUnique` will work.
   */

  async claws(leg: Leg) {
    const x = await this.prismaService.claw.findMany({
      where: {
        legId: leg.id,
      },
    });
    return [x[0]];
  }

  // async claws(leg: Leg) {
  //   const x = await this.prismaService.claw.findFirst({
  //     where: {
  //       id: 1,
  //     },
  //   });
  //   return [x];
  // }

  // async claws(leg: Leg) {
  //   const x = await this.prismaService.$transaction([
  //     this.prismaService.claw.findUnique({
  //       where: {
  //         id: 1,
  //       },
  //     }),
  //     this.prismaService.claw.findUnique({
  //       where: {
  //         id: 2,
  //       },
  //     }),
  //   ]);
  //   return x;
  // }

  /**
   * These work just fine.
   */

  // async claws(leg: Leg) {
  //   const x = await this.prismaService.claw.findUnique({
  //     where: {
  //       id: 1,
  //     },
  //   });
  //   return [x];
  // }

  // async claws(leg: Leg) {
  //   const x = await this.prismaService.claw.findUnique({
  //     where: {
  //       id: 1,
  //     },
  //   });
  //   const y = await this.prismaService.claw.findUnique({
  //     where: {
  //       id: 2,
  //     },
  //   });
  //   return [x, y];
  // }
}
