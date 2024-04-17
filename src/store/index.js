import axios from 'axios';
import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: []
  },

  getters: {
  },

  mutations: {
    storeTodos(state, payload) {
      state.todos = payload;
    },

    storeTodo(state, payload) {
      state.todos.unshift(payload);
    },

    updateStateTodos(state, payload) {
      const index = state.todos.findIndex(todo => todo.id === payload.id);

      if (index >= 0) {
        state.todos.splice(index, 1, payload)
      }
    },

    updateDeleteStateTodos(state, id) {
      const index = state.todos.findIndex(todo => todo.id === id);

      if (index >= 0) {
        state.todos.splice(index, 1)
      }
    },

  },

  actions: {
    getTodos({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          return axios.get('http://localhost:3000/todos')
            .then((response) => {
              commit('storeTodos', response.data);
              resolve();
            })
        }, 300);
      })
    },

    addTodo({ commit }, data) {
      return axios.post('http://localhost:3000/todos', data).then((response) => {
        commit('storeTodo', response.data);
      });
    },

    updateTodo({ commit }, payload) {
      return axios.put(`http://localhost:3000/todos/${payload.id}`, payload)
        .then((response) => {
          commit('updateStateTodos', response.data);
        });
    },

    deleteTodo({ commit }, id) {
      return axios.delete(`http://localhost:3000/todos/${id}`)
        .then(() => {
          commit('updateDeleteStateTodos', id);
        });
    },
  },

  modules: {
  }
})
