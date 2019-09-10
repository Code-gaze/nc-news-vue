<template>
    <div >
        <ArticleItem v-for='article in articles.articles' :key='article.article_id' v-bind='article'/>
        <Page :pageTotal='pageTotal' :p='p' @pageClicked='handleClick'/>
    </div>
</template>

<script>
import ArticleItem from './ArticleItem';
import { mapGetters } from 'vuex';
import Page from '../button/Page';

export default {
    name: 'ArticleList',
    components: {
        ArticleItem,
        Page,
    },
    data(){
        return {
            limit:6,
            p:1,
        }
    },
    props:{
        topic:{type:String},
        author:{type:String}
    },
    computed:{
        ...mapGetters([
            'articles'
        ]),
        pageTotal(){
            return Math.ceil(this.articles.total_count / this.limit)
        }
    },
    watch:{
        topic(){
            this.callStore();
        },
        author(){
            this.callStore();
        },
        p(){
            this.$store.dispatch('getArticles', {topic:this.topic, author: this.author,limit:this.limit, p:this.p})
        }
    },
    created(){
        this.callStore()
    },
    methods:{
        callStore(){
           this.p = 1;
           this.$store.dispatch('getArticles', {topic:this.topic, author: this.author,limit:this.limit, p:this.p})
        },
        handleClick(value){
           isNaN(value)
            ? this.order=value
            : this.p=value
           }
        }
    
}
</script>