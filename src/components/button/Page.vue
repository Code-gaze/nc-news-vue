<template>
  <div class="page-number">
    <button
      v-for="num in list"
      :key="num"
      :disabled="num===p"
      @click="$emit('pageClicked', {value:num, name:'p'})"
    >{{num}}</button>
  </div>
</template>

<script>
export default {
  name: "Page",
  props: ["pageTotal", "p"],
  computed: {
    list() {
      let list = [];
      for (let i = 1; i <= this.pageTotal; i++) {
        list.push(i);
      }
      return list;
    }
  }
};
</script>
