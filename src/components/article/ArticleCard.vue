<template>
  <div class="article" v-if="Object.keys(article).length !== 0">
    <div class="left">
      <span class="tag">
        <router-link :to="'/topics/'+article.topic">Topic: {{article.topic}}</router-link>
      </span>
      <span class="tag">
        <router-link :to="'/users/' + article.author">Author: {{article.author}}</router-link>
      </span>
      <span class="tag">Date: {{date}}</span>
      <span class="tag">Comments: {{article.comment_count}}</span>
    </div>
    <div class="mid">
      <p>
        <strong>Title: {{article.title}}</strong>
      </p>
      <p>Text: {{article.body}}</p>
    </div>
    <div class="right">
      <Vote :votes="article.votes" :id="article.article_id" v-on:updateVote="onUpdateVote" />
    </div>
  </div>
</template>

<script>
import Vote from "../button/Vote";
export default {
  name: "ArticleCard",
  props: ["article"],
  components: {
    Vote
  },
  methods: {
    onUpdateVote(change) {
      this.article.votes += change; //optimistic response
      //dispatch can only take one additional argument!!!
      this.$store
        .dispatch("updateArticle", {
          id: this.article.article_id,
          change
        })
        .catch(error => {
          this.article.votes -= change;
        });
    }
  },
  computed: {
    date() {
      return this.article.created_at.split("T")[0];
    }
  }
};
</script>

<style scoped>
.article {
  display: flex;
  flex-flow: wrap column;
  align-items: center;
  border: 1.5px solid rgb(1, 1, 37);
  border-radius: 1em;
  margin-bottom: 0.5em;
}

.left {
  display: flex;
  flex-flow: row wrap;
  text-align: left;
  margin-left: 0.5em;
  margin-right: 0.5em;
}
.mid {
  text-align: justify;
  line-height: 1.5em;
  margin: 0.5em 0.5em;
}
.right {
  display: flex;
  flex-flow: row wrap;
  text-align: center;
  justify-content: center;
  margin: 0em 0.5em 1em;
}
.tag {
  margin: 0.6em 1em 0em;
}
.p {
  margin-right: 1em;
}
</style>