<template>
    <div >
        <ArticleItem v-for='article in articles.articles' :key='article.article_id' v-bind='article'/>
        <Page :pageTotal='pageTotal' :p='p' @pageClicked='handleClick'/>
        <LimitSelect :limit='limit' @limitChange='handleChange' />
    </div>
</template>

<script>
import ArticleItem from './ArticleItem';
import { mapGetters } from 'vuex';
import Page from '../button/Page';
import LimitSelect from '../button/LimitSelect'

export default {
    name: 'ArticleList',
    components: {
        ArticleItem,
        Page,
        LimitSelect,
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
        limit(){
            this.callStore()
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
        },
        handleChange(value){
            isNaN(value)
             ?this.sort_by= ARTICLE_SORT_CHART[value]
             :this.limit= value
        }
        }
    
}
</script>