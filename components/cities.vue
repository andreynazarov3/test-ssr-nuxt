<template>
	<nav>
		<nuxt-link
			v-for="item in $store.state.cities"
			:key="item.id"
			:to="
				localePath({
					name: 'city-city',
					params: { city: item.slug }
				})
			"
			>{{ item[$i18n.locale].name }}</nuxt-link
		>
	</nav>
</template>
<style>
nav {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}
</style>
