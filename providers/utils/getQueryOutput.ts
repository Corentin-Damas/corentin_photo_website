import prisma from "../prismaClient";

export const queryImg = async (searchParams: any) => {
  let query = searchParams;
  try {
    const queryOutput = await prisma.image.findUnique({
      where: {
        name: query,
      },
    });
    return queryOutput;
  } catch (error) {
    console.log(error);
  } finally {
    prisma.$disconnect();
  }
};
export const queryFrame = async (searchParams: any, format: string) => {
  let query = searchParams;

  const fullSearchId = `${query}_${format.replace("/", ":")}`;
  try {
    const queryOutput = await prisma.fram.findUnique({
      where: {
        id: fullSearchId,
      },
    });
    return queryOutput;
  } catch (error) {
    console.log(error);
  } finally {
    prisma.$disconnect();
  }
};
export const queryExpedition = async (country: any, quantity: number) => {
  let searchId:string = `${country}_${quantity}`;

  try {
    const queryOutput = await prisma.expedition.findUnique({
      where: {
        id: searchId,
      },
    });
    return queryOutput;
  } catch (error) {
    console.log(error);
  } finally {
    prisma.$disconnect();
  }
};
