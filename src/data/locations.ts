import { LucideIcon, MapPin, Clock, ShieldCheck, Phone } from 'lucide-react';

export interface LocationData {
  id: string;
  slug: string;
  route: string;
  name: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  badge: { text: string; icon: LucideIcon };
  galleryLabel: string;
  serviceAreasTitle: string;
  serviceAreasSubtitle: string;
  serviceAreas: { title: string; description: string }[];
  reasonsTitle: string;
  reasonsSubtitle: string;
  reasons: { title: string; description: string; icon: LucideIcon }[];
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  nearbySuburbs: string[];
}

export const locations: LocationData[] = [
  {
    id: 'brisbane',
    slug: 'brisbane',
    route: '/locations/brisbane',
    name: 'Brisbane',
    title: 'Scaffolding Services in Brisbane',
    shortTitle: 'Brisbane',
    metaTitle: 'Scaffolding Services Brisbane | Hasscaff',
    metaDescription: 'Professional scaffolding hire and labour services in Brisbane, Queensland. QBCC licensed, 24/7 rapid dispatch, serving all Brisbane suburbs and surrounding areas.',
    description: 'Your trusted scaffolding partner across Brisbane and surrounding suburbs. From CBD projects to residential renovations, we deliver safe, reliable scaffolding solutions.',
    badge: { text: 'Brisbane-Based Team', icon: MapPin },
    galleryLabel: 'Brisbane Projects Gallery Placeholder',
    serviceAreasTitle: 'Brisbane Service Areas',
    serviceAreasSubtitle: 'Covering all of Brisbane and surrounding regions',
    serviceAreas: [
      { title: 'Brisbane CBD', description: 'Central business district and inner-city projects.' },
      { title: 'North Brisbane', description: 'Northside suburbs including Chermside, Sandgate, and Redcliffe.' },
      { title: 'South Brisbane', description: 'Southside including Woolloongabba, West End, and Stones Corner.' },
      { title: 'Greater Brisbane', description: 'All Brisbane metropolitan areas and surrounding regions.' },
    ],
    reasonsTitle: 'Why Brisbane Chooses Hasscaff',
    reasonsSubtitle: 'Local expertise with national standards',
    reasons: [
      { title: '24/7 Service', description: 'Round-the-clock availability for urgent Brisbane projects.', icon: Clock },
      { title: 'QBCC Licensed', description: 'Fully licensed and insured for Queensland projects.', icon: ShieldCheck },
      { title: 'Local Team', description: 'Brisbane-based team with local knowledge and expertise.', icon: Phone },
    ],
    ctaTitle: 'Brisbane Scaffolding Enquiry',
    ctaText: 'Contact us for scaffolding services across Brisbane. We respond within 2 hours.',
    ctaButton: 'Request Brisbane Quote',
    nearbySuburbs: ['Chermside', 'Sandgate', 'Redcliffe', 'Woolloongabba', 'West End', 'Stones Corner', 'Mount Gravatt', 'Indooroopilly', 'The Gap', 'Nundah'],
  },
  {
    id: 'gold-coast',
    slug: 'gold-coast',
    route: '/locations/gold-coast',
    name: 'Gold Coast',
    title: 'Scaffolding Services on the Gold Coast',
    shortTitle: 'Gold Coast',
    metaTitle: 'Scaffolding Services Gold Coast | Hasscaff',
    metaDescription: 'Professional scaffolding hire and labour services on the Gold Coast, Queensland. QBCC licensed, 24/7 rapid dispatch, serving Surfers Paradise, Broadbeach, and all GC suburbs.',
    description: 'Your trusted scaffolding partner across the Gold Coast. From high-rise projects to residential renovations, we deliver safe, reliable scaffolding solutions.',
    badge: { text: 'Gold Coast-Based Team', icon: MapPin },
    galleryLabel: 'Gold Coast Projects Gallery Placeholder',
    serviceAreasTitle: 'Gold Coast Service Areas',
    serviceAreasSubtitle: 'Covering from Surfers Paradise to Coolangatta',
    serviceAreas: [
      { title: 'Surfers Paradise', description: 'Central Gold Coast and high-rise projects.' },
      { title: 'Southport', description: 'Southport and Broadwater areas.' },
      { title: 'Coolangatta', description: 'Southern Gold Coast and Tweed border region.' },
      { title: 'Hinterland', description: 'Gold Coast Hinterland and surrounding suburbs.' },
    ],
    reasonsTitle: 'Why Gold Coast Chooses Hasscaff',
    reasonsSubtitle: 'Local expertise with national standards',
    reasons: [
      { title: 'Rapid Response', description: 'Fast dispatch across the entire Gold Coast region.', icon: Clock },
      { title: 'High-Rise Expert', description: 'Specialized in high-rise and complex structures.', icon: ShieldCheck },
      { title: 'Local Team', description: 'Gold Coast-based team with local expertise.', icon: Phone },
    ],
    ctaTitle: 'Gold Coast Scaffolding Enquiry',
    ctaText: 'Contact us for scaffolding services across the Gold Coast. We respond within 2 hours.',
    ctaButton: 'Request Gold Coast Quote',
    nearbySuburbs: ['Surfers Paradise', 'Broadbeach', 'Burleigh Heads', 'Mermaid Beach', 'Southport', 'Coolangatta', 'Tugun', 'Palm Beach', 'Robina', 'Varsity Lakes', 'Tamborine Mountain'],
  },
  {
    id: 'sunshine-coast',
    slug: 'sunshine-coast',
    route: '/locations/sunshine-coast',
    name: 'Sunshine Coast',
    title: 'Scaffolding Services on the Sunshine Coast',
    shortTitle: 'Sunshine Coast',
    metaTitle: 'Scaffolding Services Sunshine Coast | Hasscaff',
    metaDescription: 'Professional scaffolding hire and labour services on the Sunshine Coast, Queensland. QBCC licensed, 24/7 rapid dispatch, serving Maroochydore, Noosa, and all SC suburbs.',
    description: 'Your trusted scaffolding partner across the Sunshine Coast. From coastal projects to hinterland renovations, we deliver safe, reliable scaffolding solutions.',
    badge: { text: 'Sunshine Coast-Based Team', icon: MapPin },
    galleryLabel: 'Sunshine Coast Projects Gallery Placeholder',
    serviceAreasTitle: 'Sunshine Coast Service Areas',
    serviceAreasSubtitle: 'Covering from Caloundra to Noosa and beyond',
    serviceAreas: [
      { title: 'Caloundra', description: 'Southern Sunshine Coast and coastal projects.' },
      { title: 'Maroochydore', description: 'Central Sunshine Coast and Maroochy region.' },
      { title: 'Noosa', description: 'Northern Sunshine Coast and Noosa Hinterland.' },
      { title: 'Hinterland', description: 'Sunshine Coast Hinterland and surrounding areas.' },
    ],
    reasonsTitle: 'Why Sunshine Coast Chooses Hasscaff',
    reasonsSubtitle: 'Local expertise with national standards',
    reasons: [
      { title: 'Coastal Expert', description: 'Specialized in coastal and waterfront projects.', icon: Clock },
      { title: 'Safety First', description: 'Rigorous safety protocols for all projects.', icon: ShieldCheck },
      { title: 'Local Team', description: 'Sunshine Coast-based team with local knowledge.', icon: Phone },
    ],
    ctaTitle: 'Sunshine Coast Scaffolding Enquiry',
    ctaText: 'Contact us for scaffolding services across the Sunshine Coast. We respond within 2 hours.',
    ctaButton: 'Request Sunshine Coast Quote',
    nearbySuburbs: ['Caloundra', 'Maroochydore', 'Noosa', 'Mooloolaba', 'Alexandra Headland', 'Buderim', 'Nambour', 'Coolum', 'Peregian Beach', 'Maleny'],
  },
];

export const locationsBySlug = Object.fromEntries(locations.map((l) => [l.slug, l]));
export const locationRoutes = locations.map((l) => l.route);
