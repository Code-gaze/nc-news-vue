import {} from '../../../components/api';

const state = {
    user: {},
};

const mutations ={
    GET_user (state, payload){
        state.user = payload;
    },
    UPDATE_user (state, payload){
        state.user.votes -= payload
    }
};

const actions ={
    getuser ({commit}, id) {
        getuser(id)
        .then(user=>commit('GET_user', user))
        .catch(error=>error)
    },
    updateuser({commit}, {id, change}){
       updateuser(id, { inc_votes: change })
        .catch(error=>commit('UPDATE_user', change))
    }
};

const getters = {
    user:state=>state.user,
};

const userModule = {
    // namespaced: true,
    state,
    mutations,
    actions,
    getters
}

export default userModule;