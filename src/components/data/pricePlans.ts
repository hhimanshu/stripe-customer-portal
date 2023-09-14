import { PricingPlan } from "../types";

export const pricePlans: PricingPlan[] = [
  {
    productName: "Freelancer",
    //priceId: 'tier-freelancer',
    productId: "prod_H8Y7Z2X2Y2",
    href: "#",
    price: { monthly: 15, annually: 144, currency: "USD" },
    description: "The essentials to provide your best work for clients.",
    features: [
      "5 products",
      "Up to 1,000 subscribers",
      "Basic analytics",
      "48-hour support response time",
    ],
    featured: false,
    cta: "Start free trial",
  },
  {
    productName: "Startup",
    //priceId: 'tier-startup',
    productId: "prod_H8Y7Z2X2Y3",
    href: "#",
    price: { monthly: 30, annually: 288, currency: "USD" },
    description: "A plan that scales with your rapidly growing business.",
    features: [
      "25 products",
      "Up to 10,000 subscribers",
      "Advanced analytics",
      "24-hour support response time",
      "Marketing automations",
    ],
    featured: false,
    cta: "Start free trial",
  },
  ,
];

export const temporaryDescriptions = [
  "The essentials to provide your best work for clients.",
  "A plan that scales with your rapidly growing business.",
  "Dedicated support and infrastructure for your company.",
];
export const enterprisePlan: PricingPlan = {
  productName: "Enterprise",
  productId: "prod_H8Y7Z2X2Y4",
  href: "#",
  price: "Custom",
  description: temporaryDescriptions[2],
  features: [
    "Unlimited recipes",
    "Unlimited dishes",
    "Unlimited locations",
    "Dedicated support team",
  ],
  featured: true,
  cta: "Contact sales",
};
