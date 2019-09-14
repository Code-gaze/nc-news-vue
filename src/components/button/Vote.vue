<template>
  <div class="vote-block">
    <div class="vote">
      <button :disabled="vote > 0" @click="$emit('updateVote', 1), vote++">+ vote!</button>
    </div>
    <p>Votes: {{votes}}</p>
    <div class="vote">
      <button :disabled="vote < 0" @click="$emit('updateVote', -1), vote--">- vote!</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Vote",
  props: ["votes", "id"],
  data() {
    return {
      vote: 0
    };
  }
};
</script>

<style scoped>
p {
  text-align: center;
  margin-top:0.5em;
}
</style>