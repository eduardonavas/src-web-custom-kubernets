<template>
  <v-text-field
    solo
    label="Search"
    append-icon="mdi-magnify"
    class="mt-2"
    v-model="filter"
    clearable
  ></v-text-field>
</template>

<script>
export default {
    data(){
        return {
            filter: ''
        }
    },
    watch:{
        filter(newFilter, oldFilter){
            this.$emit('filter', newFilter)
        }
    }
};
</script>

<style>
</style>