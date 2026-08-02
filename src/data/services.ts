import { ReactElement } from 'react';

export interface Service {
  icon: ReactElement;
  title: string;
  description: string;
  specs: string;
}

export const services: Service[] = [
  {
    icon: null as any, // Will be populated with actual icons in component
    title: "Hang-On Scaffold Hire",
    description: "Rapid deployment for residential & commercial projects",
    specs: "Up to 450kg/m² capacity",
  },
  {
    icon: null as any,
    title: "Scaffold Labour Hire",
    description: "Certified scaffolders available 24/7",
    specs: "QBCC certified crews",
  },
  {
    icon: null as any,
    title: "Commercial Systems",
    description: "Heavy-duty engineered solutions",
    specs: "Custom engineering available",
  },
  {
    icon: null as any,
    title: "Residential Packages",
    description: "Complete home renovation solutions",
    specs: "Weekend friendly",
  }
];
