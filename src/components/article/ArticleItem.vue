<template>
  <div class="item">
    <div class="article">
      <router-link :to="'/articles/' + article_id">
        <h5>Title: {{title}}</h5>
      </router-link>
    </div>
    <div class="article">
      <span class="tag">
        <router-link :to="'/topics/' + topic">Topic: {{topic}}</router-link>
      </span>
      <span class="tag">
        <router-link :to="'/users/' + author">Author: {{author}}</router-link>
      </span>
    </div>
    <div class="article">
      <span class="tag">Votes: {{votes}}</span>
      <span class="tag">Comments: {{comment_count}}</span>
      <span class="tag">Date: {{created_at.split("T")[0]}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleItem",
  props: [
    "article_id",
    "topic",
    "author",
    "votes",
    "comment_count",
    "created_at",
    "title"
  ]
};
</script>

<style scoped>
.item {
  border: 2px solid rgb(122, 194, 144);
  border-radius: 1em;
  padding-left: 0.5em;
  margin: 0.7em 0.5em 0.7em;
}

.article {
  padding-left: 0.5em;
  margin: 0.5em 0.5em 0.5em;
}

.tag {
  margin: 0.7em 0.4em 0.8em;
}
</style>