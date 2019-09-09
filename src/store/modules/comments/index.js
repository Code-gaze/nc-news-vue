import {getCommentsByArticle} from '../../../components/api';

const state = {
    comments: [],
};

const mutations ={
    GET_COMMENTS (state, payload){
        state.comments = payload;
    },
};

const actions ={
    getComments ({commit}, id) {
        getCommentsByArticle(id)
        .then(comments=>commit('GET_COMMENTS', comments))
        .catch(error=>error)
    }
};

const getters = {
    comments:state=>state.comments,
};

const commentsModule = {
    // namespaced: true,
    state,
    mutations,
    actions,
    getters
}

export default commentsModule;