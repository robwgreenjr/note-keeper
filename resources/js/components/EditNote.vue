<template>
  <div v-if="note" @click="dismissModal" class="modal-backdrop">
    <div
      class="modal"
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalContent"
    >
      <form @submit.prevent="update" @click.stop class="edit-form">
        <input
          id="modalTitle"
          v-model="mutableNote.title"
          name="title"
          placeholder="Title"
        />

        <textarea
          id="modalContent"
          v-model="mutableNote.content"
          name="content"
          placeholder="Take a note..."
          rows="8"
        />

        <footer class="modal-footer">
          <button @click="remove" type="button" class="delete-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="grey"
            >
              <path
                d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
              ></path>
              <path d="M0 0h24v24H0z" fill="none"></path>
            </svg>
          </button>
          <button type="submit" class="submit-button">
            <span>Done</span>
          </button>
        </footer>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    note: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      mutableNote: this.note
    };
  },
  methods: {
    dismissModal() {},
    update() {},
    remove() {}
  }
};
</script>

<style lang="scss">
.modal-backdrop {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(229, 229, 229, 0.75);
  z-index: 100;
}
.modal {
  @include flex-center;
  width: 100%;
  margin: 25px;
  padding-top: 20vh;
}
.edit-form {
  position: relative;
  width: 100%;
  max-width: 600px;
  background: #fff;
  padding: 20px 20px 8px;
  border-radius: 8px;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 2px 6px 2px rgba(60, 64, 67, 0.15);
  transition: all 0.2s ease-in-out;
  input {
    margin-bottom: 20px;
  }
  .modal-footer {
    @include flex-between;
    .submit-button {
      height: 36px;
      padding: 8px 24px;
      border-radius: 4px;
      font-family: "Product Sans", system, -apple-system, BlinkMacSystemFont,
        Roboto, "Helvetica Neue", "Segoe UI", Arial, sans-serif;
      font-weight: 700;
      font-size: 14px;
      &:hover,
      &:focus {
        background-color: rgba(0, 0, 0, 0.08);
      }
    }
    .delete-button {
      width: 35px;
      padding: 8px;
      margin-left: -8px;
      opacity: 0.5;
      &:hover,
      &:focus {
        opacity: 1;
      }
    }
  }
}
</style>
