import prisma from "../prismaClient";

export const queryData = async (searchParams:any) => {
    let query = searchParams
  try {
    const queryOutput = await prisma.image.findFirst({
        where:{
            name:query
        }
    });
    return queryOutput;
  } catch (error) {
    console.log(error);
  } finally {
    prisma.$disconnect();
  }
};
