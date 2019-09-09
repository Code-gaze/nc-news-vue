import {getArticle} from '../../../components/api';

const state = {
    article: {},
};

const mutations ={
    GET_ARTICLE (state, payload){
        state.article = payload;
    },
};

const actions ={
    getArticle ({commit}, id) {
        getArticle(id)
        .then(article=>commit('GET_ARTICLE', article))
        .catch(error=>error)
    }
};

const getters = {
    article:state=>state.article,
};

const articleModule = {
    // namespaced: true,
    state,
    mutations,
    actions,
    getters
}

export default articleModule;