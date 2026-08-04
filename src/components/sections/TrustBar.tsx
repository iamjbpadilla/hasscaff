import React from 'react';
import { ShieldCheck, Award, ClipboardCheck, Truck } from 'lucide-react';
import { COMPANY_INFO } from '../../lib/constants';

const trustItems = [
  { icon: ShieldCheck, label: 'QBCC Licensed', detail: `Lic #${COMPANY_INFO.qbccLicense}` },
  { icon: Award, label: '$20M Public Liability', detail: 'Fully insured on every job' },
  { icon: ClipboardCheck, label: 'AS/NZS 1576', detail: 'SWMS provided' },
  { icon: Truck, label: '24/7 Rapid Dispatch', detail: 'Across Brisbane, Gold Coast & Sunshine Coast' },
];

const TrustBar: React.FC = () => {
  return (
    <section className="py-10 bg-white dark:bg-brand-dark border-y border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-brand-primary" />
              </div>
              <div>
                <p className="font-bold text-sm text-gray-900 dark:text-white uppercase tracking-wide">{item.label}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
