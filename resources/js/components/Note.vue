<template>
  <div @click="selectNote(note)" class="note">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path fill="none" d="M0 0h24v24H0V0z" />
        <path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z" />
      </svg>

    <div v-if="note.title || note.content">
      <h1 v-if="note.title">
        {{ note.title }}
      </h1>
      <p v-if="note.content">
        <pre>{{ note.content }}</pre>
      </p>
    </div>

    <div v-else class="empty">
      Empty Note
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
  methods: {
    selectNote() {
    },
  },
};
</script>

<style lang="scss">
.note {
  position: relative;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #dadce0;
  border-radius: 8px;
  cursor: default;
  transition: all 0.2s ease-in-out;
  overflow-wrap: break-word;
  &:hover,
  &:focus {
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 2px 6px 2px rgba(60, 64, 67, 0.15);
    svg {
      opacity: 0.75;
    }
  }
  h1 {
    font-size: 18px;
  }
  pre {
    font-family: 'Roboto', system, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue',
  'Segoe UI', Arial, sans-serif;
    white-space: pre-wrap;
  }
  svg {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 25px;
    height: 25px;
    opacity: 0;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  .empty {
    color: rgba(0, 0, 0, 0.5);
    font-size: 24px;
    font-family: 'Product Sans', system, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue',
  'Segoe UI', Arial, sans-serif;
  }
}
</style>