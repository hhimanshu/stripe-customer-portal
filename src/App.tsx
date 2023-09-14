import { useEffect, useState } from "react";
import PricingPlans from "./components/PricingPlans";
import {
  enterprisePlan,
  pricePlans,
  temporaryDescriptions,
} from "./components/data/pricePlans";
import { PlanPrice, Price, PricingPlan, Product } from "./components/types";

const App = () => {
  /* const [prices, setPrices] = useState<Price[]>([]);
  const [products, setProducts] = useState<Product[]>([]); */
  const [pricingPlans, setPricingPlans] = useState<PricingPlan[]>([]);

  useEffect(() => {
    const getData = async () => {
      const pricesRes = await fetch(
        "http://127.0.0.1:5001/stripe-cp/us-central1/getPrices"
      );
      const prices = (await pricesRes.json()).data as Price[];
      const productRes = await fetch(
        "http://127.0.0.1:5001/stripe-cp/us-central1/getProducts"
      );
      const products = (await productRes.json()).data as Product[];
      // console.log(JSON.stringify(prices));
      console.log(JSON.stringify(products));

      const plans: PricingPlan[] = [];
      products.forEach((product, index) => {
        const pricesForProduct = prices.filter(
          (price) => price.product === product.id
        );
        let planPrice: PlanPrice = {} as PlanPrice;
        pricesForProduct.forEach((price) => {
          const key =
            price.recurring.interval === "month" ? "monthly" : "annually";
          planPrice[key] = price.unit_amount! / 100;
          planPrice.currency = price.currency;
        });
        const plan: PricingPlan = {
          productId: product.id,
          productName: product.name,
          description: temporaryDescriptions[index],
          price: planPrice,
          features: product.features.map((feature) => feature.name),
          cta: "Start trial",
          href: "#",
          featured: false,
        };
        plans.push(plan);
      });
      const sortedByPricePlans = plans.sort((a, b) => {
        if (a.price !== "Custom" && b.price !== "Custom") {
          return a.price.monthly - b.price.monthly;
        }
        return 0;
      });
      setPricingPlans([...sortedByPricePlans, enterprisePlan]);
    };

    getData().then(() => {
      console.log("done");
    });
  }, []);

  return (
    <div className="bg-slate-600">
      <PricingPlans plans={pricingPlans} />
    </div>
  );
};

export default App;
