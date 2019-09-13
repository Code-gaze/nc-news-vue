<template>
  <div>
    <div class="article-sort-order">
      <SortSelect
        :sortValue="ARTICLE_SORT_CHART[sort_by]"
        :options="['date', 'votes', 'author']"
        @sortChange="handleEvent"
      />
      <ToggleButton :left="'desc'" :right="'asc'" @orderClicked="handleEvent" />
    </div>
    <CommentItem v-for="comment in comments" :key="comment.comment_id" :comment="comment">
      <router-link :to="'/articles/'+comment.article_id" v-if="belongTo==='Author'">Article</router-link>
      <router-link
        :to="'/users/'+comment.author"
        v-if="belongTo==='Article'"
      >Author: {{comment.author}}</router-link>
    </CommentItem>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CommentItem from "./CommentItem";
import SortSelect from "../button/SortSelect";
import ToggleButton from "../button/ToggleButton";
import { ARTICLE_SORT_CHART } from "../constant";

export default {
  name: "CommentList",
  components: {
    CommentItem,
    SortSelect,
    ToggleButton
  },
  data() {
    return {
      sort_by: "created_at",
      order: "desc",
      ARTICLE_SORT_CHART
    };
  },
  computed: {
    ...mapGetters(["comments"])
  },
  watch: {
    sort_by() {
      this.callStore();
    },
    order() {
      this.callStore();
    }
  },
  methods: {
    callStore() {
      this.$store.dispatch("getComments", {
        id: this.id,
        sort_by: this.sort_by,
        order: this.order,
        belongTo: this.belongTo
      });
    },
    handleEvent({ name, value }) {
      name === "sort_by"
        ? (this.sort_by = ARTICLE_SORT_CHART[value])
        : (this[name] = value);
    }
  },
  props: ["id", "belongTo", "showArticle"],
  created() {
    this.callStore();
  }
};
</script>