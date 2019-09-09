<template>
    <div>
        <h3>Article and Its Comments </h3>
        <ArticleCard />
        in article page {{id}}
    </div>
</template>

<script>
import ArticleCard from './ArticleCard';

export default {
    name: 'ArticlePage',
    props: ['id'],
    components: {
        ArticleCard,
    },
    created(){
        this.$store.dispatch('getArticle', this.id)
    }
}
</script>

<style scoped>

</style>