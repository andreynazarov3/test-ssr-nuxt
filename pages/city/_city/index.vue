<template>
	<div>
		<nuxt-link class="back" :to="localePath({ name: 'index' })">
			← {{ $t('Back') }}
		</nuxt-link>
		<h1>{{ getCityName() }}</h1>
	</div>
</template>
<script>
export default {
	head() {
		return {
			title: this.getCityName()
		};
	},
	methods: {
		getCity() {
			return this.$store.state.cities.find(
				item => item.slug === this.$route.params.city
			);
		},
		getCityName() {
			return this.getCity()[this.$i18n.locale].name;
		}
	}
};
</script>
<style>
.back {
	text-decoration: none;
}
.back:hover {
	text-decoration: underline;
}
</style>
