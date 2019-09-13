<template>
  <div>
    <UserItem :username="author.username" :name="author.name" :avatar_url="author.avatar_url" />
    <ToggleButton :left="'Articles'" :right="'Comments'" @orderClicked="handleEvent" />
    <ArticleList :author="user" v-if="showList === 'Articles'" />
    <CommentList
      :id="user"
      v-if="showList === 'Comments'"
      :showArticle="showArticle"
      belongTo="Author"
    />
  </div>
</template>

<script>
import UserItem from "./UserItem";
import { mapGetters } from "vuex";
import { getUser } from "../api";
import ArticleList from "../article/ArticleList";
import CommentList from "../comment/CommentList";
import ToggleButton from "../button/ToggleButton";

export default {
  name: "UserPage",
  data() {
    return {
      showList: "Articles",
      showArticle: true
    };
  },
  components: {
    UserItem,
    ToggleButton,
    ArticleList,
    CommentList
  },
  props: {
    user: { type: String }
  },
  computed: {
    ...mapGetters(["author"])
  },
  watch: {
    user() {
      this.$store.dispatch("getAuthor", this.user);
    }
  },
  created() {
    this.$store.dispatch("getAuthor", this.user);
  },
  methods: {
    handleEvent({ value }) {
      this.showList = value;
    }
  }
};
</script>

