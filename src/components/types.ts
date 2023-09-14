export type PlanPrice = {
  monthly: number;
  annually: number;
  currency: string;
};

export type PricingPlan = {
  //priceId: string;
  productId: string;
  productName: string;
  price: PlanPrice | "Custom";
  description?: string;
  features: string[];
  cta: string;
  href: string;
  featured: boolean;
};

export type Product = {
  id: string;
  object: string;
  active: boolean;
  attributes: any[];
  created: number;
  default_price: string | null;
  description: string | null;
  features: { name: string }[];
  images: string[];
  livemode: boolean;
  metadata: any;
  name: string;
  package_dimensions: any;
  shippable: boolean | null;
  statement_descriptor: string | null;
  tax_code: string | null;
  type: string;
  unit_label: string | null;
  updated: number;
  url: string | null;
};

export type Price = {
  id: string;
  object: string;
  active: boolean;
  billing_scheme: string;
  created: number;
  currency: string;
  custom_unit_amount: any;
  livemode: boolean;
  lookup_key: string | null;
  metadata: any;
  nickname: string | null;
  product: string;
  recurring: {
    aggregate_usage: string | null;
    interval: string;
    interval_count: number;
    trial_period_days: number | null;
    usage_type: string;
  };
  tax_behavior: string;
  tiers_mode: string | null;
  transform_quantity: any;
  type: string;
  unit_amount: number | null;
  unit_amount_decimal: string | null;
};
