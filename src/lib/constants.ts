export const COMPANY_INFO = {
  name: 'HASSCAFF',
  qbccLicense: '12345678',
  phone: '0424 170 737',
  insurance: '$20M',
  abn: 'XX XXX XXX XXX',
  year: '2024'
} as const;

export const SERVICE_AREAS = [
  { name: 'Brisbane', description: 'Metro & Surrounds' },
  { name: 'Gold Coast', description: 'South to Coolangatta' },
  { name: 'Sunshine Coast', description: 'Noosa to Caboolture' }
] as const;

export const COMPLIANCE_INFO = [
  'QBCC Licensed #12345678',
  '$20M Public Liability',
  'WorkCover Approved',
  'Safety Certified'
] as const;
