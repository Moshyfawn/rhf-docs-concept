import { setup } from 'twind';

setup({
  theme: {
    fontFamily: {
      primary: ['Inter', 'sans-serif'],
    },
    colors: {
      primary: '#ec5990',
      background: '#081229',
      text: '#ffffff',
      border: '#4f6294',
      surface: '#0f111b',
    },
  },
  preflight: {
    '@import': `url('https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700;900&display=swap')`,
  },
});
