<template>
  <v-card class="mx-auto" max-width="500" @click="goTo(obj.objectMeta.name)">
    <v-card-title>
      <v-icon large left> mdi-kubernetes </v-icon>
      <span class="text-h6 font-weight-light">Namespace Kubernets</span>
    </v-card-title>

    <v-card-text class="text-h5 font-weight-bold text-center">
        {{obj.objectMeta.name}}
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-row align="center" justify="end">
          <v-icon v-if="isActive" class="mr-1" color="green"> mdi-check-bold </v-icon>
          <v-icon v-else class="mr-1" color="red"> mdi-alert-circle </v-icon>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    props:['obj'],
    created(){
        
    },
    methods:{
        goTo(namespace){
          
          this.$router.push(`/pods/${namespace}`)
        }
    },
    computed:{
        isActive(){
           return this.obj.phase == 'Active'
        }
    }
};
</script>

<style>
</style>