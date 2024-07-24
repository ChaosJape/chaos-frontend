// router/index.js
import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            activeMenu: localStorage.getItem('activeMenu') || '/home',
        };
    },
    mutations: {
        setActiveMenu(state, menu) {
            state.activeMenu = menu;
            localStorage.setItem('activeMenu', menu);
        },
    },
    actions: {
        updateActiveMenu({ commit }, menu) {
            commit('setActiveMenu', menu);
        },
    },
});

export default store;
