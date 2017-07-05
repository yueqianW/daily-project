/**
 * Created by yueqian on 2017/3/28.
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    notes: [],
    activeNote: {},
    show: ''
};
const mutations = {
    INIT_STORE(state, data) {
        state.notes = data.notes;
        state.activeNote = data.activeNote;
        state.show = data.show;
    },
    NEW_NOTE(state) {
        let newNOTE = {
            id: +new Date(),
            title: '',
            content: '',
            favorite: false
        }
        state.notes.push(newNOTE);
        state.activeNote = newNOTE;
    },
    EDIT_NOTE(state,note){
    	state.activeNote=note;
    	for(let item of state.notes)
    }
};

export default new Vuex.store({
    state,
    mutations
});
