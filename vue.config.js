module.exports = {
	configureWebpack: config => {
		config.entry.app = './assets/main.js';
		console.log(config);
		if (process.env.NODE_ENV === 'production') {
			// изменение конфигурации для production...
		} else {
			// изменения для разработки...
		}
	}
}