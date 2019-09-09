<template>
    <div>
        <h3>Article and Its Comments </h3>
        <ArticleCard :article='article'/>
    </div>
</template>

<script>
import ArticleCard from './ArticleCard';
import { mapGetters } from 'vuex';

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
    },
    created(){
        this.$store.dispatch('getArticle', this.id)
    }
}
</script>

<style scoped>

</style>