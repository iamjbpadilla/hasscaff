import { LucideIcon, Wrench, Users, Building2, Home, ShieldCheck, Clock, Award, Check } from 'lucide-react';

export interface ServiceExtraBlock {
  title: string;
  description?: string;
  list?: string[];
}

export interface ServiceExtraSection {
  title: string;
  subtitle: string;
  blocks: ServiceExtraBlock[];
  columns: 2 | 3;
}

export interface ServiceData {
  id: string;
  slug: string;
  route: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  badge: { text: string; icon: LucideIcon };
  galleryLabel: string;
  featuresTitle: string;
  featuresSubtitle: string;
  features: { title: string; description: string; icon: LucideIcon }[];
  extra?: ServiceExtraSection;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
}

export const services: ServiceData[] = [
  {
    id: 'hang-on',
    slug: 'hang-on-systems',
    route: '/services/hang-on-systems',
    title: 'Hang-On Scaffold Hire',
    shortTitle: 'Hang-On Scaffolds',
    metaTitle: 'Hang-On Scaffold Hire Brisbane, Gold Coast & Sunshine Coast | Hasscaff',
    metaDescription: 'Professional hang-on scaffold hire across Brisbane, Gold Coast & SEQ. QBCC licensed, rapid dispatch, engineered for safety. Get a free quote today.',
    shortDescription: 'Rapid deployment for residential & commercial projects. Up to 450kg/m² capacity.',
    description: 'Efficient, cost-effective hang-on scaffolding solutions for residential and commercial projects across South East Queensland.',
    icon: Wrench,
    badge: { text: 'Efficient & Cost-Effective', icon: Wrench },
    galleryLabel: 'Hang-On Scaffold Gallery Placeholder',
    featuresTitle: 'Why Choose Our Hang-On Systems',
    featuresSubtitle: 'Designed for efficiency without compromising on safety',
    features: [
      { title: 'Rapid Installation', description: 'Quick setup and dismantling to keep your project on schedule.', icon: Clock },
      { title: 'Engineered Safety', description: 'All systems meet and exceed Australian safety standards.', icon: ShieldCheck },
      { title: 'QBCC Licensed', description: 'Fully licensed and insured for your peace of mind.', icon: Award },
      { title: 'Cost-Effective', description: 'Competitive rates with flexible hire periods.', icon: Wrench },
    ],
    extra: {
      title: 'Technical Specifications',
      subtitle: 'Built to perform, engineered to last',
      columns: 2,
      blocks: [
        {
          title: 'System Capabilities',
          list: ['Load capacity: Up to 2.0kN/m²', 'Maximum height: 50m+', 'Bay widths: 1.2m - 2.4m', 'Lift heights: 2.0m standard'],
        },
        {
          title: 'Compliance & Safety',
          list: ['AS/NZS 1576 compliant', 'WorkCover approved', 'QBCC License #15129656', '$20M public liability'],
        },
      ],
    },
    ctaTitle: 'Ready to Get Started?',
    ctaText: 'Contact us for a free quote on your hang-on scaffolding requirements. We respond within 2 hours.',
    ctaButton: 'Request Free Quote',
  },
  {
    id: 'labour',
    slug: 'labour-hire',
    route: '/services/labour-hire',
    title: 'Scaffold Labour Hire',
    shortTitle: 'Labour Hire',
    metaTitle: 'Scaffold Labour Hire Brisbane, Gold Coast & Sunshine Coast | Hasscaff',
    metaDescription: 'Expert scaffold labour hire services across Brisbane, Gold Coast & SEQ. Certified scaffolders available 24/7 for rapid dispatch. QBCC licensed team.',
    shortDescription: 'Certified scaffolders available 24/7. QBCC certified crews for every stage.',
    description: 'Get skilled scaffolding professionals for your project. Our certified team ensures safe, efficient installation and dismantling.',
    icon: Users,
    badge: { text: 'Certified Professionals', icon: Users },
    galleryLabel: 'Scaffold Labour Team Gallery Placeholder',
    featuresTitle: 'Why Choose Our Labour Hire',
    featuresSubtitle: 'Skilled professionals who understand scaffolding inside and out',
    features: [
      { title: 'Certified Scaffolders', description: 'All team members hold current scaffolding certifications.', icon: ShieldCheck },
      { title: '24/7 Availability', description: 'Round-the-clock service for urgent projects.', icon: Clock },
      { title: 'Experienced Team', description: 'Average 10+ years industry experience per team member.', icon: Award },
      { title: 'Full Project Support', description: 'From installation to dismantling, we handle it all.', icon: Users },
    ],
    extra: {
      title: 'Our Labour Services',
      subtitle: 'Comprehensive scaffolding support for every stage of your project',
      columns: 3,
      blocks: [
        { title: 'Installation', description: 'Professional setup following all safety protocols and site requirements.' },
        { title: 'Modifications', description: 'Quick adjustments as your project evolves and requirements change.' },
        { title: 'Dismantling', description: 'Safe and efficient removal with site cleanup included.' },
      ],
    },
    ctaTitle: 'Need Skilled Scaffolders?',
    ctaText: 'Contact us for labour hire services. We dispatch within 2 hours for urgent requests.',
    ctaButton: 'Request Labour Quote',
  },
  {
    id: 'commercial',
    slug: 'commercial',
    route: '/services/commercial',
    title: 'Commercial Scaffolding',
    shortTitle: 'Commercial',
    metaTitle: 'Commercial Scaffolding Brisbane, Gold Coast & Sunshine Coast | Hasscaff',
    metaDescription: 'Full-service commercial scaffolding solutions for large-scale projects across Brisbane, Gold Coast & SEQ. Engineered systems, certified teams, rapid deployment.',
    shortDescription: 'Heavy-duty engineered solutions for large-scale commercial projects.',
    description: 'Complete scaffolding solutions for commercial construction, maintenance, and industrial projects. Engineered systems with full project management.',
    icon: Building2,
    badge: { text: 'Full-Service Solutions', icon: Building2 },
    galleryLabel: 'Commercial Scaffolding Gallery Placeholder',
    featuresTitle: 'Why Choose Our Commercial Services',
    featuresSubtitle: 'Full-service scaffolding solutions for large-scale commercial projects',
    features: [
      { title: 'Engineered Systems', description: 'Custom-designed scaffolding for complex commercial structures.', icon: ShieldCheck },
      { title: 'Project Management', description: 'Dedicated project managers for seamless coordination.', icon: Clock },
      { title: 'Safety Compliance', description: 'Full compliance with all commercial safety regulations.', icon: Award },
      { title: 'Large-Scale Capacity', description: 'Resources for multi-story and complex projects.', icon: Building2 },
    ],
    extra: {
      title: 'Industries We Serve',
      subtitle: 'Experienced across diverse commercial sectors',
      columns: 3,
      blocks: [
        { title: 'Construction', description: 'New builds, renovations, and structural projects.' },
        { title: 'Industrial', description: 'Factories, warehouses, and industrial facilities.' },
        { title: 'Infrastructure', description: 'Bridges, tunnels, and public infrastructure.' },
      ],
    },
    ctaTitle: 'Commercial Project?',
    ctaText: 'Contact us for commercial scaffolding solutions. We provide detailed quotes within 48 hours.',
    ctaButton: 'Request Commercial Quote',
  },
  {
    id: 'residential',
    slug: 'residential',
    route: '/services/residential',
    title: 'Residential Scaffolding',
    shortTitle: 'Residential',
    metaTitle: 'Residential Scaffolding Brisbane, Gold Coast & Sunshine Coast | Hasscaff',
    metaDescription: 'Residential scaffolding hire for home renovations and construction across Brisbane, Gold Coast & SEQ. Safe, reliable, and affordable solutions for homeowners.',
    shortDescription: 'Complete home renovation solutions. Weekend friendly, safety-first.',
    description: 'Safe, reliable scaffolding solutions for home renovations, extensions, and maintenance. We understand the unique needs of residential projects.',
    icon: Home,
    badge: { text: 'Home-Friendly Solutions', icon: Home },
    galleryLabel: 'Residential Scaffolding Gallery Placeholder',
    featuresTitle: 'Why Choose Our Residential Services',
    featuresSubtitle: 'Home-friendly scaffolding solutions designed with your property in mind',
    features: [
      { title: 'Property Protection', description: 'Careful installation to protect your home and landscaping.', icon: ShieldCheck },
      { title: 'Flexible Scheduling', description: 'Work around your timeline with minimal disruption.', icon: Clock },
      { title: 'Competitive Pricing', description: 'Affordable rates tailored for residential projects.', icon: Award },
      { title: 'Local Knowledge', description: 'Understand local council requirements and regulations.', icon: Home },
    ],
    extra: {
      title: 'Residential Applications',
      subtitle: 'Perfect for a wide range of home improvement projects',
      columns: 3,
      blocks: [
        { title: 'Renovations', description: 'Home extensions, kitchen and bathroom remodels.' },
        { title: 'Roofing', description: 'Roof repairs, replacements, and maintenance.' },
        { title: 'Painting', description: 'Exterior and interior painting projects.' },
      ],
    },
    ctaTitle: 'Home Renovation Project?',
    ctaText: 'Contact us for residential scaffolding. We provide free quotes within 2 hours.',
    ctaButton: 'Request Residential Quote',
  },
];

export const servicesBySlug = Object.fromEntries(services.map((s) => [s.slug, s]));
export const serviceRoutes = services.map((s) => s.route);

