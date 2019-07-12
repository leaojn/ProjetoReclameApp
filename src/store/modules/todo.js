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
        apps: {},
        nameApps: ['teste'],
        loading: false,
    },
    mutations: {
        STATE_ADD_URL(state, photo) {
            state.isAuthenticated = true;
            state.photoUrl = photo;
        },
        INIT_LOADING(state){
            state.loading = true
        },
        FINISH_LOADING(state){
            state.loading = false
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
                    // console.log(responsehttps://reclametaxi.herokuapp.com/app/)
                    state.apps = response.data;
                })
                .catch(error => {
                    alert(error.response.status);
                });
        },
        STATE_POST_REPORT(state, reclamacao, dispatch) {
         
            axios.post("http://localhost:8000/reclamacao/", { 
                auth: {
                    username: "admin@admin.com",
                    password: "Informatica"
                },
                headers: { "Access-Control-Allow-Origin": "*" },
                data: reclamacao },).then(
                (response => {
                    console.log(response.data.message)

                })
            ).catch(error => {
                console.log(error.response.data);
            });
        }


    },
    getters: {
        getPicture: (state) => { return state.user },
        photoUrl: (state) => { return state.photoUrl },
        autenticated: state => state.isAuthenticated,
        getUserLogged: state => state.user,
        getUid: state => state.uid,
        getApps: state => state.apps,
        getNameapps: state => {
            return state.apps;
        },
        apps(state) {
            return state.apps
        },
        loading(state){
            return state.loading
        }

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
        GET_APP({ commit }) {
            commit('STATE_GET_APP')
        },
        initLoading({commit}){
            commit('INIT_LOADING')
        },
        finishLoading({commit}){
            commit('FINISH_LOADING')
        },
        POST_RECLAMACAO({commit,state,dispatch}, reclamacao) {

            dispatch('initLoading')     
            console.log(state.loading)
            commit("STATE_POST_REPORT", reclamacao)
            dispatch('finishLoading')   
            console.log(state.loading)
  


        }


    }
}