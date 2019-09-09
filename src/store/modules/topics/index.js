import {getTopics} from '../../../components/api';

const state = {
    topics: [],
    loading: false,
    error: ''
};

const mutations ={
    GET_TOPICS (state, payload){
        state.topics = payload;
        state.loading = false;
    },
    LOADING (state){
        state.loading = true
    },
    HANDLE_ERROR (state, payload) {
        state.error=payload;
        state.loading=false;
    }
};

const actions ={
    getTopics ({commit}) {
        commit('LOADING');
        getTopics()
        .then(topics=>commit('GET_TOPICS', topics))
        .catch(error=>commit('HANDLE_ERROR', error))
    }
};

const getters = {
    topics:state=>state.topics,
    loading:state=>state.loading,
    error: state=>state.error
};

const topicsModule = {
    // namespaced: true,
    state,
    mutations,
    actions,
    getters
}

export default topicsModule;