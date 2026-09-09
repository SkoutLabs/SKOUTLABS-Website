export interface SkoutApp {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  logo: string;
  status: "In Development" | "Coming Soon" | "Available";
  features: string[];
  futureUrl: string | null;
  appStoreUrl: string | null;
  googlePlayUrl: string | null;
  screenshots: { src: string; alt: string }[];
}
export const apps: SkoutApp[] = [
  {
    id: "budget-skout",
    name: "Budget Skout",
    category: "A little more clarity",
    tagline: "Make room for what matters.",
    description:
      "Everyday budgeting made simpler. Track spending, manage budgets and better understand where your money goes.",
    logo: "/assets/logos/budget-skout.png",
    status: "In Development",
    features: [
      "Expense tracking",
      "Budget management",
      "Spending categories",
      "Financial overview",
      "Travel Skout expense integration planned",
    ],
    futureUrl: null,
    appStoreUrl: null,
    googlePlayUrl: null,
    screenshots: [],
  },
  {
    id: "recipe-skout",
    name: "Recipe Skout",
    category: "A little more inspiration",
    tagline: "Good food. All in one place.",
    description:
      "Your personal digital cookbook. Create, organize and follow your favourite recipes from one convenient place.",
    logo: "/assets/logos/recipe-skout.png",
    status: "In Development",
    features: [
      "Personal recipe library",
      "Recipe categories",
      "Ingredients and instructions",
      "Shopping lists",
      "Cooking tools",
    ],
    futureUrl: null,
    appStoreUrl: null,
    googlePlayUrl: null,
    screenshots: [],
  },
  {
    id: "travel-skout",
    name: "Travel Skout",
    category: "A little more adventure",
    tagline: "Less planning. More exploring.",
    description:
      "Plan journeys, organize travel details and keep track of expenses while exploring the world.",
    logo: "/assets/logos/travel-skout.png",
    status: "In Development",
    features: [
      "Trip planning",
      "Itinerary organization",
      "Travel expenses",
      "Budget tracking",
      "Travel information",
    ],
    futureUrl: null,
    appStoreUrl: null,
    googlePlayUrl: null,
    screenshots: [],
  },
];
