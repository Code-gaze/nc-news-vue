const state = {
    user: 'jessjelly',
};

const mutations ={
    UPDATE_USER (state, payload){
        state.user = payload
    }
};

const actions ={
    updateUser({commit}, payload){
       commit('UPDATE_USER', payload)
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