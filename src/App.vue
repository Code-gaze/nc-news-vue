<template>
  <div id="app">
    <Header />
    <label>Current Author:</label>
    <UserSelect />
    <router-link :to="/users/+user" class="title-link">User</router-link>
    <div class="nav">
      <Navigation />
    </div>
    <div class="body">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import ArticleList from "./components/article/ArticleList";
import UserSelect from "./components/user/UserSelect";
import { mapGetters } from "vuex";

export default {
  name: "app",
  components: {
    Header,
    Footer,
    Navigation,
    ArticleList,
    UserSelect
  },
  computed: {
    ...mapGetters(["user"])
  }
};
</script>

<style>
#app {
  text-align: center;
  max-width: 800px;
  margin: auto;
}
.body {
  font-size: 0.9rem;
  margin: 0.5em;
}
h4 {
  color: rgb(52, 9, 95);
  margin: 1.5em 0.5em 0.6em;
  font-family: Arial, sans-serif;
}
h5 {
  color: rgb(52, 9, 95);
  margin: 0.6em 0.5em 0.3em;
  font-family: Arial, sans-serif;
}
.title-link {
  background-color: rgb(160, 160, 160);
  padding: 0.3em 0.5em 0.2em;
  margin: 0.2em 0.2em;
  border-radius: 0.6em;
  color: rgb(255, 255, 255);
}
label {
  margin: 0em 0.8em 1.5em;
}
.nav {
  margin: 0.2em 0em 0.7em;
  display: flex;
  align-items: center;
  justify-content: center;
}
p {
  margin: 0.5em 0em;
}
label {
  color: rgb(3, 10, 75);
  font-weight: bold;
}
header {
  display: flex;
  align-items: center;
  justify-content: center;
}
#logo {
  width: 60px;
  height: 60px;
  margin-left: 0.6em;
}
.vote {
  margin: 0.3em 0.6em;
}
.vote-block {
  display: flex;
  flex-flow: row wrap;
  text-align: center;
  justify-content: center;
  margin: 0em 0.3em;
}
.deletebutton {
  margin-bottom: 0.2em;
  margin-right: 0.5em;
  margin-left: 0em;
}
.article-sort-order {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}
.sort {
  font-size: 0.9rem;
  margin-left: 1em;
}
.toggle-button {
  margin: 0.2em 1.5em;
  margin-left: auto;
}
</style>
