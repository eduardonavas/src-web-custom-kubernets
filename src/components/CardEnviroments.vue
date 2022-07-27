<template>
  <v-card class="mx-auto" max-width="500" @click="goTo(obj)">
    <v-card-title>
      <v-icon large left> mdi-kubernetes </v-icon>
      <span class="text-h6 font-weight-light">Ambiente Kubernets</span>
    </v-card-title>

    <v-card-text class="text-h5 font-weight-bold text-center">
        {{obj.name}}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
    props:['obj'],
    methods:{
        goTo(env){
         
          this.$store.commit('setAmbiente', env)
          this.$router.push(`/namespaces/${env.value}`)
        }
    }
};
</script>

<style>
</style>