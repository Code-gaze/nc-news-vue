<template>
  <div>
    <b-button variant="primary" disabled v-if="loading">
      <b-spinner small type="grow"></b-spinner>Loading...
    </b-button>
    <div class="article-sort-order">
      <SortSelect
        :sortValue="ARTICLE_SORT_CHART[sort_by]"
        :options="['date', 'votes', 'author', 'comments']"
        @sortChange="handleEvent"
      />
      <ToggleButton :left="'desc'" :right="'asc'" @orderClicked="handleEvent" />
    </div>
    <ArticleItem v-for="article in articles.articles" :key="article.article_id" v-bind="article" />
    <Page :pageTotal="pageTotal" :p="p" @pageClicked="handleEvent" />
    <LimitSelect :limit="limit" @limitChange="handleEvent" />
  </div>
</template>

<script>
import ArticleItem from "./ArticleItem";
import { mapGetters } from "vuex";
import Page from "../button/Page";
import LimitSelect from "../button/LimitSelect";
import SortSelect from "../button/SortSelect";
import { ARTICLE_SORT_CHART } from "../constant";
import ToggleButton from "../button/ToggleButton";

export default {
  name: "ArticleList",
  components: {
    ArticleItem,
    Page,
    LimitSelect,
    SortSelect,
    ToggleButton
  },
  data() {
    return {
      loading: false,
      error: "",
      limit: 6,
      p: 1,
      sort_by: "created_at",
      order: "desc",
      ARTICLE_SORT_CHART
    };
  },
  props: {
    topic: { type: String },
    author: { type: String }
  },
  computed: {
    ...mapGetters(["articles"]),
    pageTotal() {
      return Math.ceil(this.articles.total_count / this.limit);
    }
  },
  watch: {
    topic() {
      this.callStore();
    },
    author() {
      this.callStore();
    },
    limit() {
      this.callStore();
    },
    sort_by() {
      this.callStore();
    },
    order() {
      this.callStore();
    },
    p() {
      this.callStore(this.p);
    }
  },
  created() {
    this.callStore();
  },
  methods: {
    callStore(p = 1) {
      this.loading = true;
      this.p = p;
      this.$store
        .dispatch("getArticles", {
          topic: this.topic,
          author: this.author,
          sort_by: this.sort_by,
          order: this.order,
          limit: this.limit,
          p
        })
        .then(res => (this.loading = false))
        .catch(error => {
          this.loading = false;
          this.error = error;
        });
    },
    handleEvent({ name, value }) {
      name === "sort_by"
        ? (this.sort_by = ARTICLE_SORT_CHART[value])
        : (this[name] = value);
    }
  }
};
</script>