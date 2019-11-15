import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import myCar from "./myCar"
export default new Vuex.Store({
  modules: {
    myCar
  }
})
