<template>
  <div class="notes">
    <Note v-for="(note, index) in notes" :key="index" :note="note" />
  </div>
</template>

<script>
import Note from "./Note.vue";
export default {
  components: {
    Note
  },
  mounted() {}
};
</script>

<style lang="scss">
.notes {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  position: relative;
  margin: 50px auto;
}
</style>
