import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";


Vue.use(Vuex)

export default {
    state: {
        isAuthenticated: false,
        photoUrl: '',
        user: {},
        uid: '',
        apps:{}
    },
    mutations: {
        STATE_ADD_URL(state, photo) {
            state.isAuthenticated = true;
            state.photoUrl = photo;
        },
        STATE_LOGOUT_USER(state) {
            state.autenticated = true;
            state.photoUrl = "";
        },
        STATE_USER_DATE(state, user) {
            state.user = user;
        },
        STATE_POST_USER(state) {
            axios.post('https://reclametaxi.herokuapp.com/user/login', {
                body: state.user.providerData[0]
            }).then(response => {
                state.uid = response.data.uid;
            })
        },
        STATE_GET_APP(state) {
            axios
            .get("https://reclametaxi.herokuapp.com/app/")
            .then(response => {
              state.apps = response.data;
            })
            .catch(error => {
              alert(error.response.status);
            });
        }


    },
    getters: {
        getPicture: (state) => { return state.user },
        photoUrl: (state) => { return state.photoUrl },
        autenticated: state => state.isAuthenticated,
        getUserLogged: state => state.user,
        getUid: state => state.uid,
        getApps: state => state.apps

    },
    actions: {
        ADD_URL(context, photo) {
            context.commit('STATE_ADD_URL', photo);
        },
        LOGOUT_USER({ commit }) {
            commit('STATE_LOGOUT_USER')
        },
        USER_DATA(context, user) {
            context.commit('STATE_USER_DATE', user)
        },
        POST_USER(context) {
            context.commit('STATE_POST_USER')
        },
        GET_APP(context){
            context.commit('STATE_GET_APP')
        }


    }
}