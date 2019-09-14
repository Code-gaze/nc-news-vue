<template>
  <div class="article">
    <div class="left">
      <span class="tag">
        <slot></slot>
      </span>
      <span class="tag">Date: {{comment.created_at.split("T")[0]}}</span>
    </div>
    <div class="mid">
      <p>Comment: {{comment.body}}</p>
    </div>
    <div class="right">
      <div class="vote">
        <Vote :votes="comment.votes" :id="comment.comment_id" v-on:updateVote="onUpdateVote" />
      </div>
      <div class="vote">
        <DeleteComment :author="comment.author" :id="comment.comment_id" />
      </div>
    </div>
  </div>
</template>

<script>
import Vote from "../button/Vote";
import DeleteComment from "./DeleteComment";

export default {
  name: "CommentItem",
  components: {
    Vote,
    DeleteComment
  },
  methods: {
    onUpdateVote(change) {
      this.comment.votes += change; //optimistic response
      //dispatch can only take one additional argument!!!
      this.$store.dispatch("updateComment", {
        id: this.comment.comment_id,
        change
      })
      .catch(error=>{
        this.comment.votes -= change;
      });
    }
  },
  props: ["comment"]
};
</script>

<style scoped>
.article {
  display: flex;
  flex-flow: wrap column;
  align-items: center;
  border: 1px solid rgb(1, 1, 37);
  border-radius: 1em;
  margin: 0.7em 0.3em 0.3em 0em;
}

.left {
  text-align: left;
  display: flex;
  flex-flow: row wrap;
  margin: 0.5em 0.8em 0.2em;
}
.mid {
  text-align: justify;
  line-height: 1.5em;
  margin: 0.2em 0.5em;
}
.right {
  display: flex;
  flex-flow: row wrap;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5em;
}
.button {
  margin: 0.5em 0.8em;
}
.tag {
  margin: 0.5em 0.4em 0.2em;
}
</style>