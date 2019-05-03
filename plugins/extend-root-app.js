function extend(app, mixin) {
	if (!app.mixins) {
		app.mixins = [];
	}
	app.mixins.push(mixin);
}
export default function({ app }) {
	extend(app, {
		mounted() {
			const localStorageLocale = localStorage.getItem('locale');
			if (localStorageLocale) {
				this.$router.push(this.switchLocalePath(localStorageLocale));
				return;
			}
			switch (this.$store.state.ipData.countryCode) {
				case 'DE' || 'AT':
					this.$router.push(this.switchLocalePath('de'));
					break;
				case 'RU' || 'UA':
					this.$router.push(this.switchLocalePath('ru'));
					break;
				default:
					break;
			}
		}
	});
}
