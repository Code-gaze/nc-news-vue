<template>
  <div class="sort">
    <label>Show how many articles per page:</label>
    <select
      :value="limit"
      @change="$emit('limitChange',{ value: $event.target.value, name: 'limit'})"
    >
      <option v-for="num in list" :value="num" :key="num">{{num}}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "LimitSelect",
  props: ["limit"],
  computed: {
    list() {
      let list = [];
      for (let i = 1; i <= 12; i++) {
        list.push(i);
      }
      return list;
    }
  }
};
</script>