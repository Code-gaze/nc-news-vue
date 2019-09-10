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
    props:{
        topic:{type:String},
        author:{type:String}
    },
    computed:{
        ...mapGetters([
            'articles'
        ])
    },
    watch:{
        topic(){
            this.$store.dispatch('getArticles', {topic:this.topic, author: this.author});
        },
        author(){
            this.$store.dispatch('getArticles', {topic:this.topic, author: this.author});
        }
    },
    created(){
        this.$store.dispatch('getArticles', {topic:this.topic, author: this.author});
    }
}
</script>