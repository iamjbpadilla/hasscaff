import React from 'react';
import { LucideIcon } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  description?: string;
  badge?: {
    text: string;
    icon: LucideIcon;
  };
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, badge }) => {
  return (
    <section className="py-14 md:py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/50 dark:to-brand-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl">
          {badge && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-6">
              <badge.icon className="w-4 h-4 text-brand-primary" />
              <span className="text-sm font-semibold text-brand-primary">{badge.text}</span>
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight leading-tight">{title}</h1>
          {description && (
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
