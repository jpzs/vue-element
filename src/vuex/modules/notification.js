import api from '../../api/notification'

const state = {
  list: []
}

const actions = {
  getAllNotification ({ commit, state }) {
    api.getAllNotification().then(data => {
      commit('getAllNotification', data)
    })
  }
}

const mutations = {
  getAllNotification (state, data) {
    state.list = data.data
  },
  toggleAll (state, { done }) {
    state.list.forEach((todo) => {
      todo.done = done
    }, this)
  }
}

const getters = {
  notifications: state => state.list
}

export default {
  actions,
  mutations,
  getters,
  state
}
