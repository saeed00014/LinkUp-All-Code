/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'sm': '320px',
  
        'md': '640px',
  
        'lg': '960px',
  
        'xl': '1280px',
  
        '2xl': '1728px',
      },
      
      colors: {
        'bg-hover': '#e5e7eb',
        'bg-theme-body': 'rgb(247, 247, 247)',
        'bg-theme-darker': 'rgb(235, 235, 235)',
        'text-error': 'rgb(252, 3, 3)'
      },

      boxShadow: {
        'dark': '0px 0px 10px 1px rgba(0, 0, 0, 0.3)',
        'light': '0px 0px 10px 1px rgba(100, 100, 100, 0.2)'
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      
      keyframes: {
        loading: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.5' },
        }
      },
      
      animation: {
        'loadingg': 'loading 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
