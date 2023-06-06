module.exports = {
  content: [
    '/Users/laqueel/Library/CloudStorage/OneDrive-Caterpillar/laqueel/rails/Spina/app/views/**/*.*',
'/Users/laqueel/Library/CloudStorage/OneDrive-Caterpillar/laqueel/rails/Spina/app/components/**/*.*',
'/Users/laqueel/Library/CloudStorage/OneDrive-Caterpillar/laqueel/rails/Spina/app/helpers/**/*.*',
'/Users/laqueel/Library/CloudStorage/OneDrive-Caterpillar/laqueel/rails/Spina/app/assets/javascripts/**/*.js',
'/Users/laqueel/Library/CloudStorage/OneDrive-Caterpillar/laqueel/rails/Spina/app/**/application.tailwind.css'
  ],
  theme: {
    fontFamily: {
      body: ['Metropolis'],
      mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace']
    },
    extend: {
      colors: {
        spina: {
          light: '#797ab8',
          DEFAULT: '#6865b4',
          dark: '#3a3a70'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
	require('@tailwindcss/aspect-ratio'),
	require('@tailwindcss/typography')
  ]
}
