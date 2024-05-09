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
  const { products, price, shippingCoast, countryCode, minExp, maxExp } =
    await request.json();
  const data: productResumeType[] = products;

  let activeProducts = await getActiveProducts();

  try {
    for (const product of data) {
      const productName: string = `${product.nameDisplayMethod}_${
        product.color ? product.color : ""
      }_${new Date(product.date).toLocaleString()}`;

      const stripeProduct = activeProducts?.find(
        (stripeProduct: any) =>
          stripeProduct?.name?.toLowerCase() == productName
      );
      if (stripeProduct == undefined) {
        const prod = await stripe.products.create({
          name: productName,
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

  activeProducts = await getActiveProducts();
  let stripeItems: any = [];


  for (const product of data) {
    const productName: string = `${product.nameDisplayMethod}_${
      product.color ? product.color : ""
    }_${new Date(product.date).toLocaleString()}`;
    const stripeProduct = activeProducts?.find(
      (prod: any) => prod?.name?.toLowerCase() == productName.toLowerCase()
    );

    if (stripeProduct) {
      stripeItems.push({
        price: stripeProduct?.default_price,
        quantity: product?.quantity,
      });
    }
  }

  const session = await stripe.checkout.sessions.create({
    line_items: stripeItems,
    mode: "payment",
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: Math.round(shippingCoast * 100),
            currency: "eur",
          },
          display_name: "Standart livraison service",
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: minExp,
            },
            maximum: {
              unit: "business_day",
              value: maxExp,
            },
          },
        },
      },
    ],
    billing_address_collection: "required",
    shipping_address_collection: {
      allowed_countries: [countryCode],
    },
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });

  return NextResponse.json({ url: session.url });
};
