import Vue                          from 'vue';
import Vuex                         from 'vuex';
import actions                      from './global/actions';
import getters                      from './global/getters';
import state                        from './global/state';
import mutations                    from './global/mutations';


Vue.use(Vuex);

let store = new Vuex.Store({
    actions,
    getters,
    mutations,
    state,
})
export default store;