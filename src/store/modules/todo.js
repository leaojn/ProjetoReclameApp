import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import { mapGetters } from "vuex";


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
        reporters_user: {}
    },
    mutations: {
        STATE_ADD_URL(state, photo) {
            state.isAuthenticated = true;
            state.photoUrl = photo;
        },
        INIT_LOADING(state) {
            state.loading = true
        },
        FINISH_LOADING(state) {
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
            axios.post('http://127.0.0.1:8000/user/login', {
                body: state.user.providerData[0]
            }).then(response => {
                console.log(response.data)
                state.uid = response.data.uid;
            }).catch(response=>{
                alert(response)
                console.log(response)
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

            axios.post("http://127.0.0.1:8000/reclamacao/", {
                auth: {
                    username: "admin@admin.com",
                    password: "Informatica"
                },
                headers: { "Access-Control-Allow-Origin": "*" },
                data: reclamacao
            }).then(
                (response => {
                    console.log(response.data.message)
                    this.$router.push('/success') 


                })
            ).catch(error => {
                console.log(error.response.data);
            });
        },
        STATE_GET_USER_REPORTS(state, uid) {




        },
        REPORTS(state, uid) {
            let id = uid
            // console.log(id)
            var url = "https://reclametaxi.herokuapp.com/reclamacao/?uid=" + id
            console.log(url)
            axios.get("https://reclametaxi.herokuapp.com/reclamacao/?uid=" + uid).then(response =>{
                console.log(response.data)
                state.reporters_user = response.data
            }).catch(response=>{
                state.reporters_user[uid] = 'vazio'
            })


        },


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
        loading(state) {
            return state.loading
        },
        reporters_user(state) {
            return state.reporters_user
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
        initLoading({ commit }) {
            commit('INIT_LOADING')
        },
        finishLoading({ commit }) {
            commit('FINISH_LOADING')
        },

        POST_RECLAMACAO({ commit, state, dispatch }, reclamacao) {

            dispatch('initLoading')
            commit("STATE_POST_REPORT", reclamacao)
            console.log(reclamacao)
            dispatch('finishLoading')



        },
        LIST_REPORTS({ commit, dispatch, getters, state }) {
            // console.log(state//)


        }


    }
}