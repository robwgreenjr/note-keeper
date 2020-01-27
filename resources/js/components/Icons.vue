<template>
  <div class="header__icons">
    <img src="../assets/vue_logo.png" alt="Vue icon" />
    <span>+</span>
    <img src="../assets/laravel_logo.png" alt="Laravel icon" />
    <span>+</span>
    <img src="../assets/mysql_logo.png" alt="MySQL icon" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header__icons {
  width: 100%;
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    margin: 0 5px;
  }

  img {
    height: 50px;
    width: 50px;
  }

  img:nth-child(5) {
    width: 75px;
  }
}
</style>
