<template>
  <v-app>
    <NavBar />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

import Loading from './views/Loading.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components:{
    Loading,
    NavBar
  },

  data: () => ({
    //
    loading:true
  }),
  methods:{
    selectAmbientes(){
      this.$router.push('/')
    }
  },
  computed:{
    showEnv(){
      return this.$route.name != 'log'
    },
    ambiente(){
      return this.$store.state.ambiente
    }
  }
};
</script>
<style>
  .selectAmbiente{
    cursor: pointer;
  }
</style>
