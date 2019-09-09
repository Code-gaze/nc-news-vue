<template>
    <div >
        <ArticleItem v-for='article in articles' :key='article.article_id' />
    </div>
</template>

<script>
import ArticleItem from './ArticleItem';

export default {
    name: 'ArticleList',
    components: {
        ArticleItem,
    }
}
</script>