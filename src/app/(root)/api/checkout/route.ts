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
  const totalPrice: number = price;

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
          name: `${
            product.nameDisplayMethod
          }__${product.date.toLocaleString()}`,
          default_price_data: {
            unit_amount: Math.round(totalPrice * 100),
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

  // with one is adding a new product to the list of product registered?

  for (const product of data) {
    const stripeProduct = activeProducts?.find(
      (prod: any) =>
        prod?.name?.toLowerCase() == product?.nameDisplayMethod?.toLowerCase()
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

// {
//   "id": "cs_test_a1Jh3T7vXp2UFZyzhOPjzLy2WGywXXDh4rAvUlspToiqaehTBbAsTqxQAW",
//   "object": "checkout.session",
//   "livemode": false,
//   "payment_intent": "pi_3P8H8y08Q7U6VoWo1mk5FsCP",
//   "status": "complete",
//   "after_expiration": null,
//   "allow_promotion_codes": false,
//   "amount_subtotal": 18376,
//   "amount_total": 19376,
//   "automatic_tax": {
//     "enabled": false,
//     "liability": null,
//     "status": null
//   },
//   "billing_address_collection": "required",
//   "cancel_url": "https://stripe.com",
//   "client_reference_id": null,
//   "client_secret": null,
//   "consent": null,
//   "consent_collection": {
//     "payment_method_reuse_agreement": null,
//     "promotions": "none",
//     "terms_of_service": "none"
//   },
//   "created": 1713770280,
//   "currency": "eur",
//   "currency_conversion": null,
//   "custom_fields": [
//   ],
//   "custom_text": {
//     "after_submit": null,
//     "shipping_address": null,
//     "submit": null,
//     "terms_of_service_acceptance": null
//   },
//   "customer": null,
//   "customer_creation": "if_required",
//   "customer_details": {
//     "address": {
//       "city": "Vannes",
//       "country": "FR",
//       "line1": "7, rue des paras de la 1ere BCCP",
//       "line2": null,
//       "postal_code": "56000",
//       "state": null
//     },
//     "email": "corentin.damas@free.fr",
//     "name": "corentin",
//     "phone": "+390668911893",
//     "tax_exempt": "none",
//     "tax_ids": [
//     ]
//   },
//   "customer_email": null,
//   "expires_at": 1713856680,
//   "invoice": null,
//   "invoice_creation": {
//     "enabled": false,
//     "invoice_data": {
//       "account_tax_ids": null,
//       "custom_fields": null,
//       "description": null,
//       "footer": null,
//       "issuer": null,
//       "metadata": {
//       },
//       "rendering_options": null
//     }
//   },
//   "locale": "auto",
//   "metadata": {
//   },
//   "mode": "payment",
//   "payment_link": "plink_1P8H7e08Q7U6VoWoGSnTAHWv",
//   "payment_method_collection": "if_required",
//   "payment_method_configuration_details": {
//     "id": "pmc_1P4jrB08Q7U6VoWoIuFwRsfK",
//     "parent": null
//   },
//   "payment_method_options": {
//     "card": {
//       "request_three_d_secure": "automatic"
//     }
//   },
//   "payment_method_types": [
//     "card",
//     "bancontact",
//     "eps",
//     "giropay",
//     "ideal",
//     "klarna",
//     "link"
//   ],
//   "payment_status": "paid",
//   "phone_number_collection": {
//     "enabled": true
//   },
//   "recovered_from": null,
//   "saved_payment_method_options": null,
//   "setup_intent": null,
//   "shipping_address_collection": {
//     "allowed_countries": [
//       "FR",
//       "GR",
//       "GG",
//       "HK",
//       "IN",
//       "IE",
//       "FO",
//       "IT",
//       "JP",
//       "JE",
//       "FI",
//       "IS",
//       "CH",
//       "LV",
//       "LI",
//       "LT",
//       "LU",
//       "MT",
//       "MC",
//       "NL",
//       "NO",
//       "PL",
//       "PT",
//       "CZ",
//       "RO",
//       "DK",
//       "DE",
//       "GB",
//       "SK",
//       "SI",
//       "ES",
//       "AT",
//       "BE",
//       "BG",
//       "US",
//       "CA",
//       "KR",
//       "CN",
//       "HR",
//       "EE",
//       "SE"
//     ]
//   },
//   "shipping_cost": {
//     "amount_subtotal": 1000,
//     "amount_tax": 0,
//     "amount_total": 1000,
//     "shipping_rate": "shr_1P8H7I08Q7U6VoWoIZFL7eRj"
//   },
//   "shipping_details": {
//     "address": {
//       "city": "Vannes",
//       "country": "FR",
//       "line1": "7, rue des paras de la 1ere BCCP",
//       "line2": null,
//       "postal_code": "56000",
//       "state": ""
//     },
//     "name": "corentin"
//   },
//   "shipping_options": [
//     {
//       "shipping_amount": 1000,
//       "shipping_rate": "shr_1P8H7I08Q7U6VoWoIZFL7eRj"
//     }
//   ],
//   "submit_type": "auto",
//   "subscription": null,
//   "success_url": "https://stripe.com",
//   "total_details": {
//     "amount_discount": 0,
//     "amount_shipping": 1000,
//     "amount_tax": 0
//   },
//   "ui_mode": "hosted",
//   "url": null
// }
