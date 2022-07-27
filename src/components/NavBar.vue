<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="../assets/logov.png"
          transition="scale-transition"
          width="40"
        />
        <span>
          <h2>Custom Kubernets</h2>
        </span>
        <span v-if="showEnv || showDownload" class="ml-2">
          <h2>|</h2>
        </span>
        <v-tooltip v-if="showEnv" bottom >
          <template v-slot:activator="{ on, attrs }">
            <span v-bind="attrs" v-on="on" class="ml-2 selectAmbiente"
              ><h2 @click="selectAmbientes">{{ ambiente.name }}</h2></span
            >
          </template>
          <span
            >Aqui mostra o ambiente atual, se clicar aqui você será dicerionado
            para selecção de ambiente!</span
          >
        </v-tooltip>
        <NavDownloadLog v-if="showDownload" />
      </div>
    </div>

    <v-spacer></v-spacer>

    <v-icon color="wite"> mdi-exit-to-app </v-icon>
  </v-app-bar>
</template>

<script>
import NavDownloadLog from './NavDownloadLog'
export default {
    components:{
        NavDownloadLog
    },
    methods: {
        selectAmbientes() {
            this.$router.push("/");
        }
    },
    computed: {
        showDownload(){
            return this.$route.name == 'log'
        },
        showEnv() {
            
            return this.$route.name != 'log' && this.$route.name != 'enviroments'
        },
        ambiente() {
            return this.$store.state.ambiente;
        },
    },
};
</script>

<style>
</style>