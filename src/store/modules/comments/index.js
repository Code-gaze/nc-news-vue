import {getCommentsByArticle, updateComment, addComment, deleteComment} from '../../../components/api';

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
    },
    ADD_COMMENT (state, payload){
        state.comments = [payload, ...state.comments]
    },
    DELETE_COMMENT (state, payload) {
        state.comments= state.comments.filter(comment=>comment.comment_id !== payload)
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
         .catch(error=>commit('UPDATE_COMMENT', {id, change, error}))
     },
     addComment({commit}, {id, newComment, user}){
        addComment(id, {username:user, body:newComment})
          .then(comment=>commit('ADD_COMMENT', comment))
          .catch(error=>error)
     },
     deleteComment({commit}, id){
         deleteComment(id)
         .then(()=>commit('DELETE_COMMENT', id))
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