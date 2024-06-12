/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
      boxShadow: {
        'gradient-border': `
          0px -1px 0px 0px rgba(255, 255, 255, 0.2),
          -1px 0px 0px 0px rgba(255, 255, 255, 0.1),
          1px 0px 0px 0px rgba(255, 255, 255, 0.1)
        `,
      },
      backgroundImage: {
        'star': "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2215%22 viewBox=%220 0 16 15%22><path d=%22M8.26787 0.466452L8.87459 2.83093C9.31182 4.53505 10.6726 5.86537 12.4158 6.2928L14.8345 6.88592C15.4707 7.042 15.4707 7.92648 14.8345 8.08257L12.4158 8.67569C10.6726 9.10312 9.31182 10.4334 8.87459 12.1376L8.26787 14.502C8.10821 15.124 7.20345 15.124 7.04379 14.502L6.43707 12.1376C5.99984 10.4334 4.63902 9.10312 2.89583 8.67569L0.477146 8.08257C-0.159049 7.92648 -0.159049 7.042 0.477146 6.88592L2.89583 6.2928C4.63902 5.86537 5.99984 4.53505 6.43707 2.83093L7.04379 0.466452C7.20345 -0.155484 8.10821 -0.155484 8.26787 0.466452Z%22 fill=%22white%22/></svg>')",
        'arrow': "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2214%22 viewBox=%220 0 40 14%22 fill=%22none%22><path d=%22M37.452 7L1.6667 7%22 stroke=%22white%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22/><path d=%22M33 1L39 7L33 13%22 stroke=%22white%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22/></svg>')"
      }
    },
  },
  plugins: [],
}




