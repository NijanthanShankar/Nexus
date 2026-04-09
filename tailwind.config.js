/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary:   '#7F5AF0',
        secondary: '#2CB67D',
        base:      '#16161A',
        surface:   '#242629',
        textMain:  '#FFFFFE',
        textMuted: '#94A1B2',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
      borderRadius: {
        clay: '20px',
      },
      boxShadow: {
        clay:       '8px 8px 20px rgba(0,0,0,0.5), -4px -4px 12px rgba(255,255,255,0.04)',
        'clay-lg':  '12px 12px 30px rgba(0,0,0,0.6), -6px -6px 20px rgba(255,255,255,0.05)',
        'clay-press':'2px 2px 8px rgba(0,0,0,0.6), -1px -1px 4px rgba(255,255,255,0.03)',
      },
    },
  },
  plugins: [],
}