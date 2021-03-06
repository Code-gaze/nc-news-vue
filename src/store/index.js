import Vue from 'vue';
import Vuex from 'vuex';
import topics from './modules/topics';
import articles from './modules/articles';
import article from './modules/article';
import comments from './modules/comments';
import user from './modules/user';


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    topics,
    articles,
    article,
    comments,
    user,
  }
});