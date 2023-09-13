type PricingPlan = {
  priceId: string;
  productId: string;
  productName: string;
  price: {
    monthly: number;
    annually: number;
    currency: string;
  } | "Custom";
  description?: string;
  features: string[];
  cta: string;
  href: string;
  featured: boolean;
};
