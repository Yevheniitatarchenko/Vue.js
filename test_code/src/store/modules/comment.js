import Vue from 'vue';
export default {
	namespaced: true,
	state: {
		comments: [],
	},
	getters: {
		comments(state){
			return state.comments;
    },

    item: (state) => (id) => {
      return state.comments[id];
    }
	},
	mutations: {
		commentsState(state, response) {
      state.comments = response;
    }
	},
	actions: {
		getComments(store) {
      Vue.http.get('https://5cbef81d06a6810014c66193.mockapi.io/api/comments')
      .then((response) => {
        store.commit('commentsState', response.data);
        }, (error) => {
          console.log(error)
      	})
		},
		
		addComment({}, body) {
      Vue.http.post('https://5cbef81d06a6810014c66193.mockapi.io/api/comments', body)
      .then(function (body) {
        console.log(body);
      })
      .catch(function (error) {
        console.log(error);
      });
		},
		
		deleteComment({}, id) {
      Vue.http.delete(`https://5cbef81d06a6810014c66193.mockapi.io/api/comments/${id}`)
      .then(function (id) {
        console.log(id);
      })
			.catch(function (error) {
        console.log(error);
      });
		},

		editComment({}, id, body) {
      Vue.http.put(`https://5cbef81d06a6810014c66193.mockapi.io/api/comments/${id}`, body)
      .then(function (body) {
        console.log(body);
      })
			.catch(function (error) {
        console.log(error);
      });
    },



	}
}