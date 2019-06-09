export default {
	namespaced: true,
	state: {
		items: [
			// {
			// 	url: '/HomePage',
			// 	text: 'About Use'
			// },
			// {
			// 	url: '/HomePage',
			// 	text: 'Write Comment'
			// },
			{
				url: '/Comments',
				text: 'Comments'
			}
		]
	},
	getters: {
		items(state){
			return state.items;
		}
	}
};