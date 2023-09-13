import PricingPlans from "./components/PricingPlans";
import { pricePlans } from "./components/data/pricePlans";

function App() {
  return (
    <div className="bg-slate-600">
      <PricingPlans plans={pricePlans} />
    </div>
  );
}

export default App;
