import { getArticles } from "../../../components/api";

const state = {
  articles: []
};

const mutations = {
  GET_ARTICLES(state, payload) {
    state.articles = payload;
  }
};

const actions = {
  getArticles({ commit }, { topic, author, sort_by, order, limit, p }) {
    return getArticles(topic, author, sort_by, order, limit, +p)
      .then(articles => commit("GET_ARTICLES", articles.articles))
  }
};

const getters = {
  articles: state => state.articles
};

const articlesModule = {
  // namespaced: true,
  state,
  mutations,
  actions,
  getters
};

export default articlesModule;
