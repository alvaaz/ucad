module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      background: {
        'hero-pattern': "url('https://images.pexels.com/photos/1233532/pexels-photo-1233532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'), #6DB3F2",
      },
      animation: {
        'infinite-loop': 'infiniteLoop 3s linear infinite',
      },
      keyframes: {
        infiniteLoop: {
          '0%': { left: 0 },
          '100%': { left: '-980px' }
        },
        opacityLoop: {
          '0%': { opacity: 1 },
          '45%': { opacity: 1 },
          '50%': { opacity: 0 },
          '95%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        heroImage: {
          '0%': { backgroundImage: "url('/images/1.jpg')" },
          '24%': { backgroundImage: "url('/images/1.jpg')" },
          '25%': { backgroundImage: "url('/images/11.jpg')" },
          '49%': { backgroundImage: "url('/images/11.jpg')" },
          '50%': { backgroundImage: "url('/images/21.jpg')" },
          '74%': { backgroundImage: "url('/images/21.jpg')" },
          '75%': { backgroundImage: "url('/images/27.jpg')" },
          '99%': { backgroundImage: "url('/images/27.jpg')" },
          '100%': { backgroundImage: "url('/images/1.jpg')" },
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
