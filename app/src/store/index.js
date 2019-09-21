import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


var defaultCity='北京';
defaultCity = localStorage.city;
const state={
    city:defaultCity,
};

const mutations={
    changeCity(state,name){
        state.city=name;
        localStorage.city=name;
    }
}
export default new Vuex.Store({
    state,
    mutations
})