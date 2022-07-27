<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <span v-bind="attrs" v-on="on">
        <v-icon class="mr-1" :color="statusCollor"> mdi-circle </v-icon>
      </span>
    </template>
    <span>status: {{ status }} </span>
  </v-tooltip>
</template>

<script>
export default {
  props: ["status"],
  computed: {
    statusCollor() {
      return this.status == "Running" ? "green" : "red";
    },
  },
};
</script>

<style>
</style>