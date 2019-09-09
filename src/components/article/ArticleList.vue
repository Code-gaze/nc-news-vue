<template>
    <div >
        <ArticleItem v-for='article in articles' :key='article.article_id' :article='article'/>
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
    computed:{
        ...mapGetters([
            'articles'
        ])
    },
    created(){
        this.$store.dispatch('getArticles');
    }
}
</script>