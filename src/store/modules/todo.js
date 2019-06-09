import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default{
    state:{
        user: '',
        isAuthenticated: false,
        photoUrl: ''
    },
    mutations:{
        STATE_ADD_URL(state, photo){
            state.isAuthenticated = true;
            state.photoUrl = photo;
        },
        STATE_LOGOUT_USER(state){
            state.autenticated = true;
            state.photoUrl = "";
        }
    },
    getters: {
        getPicture:(state)=>{return state.user},
        photoUrl:(state)=>{return state.photoUrl},
        autenticated: state => state.isAuthenticated

    },
    actions:{
        ADD_URL(context, photo){
            context.commit('STATE_ADD_URL',photo);
        },
        LOGOUT_USER({commit}){
            commit('STATE_LOGOUT_USER')
    },
    
    }
}