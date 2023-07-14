import { Prisma, PrismaClient, User } from '@prisma/client';

const db = new PrismaClient();

export const createUser = async (input: Prisma.UserCreateInput) => {
  return (await db.user.create({
    data: input,
  })) as User;
};

export const findUniqueUser = async (
  where: Prisma.UserWhereUniqueInput,
  select?: Prisma.UserSelect
) => {
  return (await db.user.findUnique({
    where,
    select,
  })) as User;
};
