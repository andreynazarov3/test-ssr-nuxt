import cities from './cities';
export const state = () => {
	return {
		ipData: null,
		cities
	};
};

export const mutations = {
	SET_IP_DATA(state, payload) {
		state.ipData = payload;
	}
};

export const actions = {
	async nuxtServerInit({ commit }, { req }) {
		const ipData = await this.$axios.$get('http://ip-api.com/json');
		commit('SET_IP_DATA', ipData);
	}
};
