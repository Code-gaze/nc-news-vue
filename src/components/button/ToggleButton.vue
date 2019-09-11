<template>
  <div class="toggle-button">
    <button
      :disabled="on"
      @click="$emit('orderClicked', {value: left, name:'order'}), on=!on"
    >{{left}}</button>
    <button
      :disabled="!on"
      @click="$emit('orderClicked', {value:right, name:'order'}), on=!on"
    >{{right}}</button>
  </div>
</template>

<script>
export default {
  name: "ToggleButton",
  data() {
    return {
      on: true
    };
  },
  props: ["left", "right"]
};
</script>