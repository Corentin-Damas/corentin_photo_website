import prisma from "../prismaClient";

export const queryImg = async (searchParams:any) => {
    let query = searchParams
  try {
    const queryOutput = await prisma.image.findUnique({
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
export const queryFrame = async (searchParams:any) => {
    let query = searchParams
  try {
    const queryOutput = await prisma.fram.findUnique({
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
