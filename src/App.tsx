import StripePricingTable from "./components/PickPlan";

const API_ENDPOINT = "http://127.0.0.1:5001/stripe-cp/us-central1";
const App = () => {
  /* const [prices, setPrices] = useState<Price[]>([]);
  const [products, setProducts] = useState<Product[]>([]); */
  // const [pricingPlans, setPricingPlans] = useState<PricingPlan[]>([]);

  /* const onClick = async () => {
    const sessionRes = await fetch(`${API_ENDPOINT}/createSession`);
    const result = await sessionRes.json();
    console.log(result);
    const url = result.session.url;
    console.log(`redirecting to ${url}`);
    window.open(url, '_blank');
  }; */

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
    <div className="bg-slate-600">
      <StripePricingTable />
    </div>
  );
};

export default App;
