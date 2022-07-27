<template>
  <div class="center">
    <v-progress-circular :size="100" :width="9" color="primary" indeterminate
      ></v-progress-circular
    >
  </div>
</template>

<script>
export default {};
</script>

<style>
  .center {
    width: 50px;
    height: 50px;
    /* Center vertically and horizontally */
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -25px 0 0 -25px;
  }
</style>