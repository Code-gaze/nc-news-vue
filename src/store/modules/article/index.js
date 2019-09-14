import { getArticle, updateArticle } from "../../../components/api";

const state = {
  article: {}
};

const mutations = {
  GET_ARTICLE(state, payload) {
    state.article = payload;
  }
};

const actions = {
  getArticle({ commit }, id) {
    getArticle(id)
      .then(article => commit("GET_ARTICLE", article))
      .catch(error => error);
  },

  //return a promise so in the method can handle the error to correct optimistic response
  updateArticle(context, { id, change }) {
    return updateArticle(id, { inc_votes: change });
  }
};

const getters = {
  article: state => state.article
};

const articleModule = {
  // namespaced: true,
  state,
  mutations,
  actions,
  getters
};

export default articleModule;
