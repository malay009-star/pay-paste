/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: '576px',
          md: '768px',
          lg: '992px',
          xl: '1200px',
          '2xl': '1400px',
        },
      },
      colors: {
        primary: '#0fc3e8',
        secondary: '#403D3D',
        success: '#65E9CE',
        danger: '#FF7272',
        darkBlue: '#013f6e',
        lightBlue: '#e7f9fd',
        lightGreen: 'f0fdfa',
        dark: '#403d3d'
      },
      fontSize: {
        md: '15px'
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          paddingRight: '25px',
          paddingLeft: '25px',
          '@screen sm': {
            maxWidth: '540px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '960px',
          },
          '@screen xl': {
            maxWidth: '1140px',
          },
          '@screen 2xl': {
            maxWidth: '1320px',
          },
        },
      })
    },
  ],

}

