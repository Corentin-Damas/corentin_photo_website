import { NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_API_KEY_TEST);

const getActiveProducts = async () => {
  const checkProducts = await stripe.products.list();
  const availableProducts = checkProducts.data.filter(
    (product: any) => product.active === true
  );
  return availableProducts;
};

export const POST = async (request: any) => {
  const { products } = await request.json();
  const data: productResumeType[] = products;

  let activeProducts = await getActiveProducts();

  try {
    for (const product of data) {
      const stripeProduct = activeProducts?.find(
        (stripeProduct: any) =>
          stripeProduct?.name?.toLowerCase() ==
          product?.nameDisplayMethod?.toLowerCase()
      );
      if (stripeProduct == undefined) {
        const prod = await stripe.products.create({
          name: product.nameDisplayMethod,
          default_price_data: {
            unit_amount: Math.round(product.totalPrice * 100),
            currency: "eur",
          },
        });
      }
    }
  } catch (error) {
    console.log("Error in creating a new product", error);
  }

  return NextResponse.json({ url: "" });
};
