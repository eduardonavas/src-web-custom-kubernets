<template>
  <div>
    <v-container>
      <v-row>
        <span>
          <h1>Ambientes</h1>
        </span>
        <v-spacer></v-spacer>
      </v-row>
    </v-container>
    <v-item-group>
      <v-container>
        <v-row>
          <v-col v-for="(e, i) in env" :key="i" cols="12" md="4">
            <v-item>
              <Cards :obj="e" />
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </div>
</template>

<script>
import common from "../js/commons";
import Cards from "../components/CardEnviroments.vue";

export default {
  components: {
    Cards,
  },
  created() {
    console.log('entrou');
  },
  data() {
    return {
      env: common.enviroments(),
    };
  }
};
</script>

<style>
</style>