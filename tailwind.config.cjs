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
