<template>
  <v-card class="mx-auto" max-width="500">
    <v-card-title>
      <v-icon large left> mdi-kubernetes </v-icon>
      <span class="text-h6 font-weight-light">Pod</span>
    </v-card-title>

    <v-card-text class="text-h6 font-weight-bold text-center">
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <span v-bind="attrs" v-on="on">{{podName}}</span>
        </template>
        <span>{{pod.objectMeta.name}}</span>
      </v-tooltip>
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-row align="center" justify="end">
          <PodLogDownload :pod="pod" @download="download($event)"/>
          <PodLog :name="pod.objectMeta.name" @log="getLog()"/>
          <PodStatus :status="pod.status"/>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
import PodStatus from './PodStatus.vue'
import PodLog from './PodLog.vue'
import PodLogDownload from './PodLogDownload.vue'
import LoadingDownload from './LoadingDownload.vue'

export default {
  components:{
    PodStatus,
    PodLog,
    PodLogDownload,
    LoadingDownload
  },
  props: ["pod"],
  methods: {
    goTo(name) {
      console.log(name);
    },
    getLog(){
      this.$emit('log', this.pod)
    },
    download(log){
      console.log(this.$store.state.namespace)
      this.$emit('download', this.pod)
    }
  },
  computed: {
    isActive() {
      return this.pod.phase == "Active";
    },
    podName() {
      let name = this.pod.objectMeta.labels.app;
      name = name.length >= 43 ? `${name.substring(0, 40)}...` : name;

      return name;
    },
  }
};
</script>

<style>
</style>