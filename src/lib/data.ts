import { Monitor, Server, Network, Layers, LucideIcon } from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    title: "CCTV Solutions",
    description:
      "Complete surveillance systems to protect your business and assets with 24/7 monitoring.",
    icon: Monitor,
  },
  {
    title: "Server Solutions",
    description:
      "Custom server infrastructures designed for reliability, scalability and performance.",
    icon: Server,
  },
  {
    title: "Network Infrastructure",
    description:
      "End-to-end networking solutions from planning to implementation and maintenance.",
    icon: Network,
  },
  {
    title: "System Integration",
    description:
      "Seamlessly connect disparate systems for improved efficiency and data flow.",
    icon: Layers,
  },
];

export interface Testimonial {
  name: string;
  title: string;
  content: string;
  avatarUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    title: "Retail Store Owner",
    content:
      "TechCompare saved us thousands of dollars on our CCTV installation. Being able to compare different providers side-by-side made the decision process so much easier.",
    avatarUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "David Chen",
    title: "Tech Startup Founder",
    content:
      "As a small business owner, I needed to set up a secure server solution without breaking the bank. TechCompare helped me find the perfect balance between performance and cost.",
    avatarUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Michelle Torres",
    title: "Operations Director",
    content:
      "Our company needed a complete network infrastructure overhaul. TechCompare guided us through the entire process and helped us find the right provider within our budget.",
    avatarUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export type PlanId = "basic" | "business" | "enterprise";
export type ComparisonTab = "cctv" | "server" | "network" | "integration";

interface ComparisonFeature {
  name: string;
  values: Record<PlanId, string | boolean>;
}

interface Plan {
  id: PlanId;
  name: string;
  price: string;
}

interface ComparisonCategory {
  label: string;
  plans: Plan[];
  features: ComparisonFeature[];
}

export const comparisonData: Record<ComparisonTab, ComparisonCategory> = {
  cctv: {
    label: "CCTV Solutions",
    plans: [
      { id: "basic", name: "Basic", price: "$99" },
      { id: "business", name: "Business", price: "$299" },
      { id: "enterprise", name: "Enterprise", price: "$599+" },
    ],
    features: [
      {
        name: "Number of cameras",
        values: {
          basic: "Up to 4",
          business: "Up to 16",
          enterprise: "Unlimited",
        },
      },
      {
        name: "Storage retention",
        values: {
          basic: "7 days",
          business: "30 days",
          enterprise: "90+ days",
        },
      },
      {
        name: "Resolution",
        values: { basic: "720p", business: "1080p", enterprise: "4K" },
      },
      {
        name: "Remote access",
        values: { basic: true, business: true, enterprise: true },
      },
      {
        name: "Motion detection",
        values: { basic: true, business: true, enterprise: true },
      },
      {
        name: "AI-powered analytics",
        values: { basic: false, business: true, enterprise: true },
      },
      {
        name: "Technical support",
        values: {
          basic: "Email only",
          business: "Email & phone (business hours)",
          enterprise: "24/7 priority support",
        },
      },
    ],
  },
  server: {
    label: "Server Solutions",
    plans: [
      { id: "basic", name: "Basic", price: "$199" },
      { id: "business", name: "Business", price: "$499" },
      { id: "enterprise", name: "Enterprise", price: "$999+" },
    ],
    features: [
      {
        name: "CPUs",
        values: {
          basic: "2 cores",
          business: "4-8 cores",
          enterprise: "8+ cores",
        },
      },
      {
        name: "RAM",
        values: { basic: "8GB", business: "16-32GB", enterprise: "64GB+" },
      },
      {
        name: "Storage",
        values: {
          basic: "500GB SSD",
          business: "1TB SSD",
          enterprise: "2TB+ SSD RAID",
        },
      },
      {
        name: "Backup frequency",
        values: {
          basic: "Weekly",
          business: "Daily",
          enterprise: "Continuous",
        },
      },
      {
        name: "Uptime guarantee",
        values: { basic: "99.5%", business: "99.9%", enterprise: "99.99%" },
      },
      {
        name: "Managed services",
        values: { basic: false, business: true, enterprise: true },
      },
      {
        name: "Technical support",
        values: {
          basic: "Email only",
          business: "Email & phone (business hours)",
          enterprise: "24/7 priority support",
        },
      },
    ],
  },
  network: {
    label: "Network Infrastructure",
    plans: [
      { id: "basic", name: "Basic", price: "$299" },
      { id: "business", name: "Business", price: "$599" },
      { id: "enterprise", name: "Enterprise", price: "$1,199+" },
    ],
    features: [
      {
        name: "Network planning",
        values: {
          basic: "Basic",
          business: "Advanced",
          enterprise: "Enterprise-grade",
        },
      },
      {
        name: "Bandwidth",
        values: {
          basic: "Up to 100Mbps",
          business: "Up to 1Gbps",
          enterprise: "10Gbps+",
        },
      },
      {
        name: "Wireless coverage",
        values: {
          basic: "Basic coverage",
          business: "Full coverage",
          enterprise: "Multi-building mesh",
        },
      },
      {
        name: "Security features",
        values: {
          basic: "Basic firewall",
          business: "Advanced firewall + IDS",
          enterprise: "Enterprise security suite",
        },
      },
      {
        name: "Monitoring",
        values: {
          basic: "Basic",
          business: "Advanced",
          enterprise: "24/7 real-time",
        },
      },
      {
        name: "VPN support",
        values: { basic: true, business: true, enterprise: true },
      },
      {
        name: "Technical support",
        values: {
          basic: "Email only",
          business: "Email & phone (business hours)",
          enterprise: "24/7 priority support",
        },
      },
    ],
  },
  integration: {
    label: "System Integration",
    plans: [
      { id: "basic", name: "Basic", price: "$499" },
      { id: "business", name: "Business", price: "$999" },
      { id: "enterprise", name: "Enterprise", price: "$1,999+" },
    ],
    features: [
      {
        name: "Systems supported",
        values: {
          basic: "Up to 2",
          business: "Up to 5",
          enterprise: "Unlimited",
        },
      },
      {
        name: "API integration",
        values: {
          basic: "Basic",
          business: "Advanced",
          enterprise: "Custom development",
        },
      },
      {
        name: "Data migration",
        values: {
          basic: "Limited",
          business: "Full service",
          enterprise: "Enterprise-grade",
        },
      },
      {
        name: "Custom workflows",
        values: { basic: false, business: true, enterprise: true },
      },
      {
        name: "Integration testing",
        values: {
          basic: "Basic",
          business: "Comprehensive",
          enterprise: "Exhaustive",
        },
      },
      {
        name: "Training",
        values: {
          basic: "Documentation",
          business: "Online training",
          enterprise: "On-site training",
        },
      },
      {
        name: "Technical support",
        values: {
          basic: "Email only",
          business: "Email & phone (business hours)",
          enterprise: "24/7 priority support",
        },
      },
    ],
  },
};
