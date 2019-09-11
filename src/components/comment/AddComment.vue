<template>
  <div class="outline">
    <h4>Post a comment to this article with current author</h4>
    <form @submit.prevent="onSubmit">
      <div class="form">
        <div class="body">
          <input placeholder="new comment" v-model="newComment" />
        </div>
        <div class="submit">
          <button type="submit" :disabled="newComment.length===0">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "AddComment",
  props: ["id"],
  computed: {
    ...mapGetters(["user"])
  },
  data() {
    return {
      newComment: ""
    };
  },
  methods: {
    onSubmit(e) {
      this.$store.dispatch("addComment", {
        id: this.id,
        newComment: this.newComment,
        user: this.user
      });
      this.newComment = "";
    }
  }
};
</script>

<style scoped>
.outline {
  margin: 0.5em, 0.5em;
  border-radius: 1em;
  border: 1.5px solid rgb(3, 70, 6);
  margin-bottom: 0.5em;
}
.form {
  display: flex;
  flex-flow: wrap column;
  align-items: center;
  margin-bottom: 0.9em;
}

.username {
  text-align: left;
}
.comment {
  text-align: justify;
  line-height: 1.5em;
  margin-left: 0.5em;
}
.submit {
  margin: 1em 0.5em 0em;
}
</style>