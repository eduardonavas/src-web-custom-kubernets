<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <span v-bind="attrs" v-on="on">
        <v-icon class="mr-1" @click="view()">mdi-math-log </v-icon>
      </span>
    </template>
    <span>Visualizar log do pod {{name}}</span>
  </v-tooltip>
</template>

<script>
export default {
  props: ['name'],
  methods: {
    view(){
      this.$emit('log','')
    }
  } 
};
</script>

<style>
</style>