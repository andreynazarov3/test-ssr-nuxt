<template>
	<div>
		<cities />
	</div>
</template>
<script>
import cities from '@/components/cities';
export default {
	head() {
		return {
			title: this.$t('Cities')
		};
	},
	components: {
		cities
	}
};
</script>
