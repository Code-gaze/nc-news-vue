import {getUser} from '../../../components/api';

const state = {
    user: 'jessjelly',
    author:{},
};

const mutations ={
    UPDATE_USER (state, payload){
        state.user = payload
    },
    GET_AUTHOR (state, payload){
        state.author = payload
    }
};

const actions ={
    updateUser({commit}, payload){
       commit('UPDATE_USER', payload)
    },
    getAuthor({commit}, username){
        getUser(username)
         .then(author=>commit('GET_AUTHOR', author))
     },
};

const getters = {
    user:state=>state.user,
    author:state=>state.author,
};

const userModule = {
    // namespaced: true,
    state,
    mutations,
    actions,
    getters
}

export default userModule;