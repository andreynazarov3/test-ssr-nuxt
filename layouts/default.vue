<template>
	<div>
		<header>
			<div v-if="$store.state.ipData">
				{{ $store.state.ipData.country }}
				{{ $store.state.ipData.query }}
			</div>
			<div v-else>
				Skipped IP fetch (faster page load)
			</div>
			<div>|</div>
			<div>
				<select @change="switchLoc">
					<option
						v-for="locale in availableLocales"
						:key="locale.code"
						:value="locale.code"
						class="lang"
						:class="{ active: locale.code === $i18n.locale }"
						:selected="locale.code === $i18n.locale"
						>{{ locale.name }}</option
					>
				</select>
			</div>
		</header>
		<nuxt />
	</div>
</template>
<script>
export default {
	computed: {
		availableLocales() {
			return this.$i18n.locales;
		}
	},
	methods: {
		switchLoc(e) {
			// eslint-disable-next-line no-console
			console.log(e);
			const locale = e.target.value;
			localStorage.setItem('locale', locale);
			this.$router.push(this.switchLocalePath(locale));
		}
	}
};
</script>

<style>
header {
	display: flex;
}
header div {
	padding: 5px;
}
.lang {
	cursor: pointer;
	display: inline-block;
	margin: 0 4px;
	text-decoration: none;
}
.lang.active {
	font-weight: bold;
}
.lang:hover {
	text-decoration: underline;
}
</style>
