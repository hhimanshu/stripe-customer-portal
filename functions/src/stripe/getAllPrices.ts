import { onRequest } from "firebase-functions/v2/https";
//import * as logger from "firebase-functions/logger";

const stripe = require("stripe")(
  "sk_test_51KrSpyCDsGObPQ75Kl3laDYkrH7dPEqdXurTZCWNvmp896Nci4ZWjLQm8Bpx8OTXqEwIjLHzWhvrx3YCpQyOjI0J00yisXTzmQ"
);

export const getAllPrices = onRequest(async (request, response) => {
  const prices = await stripe.prices.list();
  response.send(prices);
});

export const getAllProducts = onRequest(async (request, response) => {
    const products = await stripe.products.list();
    response.send(products);
});
