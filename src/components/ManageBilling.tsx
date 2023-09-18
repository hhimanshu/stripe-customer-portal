import { API_ENDPOINT } from "../constants";

export default function ManageBiling() {
  // const [prices, setPrices] = useState<Price[]>([]);
  // const [products, setProducts] = useState<Product[]>([]);
  // const [pricingPlans, setPricingPlans] = useState<PricingPlan[]>([]);

  
  const onClick = async () => {
    const sessionRes = await fetch(`${API_ENDPOINT}/createSession`);
    const result = await sessionRes.json();
    console.log(result);
    const url = result.session.url;
    console.log(`redirecting to ${url}`);
    window.open(url, "_blank");
  };

  /* useEffect(() => {
    const getData = async () => {
      const pricesRes = await fetch(`${API_ENDPOINT}/getPrices`);
      const prices = (await pricesRes.json()).data as Price[];
      const productRes = await fetch(`${API_ENDPOINT}/getProducts`);
      const products = (await productRes.json()).data as Product[];
      // console.log(JSON.stringify(prices));
      // console.log(JSON.stringify(products));

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
  }, []); */

  return (
    <div className="bg-slate-100">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Change you Billing Plan
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Incididunt sint fugiat pariatur cupidatat consectetur sit cillum
            anim id veniam aliqua proident excepteur commodo do ea.
          </p>
          <div className="mt-10 flex cursor-pointer items-center justify-center gap-x-6">
            <a
              onClick={onClick}
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Manage Billing
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
