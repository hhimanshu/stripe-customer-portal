import { onRequest } from "firebase-functions/v2/https";
//import * as logger from "firebase-functions/logger";

const TEST_CUSTOMER_ID = "cus_Oe1EuTkIq7eAui";
const STRIPE_RESTRICTED_KEY =
  "sk_test_51KrSpyCDsGObPQ75Kl3laDYkrH7dPEqdXurTZCWNvmp896Nci4ZWjLQm8Bpx8OTXqEwIjLHzWhvrx3YCpQyOjI0J00yisXTzmQ";

const stripe = require("stripe")(STRIPE_RESTRICTED_KEY);

export const getAllPrices = onRequest(async (request, response) => {
  const prices = await stripe.prices.list();
  response.send(prices);
});

export const getAllProducts = onRequest(async (request, response) => {
  const products = await stripe.products.list({
    active: true,
  });
  response.send(products);
});

export const createBillingSession = onRequest(async (request, response) => {
  const session = await stripe.billingPortal.sessions.create({
    customer: TEST_CUSTOMER_ID,
    return_url: "http://localhost:5173", // todo: change this to the actual url and based on environment (not always local)
  });
  response.send({ session });
});
