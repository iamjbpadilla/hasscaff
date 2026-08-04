import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ShieldCheck, Upload, Phone, Clock, Loader2, AlertCircle } from 'lucide-react';
import { COMPANY_INFO } from '../../lib/constants';
import { services } from '../../data/services';

const australianMobile = (val: string) => {
  const digits = val.replace(/\s/g, '');
  return /^(04\d{8}|\+?614\d{8})$/.test(digits);
};

const quoteSchema = z.object({
  service: z.string().min(1, 'Please select a service'),
  location: z.string().min(2, 'Enter a project location or suburb'),
  postcode: z
    .string()
    .optional()
    .refine((val) => !val || /^\d{4}$/.test(val), {
      message: 'Enter a 4-digit postcode',
    }),
  phone: z
    .string()
    .min(1, 'Enter your phone number')
    .refine(australianMobile, {
      message: 'Enter a valid Australian mobile (e.g. 0412 345 678)',
    }),
  plans: z.any().optional(),
  website: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

const QuoteForm: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      service: '',
      location: '',
      postcode: '',
      phone: '',
      website: '',
    },
  });

  const onSubmit = async (data: QuoteFormData) => {
    if (data.website) {
      setFormSubmitted(true);
      return;
    }
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setFormSubmitted(true);
    reset();
  };

  return (
    <div
      id="quote"
      className="border-2 rounded-2xl p-6 bg-white border-gray-200 shadow-xl dark:bg-gray-900 dark:border-gray-800"
    >
      {!formSubmitted && (
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-4 h-4 text-brand-primary" />
            <span className="text-sm font-semibold text-brand-primary">2-Hour Response Guaranteed</span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Get Your Free Quote</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">We will call you back with a detailed quote</p>
        </div>
      )}

      {formSubmitted ? (
        <div className="text-center py-10">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <ShieldCheck className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Request Received!</h3>
          <p className="text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Thanks for reaching out. Our team will call you back within 2 hours with your personalized quote.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 mb-6">
            <p className="text-base text-gray-600 dark:text-gray-400 mb-3">Need immediate assistance?</p>
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
              className="flex items-center justify-center gap-2 text-brand-primary font-bold text-lg"
            >
              <Phone className="w-5 h-5" />
              <span>Call {COMPANY_INFO.phone}</span>
            </a>
          </div>
          <button
            onClick={() => setFormSubmitted(false)}
            className="text-base text-brand-primary font-bold hover:underline"
          >
            Submit another request
          </button>
        </div>
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Honeypot */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website">Do not fill this field</label>
            <input id="website" type="text" tabIndex={-1} {...register('website')} autoComplete="off" />
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
              What do you need?
            </label>
            <select
              id="service"
              className={`w-full px-4 py-2.5 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent bg-white text-gray-900 dark:bg-gray-800 dark:text-white transition-all text-sm ${
                errors.service ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
              }`}
              {...register('service')}
            >
              <option value="">Select a service</option>
              {services.map((s) => (
                <option key={s.id} value={s.slug}>
                  {s.title}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.service.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
              Where is the project?
            </label>
            <input
              id="location"
              type="text"
              placeholder="e.g. Brisbane South / 4000"
              className={`w-full px-4 py-2.5 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent bg-white text-gray-900 dark:bg-gray-800 dark:text-white transition-all text-sm ${
                errors.location ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
              }`}
              {...register('location')}
            />
            {errors.location && (
              <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.location.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="postcode" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
              Postcode
            </label>
            <input
              id="postcode"
              type="text"
              inputMode="numeric"
              maxLength={4}
              placeholder="4000"
              className={`w-full px-4 py-2.5 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent bg-white text-gray-900 dark:bg-gray-800 dark:text-white transition-all text-sm ${
                errors.postcode ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
              }`}
              {...register('postcode')}
            />
            {errors.postcode && (
              <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.postcode.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
              Your mobile number
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="04XX XXX XXX"
              className={`w-full px-4 py-2.5 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent bg-white text-gray-900 dark:bg-gray-800 dark:text-white transition-all text-sm ${
                errors.phone ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
              }`}
              {...register('phone')}
            />
            {errors.phone && (
              <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Attach plans (optional)</label>
            <label
              htmlFor="plans"
              className="border-2 border-dashed rounded-2xl flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-brand-primary hover:bg-brand-primary/5 transition-all duration-300 px-4 py-4 bg-white border-gray-300 dark:bg-gray-800 dark:border-gray-700"
            >
              <Upload className="w-8 h-8 text-gray-400" />
              <span className="text-sm text-gray-500 text-center">Click to upload PDF, PNG, or JPG</span>
              <span className="text-xs text-gray-400">Max 10MB</span>
              <input id="plans" type="file" accept=".pdf,.png,.jpg,.jpeg" className="sr-only" {...register('plans')} />
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-3 bg-brand-primary text-white font-bold text-base rounded-full hover:bg-brand-secondary transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              'Get My Free Quote'
            )}
          </button>

          <div className="flex items-center justify-center gap-2 text-xs text-gray-500 pt-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>QBCC Licensed • {COMPANY_INFO.insurance}M Insured</span>
          </div>
        </form>
      )}
    </div>
  );
};

export default QuoteForm;
