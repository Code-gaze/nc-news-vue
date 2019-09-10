<template>
    <div>
        <h3>Article and Its Comments </h3>
        <ArticleCard :article='article'/>
        <hr />
        <AddComment />
        <CommentList :id='id' />
    </div>
</template>

<script>
import ArticleCard from './ArticleCard';
import { mapGetters } from 'vuex';
import CommentList from '../comment/CommentList';
import AddComment from '../comment/AddComment'

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
        AddComment,
    },
    created(){
        this.$store.dispatch('getArticle', this.id)
    }
}
</script>

<style scoped>

</style>