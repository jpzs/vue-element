import Vuex from 'vuex'
import notification from './modules/notification'

export default function (Vue) {
  Vue.use(Vuex)
  return new Vuex.Store({
    modules: {
      notification
    }
  })
}
