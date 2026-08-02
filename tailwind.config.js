/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Brand Colors - Industrial construction theme
      colors: {
        brand: {
          primary: '#FF6B00', // Safety orange - construction industry standard
          secondary: '#E65100', // Darker orange for hover states
          accent: '#FFC107', // Construction yellow for highlights
          dark: '#1A1A1A', // Dark industrial background
          light: '#F8F9FA', // Light industrial surface
          breadcrumb: '#F5F5F7',
          breadcrumbDark: '#111827',
        },
        // Shadcn/ui style variables (optional, for future use)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      // Border Radius Design System - Sharper for industrial look
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
  // Theme Presets
  themes: {
    build001: {
      colors: {
        primary: '#FF6B00', // Safety orange - construction industry standard
        secondary: '#E65100', // Darker orange for hover states
        accent: '#FFC107', // Construction yellow for highlights
        background: '#FFFFFF',
        surface: '#F8F9FA',
        surfaceDark: '#1A1A1A',
        text: '#2D3748',
        textLight: '#718096',
        border: '#E2E8F0',
        borderDark: '#4A5568',
        success: '#48BB78',
        warning: '#ECC94B',
        danger: '#F56565',
      },
      borderRadius: {
        sm: '0.25rem', // Sharper corners for industrial look
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        full: '9999px',
      },
      spacing: {
        xs: '0.5rem',
        sm: '1rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '4rem',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      transitions: {
        default: '300ms',
        fast: '150ms',
        slow: '500ms',
      },
      shadows: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      },
    },
  },
}

/*
 * GLOBAL DESIGN SYSTEM - INDUSTRIAL CONSTRUCTION THEME
 * =====================================================
 * 
 * COLORS:
 * - brand-primary: #FF6B00 (Safety orange - construction industry standard)
 * - brand-secondary: #E65100 (Darker orange for hover states)
 * - brand-accent: #FFC107 (Construction yellow for highlights)
 * - brand-dark: #1A1A1A (Dark industrial background)
 * - brand-light: #F8F9FA (Light industrial surface)
 * 
 * BORDER RADIUS:
 * - rounded-2xl: Cards, main containers
 * - rounded-xl: Icon containers, inputs
 * - rounded-full: Buttons, circular elements
 * - Sharper corners for industrial aesthetic
 * 
 * ICON SIZES:
 * - w-6 h-6: Standard icons
 * - w-12 h-12: Icon containers
 * 
 * CARD DESIGN:
 * - border-2 (2px border)
 * - rounded-2xl (border radius)
 * - bg-white / dark:bg-gray-900 (background)
 * - border-gray-200 / dark:border-gray-800 (border color)
 * - hover:border-brand-primary (hover state)
 * - hover:shadow-xl (hover shadow)
 * - transition-all duration-300 (smooth transitions)
 * 
 * BUTTON DESIGN:
 * - rounded-full (fully rounded)
 * - bg-brand-primary (safety orange)
 * - hover:bg-brand-secondary (hover state)
 * - px-6 py-3 (padding)
 * - font-semibold (font weight)
 * 
 * SECTION SPACING:
 * - py-24 (vertical padding for sections)
 * - max-w-7xl mx-auto (max width with centering)
 * - px-6 lg:px-8 (horizontal padding)
 * 
 * TYPOGRAPHY:
 * - text-3xl md:text-4xl: Section headings
 * - text-lg: Subheadings and descriptions
 * - text-sm: Small text
 * - font-bold: Bold headings
 * - text-gray-900 / dark:text-white: Primary text
 * - text-gray-600 / dark:text-gray-400: Secondary text
 * - Inter font family for professional industrial look
 */
