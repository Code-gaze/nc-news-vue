import {getArticle, updateArticle} from '../../../components/api';

const state = {
    article: {},
};

const mutations ={
    GET_ARTICLE (state, payload){
        state.article = payload;
    },
    UPDATE_ARTICLE (state, payload){
        state.article.votes -= payload
    }
};

const actions ={
    getArticle ({commit}, id) {
        getArticle(id)
        .then(article=>commit('GET_ARTICLE', article))
        .catch(error=>error)
    },
    updateArticle({commit}, {id, change}){
       updateArticle(id, { inc_votes: change })
        .catch(error=>commit('UPDATE_ARTICLE', change))
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