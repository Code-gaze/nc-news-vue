<template>
    <div >
        <ArticleItem v-for='article in articles' :key='article.article_id' v-bind='article'/>
    </div>
</template>

<script>
import ArticleItem from './ArticleItem';
import { mapGetters } from 'vuex';

export default {
    name: 'ArticleList',
    components: {
        ArticleItem,
    },
    props:['topic'],
    computed:{
        articles(){
          return this.$store.getters.articles
          .filter(article=>this.topic===undefined?true:(article.topic === this.topic))
        }
    },
    created(){
        this.$store.dispatch('getArticles');
    }
}
</script>