<template>
    <div>
        <h3>Article and Its Comments </h3>
        <ArticleCard :article='article'/>
        <hr />
        <CommentList :id='id' />
    </div>
</template>

<script>
import ArticleCard from './ArticleCard';
import { mapGetters } from 'vuex';
import CommentList from '../comment/CommentList';

export default {
    name: 'ArticlePage',
    props: ['id'],
    computed: {
        ...mapGetters([
            'article'
        ])
    },
    components: {
        ArticleCard,
        CommentList,
    },
    created(){
        this.$store.dispatch('getArticle', this.id)
    }
}
</script>

<style scoped>

</style>