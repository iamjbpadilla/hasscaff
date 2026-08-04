export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  location: string;
  projectType: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: 'Hasscaff had our residential scaffold up in half a day. The crew treated our property with respect and the whole job felt safe from start to finish.',
    name: 'Mark Thompson',
    role: 'Homeowner',
    location: 'Paddington, Brisbane',
    projectType: 'Home Renovation',
  },
  {
    quote: 'We needed a high-rise solution on a tight timeline. Hasscaff delivered on time, on budget, and with paperwork that made our site manager happy.',
    name: 'Sarah Chen',
    role: 'Project Manager',
    location: 'Surfers Paradise, Gold Coast',
    projectType: 'Commercial High-Rise',
  },
  {
    quote: 'Reliable, licensed, and genuinely local. They know the Sunshine Coast council requirements and made the permit side straightforward.',
    name: 'David O\'Brien',
    role: 'Builder',
    location: 'Maroochydore, Sunshine Coast',
    projectType: 'New Build',
  },
];
