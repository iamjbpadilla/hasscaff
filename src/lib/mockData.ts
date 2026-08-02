export interface QuoteRequest {
  id: string;
  service: string;
  location: string;
  phone: string;
  file?: string;
  status: 'pending' | 'contacted' | 'quoted' | 'completed';
  createdAt: string;
  updatedAt: string;
  notes?: string;
}

export const MOCK_QUOTE_REQUESTS: QuoteRequest[] = [
  {
    id: '1',
    service: 'hang-on',
    location: 'Brisbane South / 4101',
    phone: '0424 170 737',
    file: 'plans.pdf',
    status: 'pending',
    createdAt: '2024-01-15T09:30:00',
    updatedAt: '2024-01-15T09:30:00',
  },
  {
    id: '2',
    service: 'labour',
    location: 'Gold Coast / 4215',
    phone: '0412 345 678',
    status: 'contacted',
    createdAt: '2024-01-14T14:20:00',
    updatedAt: '2024-01-14T16:00:00',
    notes: 'Called client, confirmed availability',
  },
  {
    id: '3',
    service: 'commercial',
    location: 'Brisbane CBD / 4000',
    phone: '0400 123 456',
    file: 'site-plans.jpg',
    status: 'quoted',
    createdAt: '2024-01-13T11:00:00',
    updatedAt: '2024-01-13T15:30:00',
    notes: 'Quote sent: $4,500 for 2 weeks',
  },
  {
    id: '4',
    service: 'residential',
    location: 'Sunshine Coast / 4556',
    phone: '0433 987 654',
    status: 'completed',
    createdAt: '2024-01-10T08:45:00',
    updatedAt: '2024-01-12T17:00:00',
    notes: 'Job completed successfully',
  },
  {
    id: '5',
    service: 'hang-on',
    location: 'Brisbane North / 4032',
    phone: '0477 555 333',
    status: 'pending',
    createdAt: '2024-01-15T10:15:00',
    updatedAt: '2024-01-15T10:15:00',
  },
  {
    id: '6',
    service: 'commercial',
    location: 'Gold Coast / 4220',
    phone: '0411 222 444',
    file: 'blueprints.pdf',
    status: 'pending',
    createdAt: '2024-01-15T07:00:00',
    updatedAt: '2024-01-15T07:00:00',
  },
  {
    id: '7',
    service: 'labour',
    location: 'Brisbane West / 4074',
    phone: '0499 888 777',
    status: 'contacted',
    createdAt: '2024-01-14T13:30:00',
    updatedAt: '2024-01-14T14:45:00',
  },
  {
    id: '8',
    service: 'residential',
    location: 'Sunshine Coast / 4567',
    phone: '0444 333 222',
    status: 'quoted',
    createdAt: '2024-01-13T09:00:00',
    updatedAt: '2024-01-13T12:00:00',
    notes: 'Quote sent: $2,200 for 1 week',
  },
];

export const SERVICE_LABELS: Record<string, string> = {
  'hang-on': 'Hang-On Scaffold Hire',
  'labour': 'Scaffold Labour Hire',
  'commercial': 'Commercial Full Package',
  'residential': 'Residential / Renovation',
};

export const STATUS_LABELS: Record<string, string> = {
  'pending': 'Pending',
  'contacted': 'Contacted',
  'quoted': 'Quoted',
  'completed': 'Completed',
};

export const STATUS_COLORS: Record<string, string> = {
  'pending': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
  'contacted': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
  'quoted': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
  'completed': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
};
