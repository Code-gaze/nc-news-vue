<template>
    <div >
        <SortSelect :sortValue='ARTICLE_SORT_CHART[sort_by]' 
          :options='["date", "votes", "author", "comments"]'
          @sortChange='handleChange' />
        <ArticleItem v-for='article in articles.articles' :key='article.article_id' v-bind='article'/>
        <Page :pageTotal='pageTotal' :p='p' @pageClicked='handleClick'/>
        <LimitSelect :limit='limit' @limitChange='handleChange' />
    </div>
</template>

<script>
import ArticleItem from './ArticleItem';
import { mapGetters } from 'vuex';
import Page from '../button/Page';
import LimitSelect from '../button/LimitSelect';
import SortSelect from '../button/SortSelect';
import {ARTICLE_SORT_CHART} from '../constant'

export default {
    name: 'ArticleList',
    components: {
        ArticleItem,
        Page,
        LimitSelect,
        SortSelect,
    },
    data(){
        return {
            limit:6,
            p:1,
            sort_by: 'created_at',
            ARTICLE_SORT_CHART,
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
        sort_by(){
            this.callStore()
        },
        p(){
            this.$store.dispatch('getArticles', 
            {topic:this.topic, author: this.author, sort_by:this.sort_by, limit:this.limit, p:this.p})
        }
    },
    created(){
        this.callStore()
    },
    methods:{
        callStore(){
           this.p = 1;
           this.$store.dispatch('getArticles', 
           {topic:this.topic, author: this.author,sort_by:this.sort_by,limit:this.limit, p:this.p})
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