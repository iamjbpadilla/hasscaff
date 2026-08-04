import React from 'react';
import { Phone } from 'lucide-react';
import { COMPANY_INFO } from '../../lib/constants';

const StickyActionBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t-2 border-brand-primary p-2 pb-[env(safe-area-inset-bottom)] bg-gray-100 dark:bg-gray-900 shadow-lg">
      <div className="flex gap-2">
        <a
          href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
          aria-label={`Call Hasscaff on ${COMPANY_INFO.phone}`}
          className="flex-1 px-4 py-3 flex items-center justify-center gap-2 bg-brand-primary text-white font-semibold text-sm rounded whitespace-nowrap"
        >
          <Phone className="w-5 h-5 text-white" />
          <span>CALL: {COMPANY_INFO.phone}</span>
        </a>
        <a
          href="#quote"
          className="flex-1 px-4 py-3 flex items-center justify-center bg-brand-secondary text-white font-semibold text-sm rounded whitespace-nowrap"
        >
          <span>GET QUOTE</span>
        </a>
      </div>
    </div>
  );
};

export default StickyActionBar;
