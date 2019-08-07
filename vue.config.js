module.exports = {
	publicPath: 'http://localhost:8080',
	configureWebpack: {
		entry: {
			app: './assets/main.js'
		},
		resolve: {
			extensions: ['.js', '.vue', '.json'],
			alias: {
				'vue$': 'vue/dist/vue.esm.js',
			}
		}
	},
	// configureWebpack: config => {
	// 	config.entry.app = './assets/main.js';
	// 	console.log(config);
	// 	if (process.env.NODE_ENV === 'production') {
	// 		// изменение конфигурации для production...
	// 	} else {
	// 		// изменения для разработки...
	// 	}
	// },
	devServer: {
		port: 8080,
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	},
}