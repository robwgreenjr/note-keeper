<template>
  <div class="create-form">
    <div v-if="titleFieldVisible" @click="hideTitleField" class="backdrop" />
    <form @submit.prevent="createNote()" class="create-note">
      <input
        v-if="titleFieldVisible"
        v-model="title"
        @focus="showTitleField"
        name="title"
        placeholder="Title"
      />
      <textarea
        v-model="content"
        @focus="showTitleField"
        name="content"
        placeholder="Take a note..."
      />
      <button type="submit">
        <span>&#43;</span>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: "",
      titleFieldVisible: false
    };
  },
  methods: {
    createNote() {},
    showTitleField() {
      this.titleFieldVisible = true;
    },
    hideTitleField() {
      this.titleFieldVisible = false;
    }
  }
};
</script>

<style lang="scss">
.backdrop {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
}
.create-note {
  display: grid;
  grid-template-columns: 100%;
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 2px 6px 2px rgba(60, 64, 67, 0.15);
  z-index: 10;
  button {
    display: flex;
    justify-content: center;
    position: absolute;
    right: 18px;
    bottom: -18px;
    background: #42b883;
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
      0 2px 6px 2px rgba(60, 64, 67, 0.15);
    font-size: 24px;
    line-height: 1;
    text-align: center;
    span {
      margin-top: -3px;
    }
  }
}
</style>
