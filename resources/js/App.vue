<template>
  <div id="app" class="App">
    <Icons />
    <CreateForm />
    <Notes />
  </div>
</template>

<script>
import Icons from "./components/Icons.vue";
import CreateForm from "./components/CreateNote.vue";
import Notes from "./components/Notes.vue";

export default {
  name: "app",
  components: {
    Icons,
    CreateForm,
    Notes
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  background-color: #f0f0f0;
}

.App {
  padding: 3rem;
}

input,
textarea {
  width: 100%;
  display: block;
  border: 0;
  outline: 0;
  margin: 0;
  padding: 0;
  font-size: 16px;
  background-color: transparent;
  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
    font-family: "Product Sans", system, -apple-system, BlinkMacSystemFont,
      Roboto, "Helvetica Neue", "Segoe UI", Arial, sans-serif;
    font-weight: 700;
    font-size: 18px;
  }
}

input {
  font-family: "Product Sans", system, -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", "Segoe UI", Arial, sans-serif;
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 10px;
}

textarea {
  font-family: "Roboto", system, -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", "Segoe UI", Arial, sans-serif;
  resize: none;
  line-height: 1.5;
  min-height: 5em;
  max-height: 50vh;
  width: 100%;
}
</style>
