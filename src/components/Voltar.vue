<template>
<div style="position: fixed">
  <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <v-icon
        @click="$router.go(-1)"
        color="primary"
        v-on="on"
        v-bind="attrs"
        large
        class="ml-2 mt-2"
        
      >
        mdi-arrow-u-left-bottom-bold
      </v-icon>
    </template>
    <span>voltar</span>
  </v-tooltip>
</div>
  
</template>

<script>
export default {};
</script>

<style>
</style>