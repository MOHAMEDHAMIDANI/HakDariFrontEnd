module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'min860': '820px',
        'min500': '500px',
        'min1100': '1200px',
      },
      fontSize: {
        headline: 'var(--font-size-base)',
        paragraph: 'var(--font-size-p)',
        small: 'var(--font-size-small)',
        smaller: 'var(--font-size-smaller)',
      },
      boxShadow: {
        'custom': '0px 2px 25px 0px rgba(0, 0, 0, 0.1)',
        'soft': '0px 2px 10px 0px rgba(0, 0, 0, 0.03)',
        'innertop': 'inset 0 20px 20px rgba(252, 252, 252, 1)',
        'bottom': 'inset 0 -20px 20px rgba(252, 252, 252, 1)',
      },
      colors: {
        primary: "#ff0000",
        secondary: "#00ff00",
        login: {
          "Primarytext": "#0C1421",
          "Secondarytext": "#313957",
          "Link": "#1E4AE9",
          "inputbg": "#F3F9FA",
          "labels": "#0f0f0f",
          "btn": "#162d3a",
          "charcoal": "#252525",
          "oceanGreen": "#294956",
          "silver": "#959cb5",
          "hr": "#cfdfe2",
          "btnText": "#ffffff",
        },
        Landingpages: {
          "bg-color": "#FCFCFC",
          "brand-primary": "#57B8FF",
          "brand-secondary": "#119BFF",
          "textPrimary": "#0F0F0F",
          "layer2": "#F3F9FA",
          "gray": "#C1C1C1",
          "card-color": "#FEFEFE",
          "dark-bleu": "#162D3A",
          "text-gray": "#252525",
          "lighter-bleu": "#80C9FF",
        },
        hero: {
          "tagbg": "rgb(137 239 255 / 80%)",
          "tagtext": "#1B426F",
          "ptext": "#162D3A",
        }
      },
      spacing: {},
      fontFamily: {
        "Poppins": ["poppins", "sans-serif"],
        "Urbanist": ["urbanist", "sans-serif"],
        "unbounded": ["unbounded", "sans-serif"]
      },

      height: {
        '100': '593px',
      },
    },
  },
  plugins: [],
};
