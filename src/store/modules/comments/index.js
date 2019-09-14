import {
  getCommentsByArticle,
  updateComment,
  addComment,
  deleteComment,
  getCommentsByUser
} from "../../../components/api";

const getComments = {
  Article: getCommentsByArticle,
  Author: getCommentsByUser
};

const state = {
  comments: []
};

const mutations = {
  GET_COMMENTS(state, payload) {
    state.comments = payload;
  },
  ADD_COMMENT(state, payload) {
    state.comments = [payload, ...state.comments];
  },
  DELETE_COMMENT(state, payload) {
    state.comments = state.comments.filter(
      comment => comment.comment_id !== payload
    );
  }
};

const actions = {
  getComments({ commit }, { id, sort_by, order, belongTo }) {
    getComments[belongTo](id, sort_by, order)
      .then(comments => commit("GET_COMMENTS", comments))
      .catch(error => error);
  },
  updateComment(context, { id, change }) {
    return updateComment(id, {
      inc_votes: change
    });
  },
  addComment({ commit }, { id, newComment, user }) {
    addComment(id, {
      username: user,
      body: newComment
    })
      .then(comment => commit("ADD_COMMENT", comment))
      .catch(error => error);
  },
  deleteComment({ commit }, id) {
    deleteComment(id)
      .then(() => commit("DELETE_COMMENT", id))
      .catch(error => error);
  }
};

const getters = {
  comments: state => state.comments
};

const commentsModule = {
  // namespaced: true,
  state,
  mutations,
  actions,
  getters
};

export default commentsModule;
