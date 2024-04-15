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

  activeProducts = await getActiveProducts();
  let stripeItems: any = [];

  for (const product of data) {
    const stripeProduct = activeProducts?.find(
      (prod: any) =>
        prod?.name?.toLowerCase() == product?.nameDisplayMethod?.toLowerCase()
    );

    if (stripeProduct) {
      console.log("start push");
      stripeItems.push({
        price: stripeProduct?.default_price,
        quantity: product?.quantity,
      });
    }
  }

  const session = await stripe.checkout.sessions.create({
    line_items: stripeItems,
    mode: "payment",
    billing_address_collection: "required",
    shipping_address_collection: {
      allowed_countries: [
        "FR",
        "GR",
        "GG",
        "HK",
        "IN",
        "IE",
        "FO",
        "IT",
        "JP",
        "JE",
        "FI",
        "IS",
        "CH",
        "LV",
        "LI",
        "LT",
        "LU",
        "MT",
        "MC",
        "NL",
        "NO",
        "PL",
        "PT",
        "CZ",
        "RO",
        "DK",
        "DE",
        "GB",
        "SK",
        "SI",
        "ES",
        "AT",
        "BE",
        "BG",
        "US",
        "CA",
        "KR",
        "CN",
        "HR",
        "EE",
        "SE",
      ],
    },
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });

  return NextResponse.json({ url: session.url });
};

// {
//     "object": {
//       "id": "plink_1P4k4E08Q7U6VoWoMnmQHSSL",
//       "object": "payment_link",
//       "active": true,
//       "after_completion": {
//         "hosted_confirmation": {
//           "custom_message": null
//         },
//         "type": "hosted_confirmation"
//       },
//       "allow_promotion_codes": false,
//       "application": null,
//       "application_fee_amount": null,
//       "application_fee_percent": null,
//       "automatic_tax": {
//         "enabled": false,
//         "liability": null
//       },
//       "billing_address_collection": "required",
//       "consent_collection": {
//         "payment_method_reuse_agreement": null,
//         "promotions": "none",
//         "terms_of_service": "none"
//       },
//       "currency": "eur",
//       "custom_fields": [
//         {
//           "key": "message",
//           "label": {
//             "custom": "Message",
//             "type": "custom"
//           },
//           "optional": false,
//           "text": {
//             "maximum_length": 255,
//             "minimum_length": null
//           },
//           "type": "text"
//         }
//       ],
//       "custom_text": {
//         "after_submit": null,
//         "shipping_address": null,
//         "submit": null,
//         "terms_of_service_acceptance": null
//       },
//       "customer_creation": "if_required",
//       "inactive_message": null,
//       "invoice_creation": {
//         "enabled": false,
//         "invoice_data": {
//           "account_tax_ids": null,
//           "custom_fields": null,
//           "description": null,
//           "footer": null,
//           "issuer": null,
//           "metadata": {
//           },
//           "rendering_options": null
//         }
//       },
//       "livemode": true,
//       "metadata": {
//       },
//       "on_behalf_of": null,
//       "payment_intent_data": null,
//       "payment_method_collection": "if_required",
//       "payment_method_types": null,
//       "phone_number_collection": {
//         "enabled": false
//       },
//       "restrictions": null,
//       "shipping_address_collection": {
//         "allowed_countries": [
//           "FR",
//           "GR",
//           "GG",
//           "HK",
//           "IN",
//           "IE",
//           "FO",
//           "IT",
//           "JP",
//           "JE",
//           "FI",
//           "IS",
//           "CH",
//           "LV",
//           "LI",
//           "LT",
//           "LU",
//           "MT",
//           "MC",
//           "NL",
//           "NO",
//           "PL",
//           "PT",
//           "CZ",
//           "RO",
//           "DK",
//           "DE",
//           "GB",
//           "SK",
//           "SI",
//           "ES",
//           "AT",
//           "BE",
//           "BG",
//           "US",
//           "CA",
//           "KR",
//           "CN",
//           "HR",
//           "EE",
//           "SE"
//         ]
//       },
//       "shipping_options": [
//       ],
//       "submit_type": "auto",
//       "subscription_data": null,
//       "tax_id_collection": {
//         "enabled": false
//       },
//       "transfer_data": null,
//       "url": "https://buy.stripe.com/cN2bJDax3gj5aNGbII"
//     }
//   }
