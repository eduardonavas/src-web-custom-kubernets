<template>
  <div>
    <v-progress-circular
    v-if="downloading"
    size="20"
    indeterminate
    color="primary"
    ></v-progress-circular>

    <v-tooltip v-else bottom>
    <template v-slot:activator="{ on, attrs }">
      <span v-bind="attrs" v-on="on">
        <v-icon class="mr-1" @click="download()">mdi-download </v-icon>
      </span>
    </template>
    <span>Download log do pod {{pod.objectMeta.name}}</span>
  </v-tooltip>
  </div>
  
</template>

<script>
import commons from '../js/commons'
export default {
  props: ['pod'],
  data(){
    return{
      namespace: this.$store.getters.namespace,
      downloading: false
    }
  },
  methods: {
    download(){
      this.downloading = true
      commons.download(this.$http, this.pod, this.namespace)
      .then(() => {
        this.downloading = false
      })
      .catch(err => {
        console.log(err)
      })
    }
  } 
};
</script>

<style>
</style>