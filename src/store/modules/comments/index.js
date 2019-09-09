import {getCommentsByArticle, updateComment} from '../../../components/api';

const state = {
    comments: [],
};

const mutations ={
    GET_COMMENTS (state, payload){
        state.comments = payload;
    },
    UPDATE_COMMENT (state, payload){
        const comment=state.comments.find(comment=>comment.commment_id === payload.id)
        comment.votes -= payload.change
    }
};

const actions ={
    getComments ({commit}, id) {
        getCommentsByArticle(id)
        .then(comments=>commit('GET_COMMENTS', comments))
        .catch(error=>error)
    },
    updateComment({commit}, {id, change}){
        updateComment(id, { inc_votes: change })
         .catch(error=>commit('UPDATE_COMMENT', {id, change}))
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