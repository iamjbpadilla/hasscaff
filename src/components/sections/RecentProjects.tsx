import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { locations } from '../../data/locations';

const projects = [
  { title: 'CBD Commercial Fit-Out', location: 'Brisbane CBD', type: 'Commercial', date: 'June 2026', image: 'https://picsum.photos/seed/cbd-commercial/800/450' },
  { title: 'Coastal Home Renovation', location: 'Mooloolaba', type: 'Residential', date: 'May 2026', image: 'https://picsum.photos/seed/coastal-home/800/450' },
  { title: 'High-Rise Apartment Access', location: 'Surfers Paradise', type: 'Commercial', date: 'April 2026', image: 'https://picsum.photos/seed/high-rise/800/450' },
  { title: 'Heritage Roof Restoration', location: 'Paddington', type: 'Residential', date: 'March 2026', image: 'https://picsum.photos/seed/heritage-roof/800/450' },
];

const RecentProjects: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-brand-dark bg-pattern-grid">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 md:mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight">Recent Projects</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
              A snapshot of the work we have delivered across South East Queensland
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-brand-primary font-bold hover:gap-3 transition-all"
          >
            Start your project <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {projects.map((project, index) => (
            <Link
              to="/contact"
              key={index}
              className="group border-2 rounded-2xl overflow-hidden bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800 hover:border-brand-primary transition-all duration-300"
            >
              <div className="aspect-video bg-[#1E242B] border border-[#28323C] relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-gray-900/90 rounded-full text-xs font-bold text-brand-primary font-mono">
                  {project.type}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm font-mono text-brand-primary mb-2">
                  <MapPin className="w-4 h-4" />
                  {project.location}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-brand-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm font-mono text-gray-500 dark:text-gray-500">{project.date}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {locations.map((loc) => (
            <a
              key={loc.id}
              href={loc.route}
              className="px-4 py-2 border-2 border-gray-200 dark:border-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-brand-primary hover:text-brand-primary transition-all"
            >
              Projects in {loc.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
