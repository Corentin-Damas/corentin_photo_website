import prisma from "../prismaClient";

export const queryImg = async (searchParams: any) => {
  let query = searchParams;
  try {
    const queryOutput = await prisma.image.findUnique({
      where: {
        name: query,
      },
    });
    console.log("query result: ", queryOutput);
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
export const queryExpedition = async (country: string, quantity: string) => {
  let searchId: string = `${country}_${quantity}`;

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
export const queryCountries = async () => {
  let searchId: string;

  try {
    const queryOutput: shortExpeditionInfo[] =
      await prisma.$queryRaw`SELECT id,country FROM expedition ORDER BY id  `;
    return queryOutput;
  } catch (error) {
    console.log(error);
  } finally {
    prisma.$disconnect();
  }
};
