import {getTopics} from '../../../components/api';

const state = {
    topics: [],
    loading: false,
    error: ''
};

const mutations ={
    GET_TOPICS (state, payload){
        state.topics = payload;
    }
};

const actions ={
    getTopics ({commit}) {
        getTopics()
        .then(topics=>commit('GET_TOPICS', topics))
    }
};

const getters = {
    topics:state=>state.topics,
};

const topicsModule = {
    state,
    mutations,
    actions,
    getters
}

export default topicsModule;