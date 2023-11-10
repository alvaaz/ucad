module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}', 'dist/index.html'],
	theme: {
		extend: {
      keyframes: {
        opacityLoop: {
          '0%': { opacity: 1 },
          '45%': { opacity: 1 },
          '50%': { opacity: 0 },
          '95%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        heroImage: {
          '0%': { backgroundImage: "url('/images/social/1.jpg')" },
          '24%': { backgroundImage: "url('/images/social/1.jpg')" },
          '25%': { backgroundImage: "url('/images/social/11.jpg')" },
          '49%': { backgroundImage: "url('/images/social/11.jpg')" },
          '50%': { backgroundImage: "url('/images/social/21.jpg')" },
          '74%': { backgroundImage: "url('/images/social/21.jpg')" },
          '75%': { backgroundImage: "url('/images/social/27.jpg')" },
          '99%': { backgroundImage: "url('/images/social/27.jpg')" },
          '100%': { backgroundImage: "url('/images/social/1.jpg')" },
        }
      }
    },
    fontFamily: {
      'title': ['Source Sans Pro', 'sans-serif'],
      'body': ['Inter', 'sans-serif']
    }
	},
	plugins: [],
};
