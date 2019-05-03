import pkg from './package';

export default {
	mode: 'universal',

	/*
	 ** Headers of the page
	 */
	head: {
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			},
			{
				hid: 'description',
				name: 'description',
				content: pkg.description
			}
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
	},

	/*
	 ** Customize the progress-bar color
	 */
	loading: { color: '#fff' },

	/*
	 ** Global CSS
	 */
	css: [],

	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: ['@/plugins/extend-root-app.js'],

	/*
	 ** Nuxt.js modules
	 */
	modules: [
		'@nuxtjs/axios',
		[
			'nuxt-i18n',
			{
				locales: [
					{
						name: 'English',
						code: 'en',
						iso: 'en-US'
					},
					{
						name: 'Deutsch',
						code: 'de',
						iso: 'de-DE'
					},
					{
						name: 'Русский',
						code: 'ru',
						iso: 'ru-RU'
					}
				],
				defaultLocale: 'en',
				vueI18n: {
					fallbackLocale: 'en',
					messages: {
						en: {
							Cities: 'Cities'
						},
						de: {
							Cities: 'Städte'
						},
						ru: {
							Cities: 'Города'
						}
					}
				}
			}
		]
	],
	/*
	 ** Axios module configuration
	 */
	axios: {
		// See https://github.com/nuxt-community/axios-module#options
	},

	/*
	 ** Build configuration
	 */
	build: {
		/*
		 ** You can extend webpack config here
		 */
		extend(config, ctx) {
			// Run ESLint on save
			if (ctx.isDev && ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				});
			}
		}
	}
};
