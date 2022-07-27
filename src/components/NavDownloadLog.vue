<template>
  <div>
    <div v-show="downloading">
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-progress-circular
            size="20"
            indeterminate
            color="white"
            class="mt-1 ml-1"
            v-bind="attrs"
            v-on="on"
          ></v-progress-circular>
        </template>
        <span>Baixando...</span>
      </v-tooltip>
    </div>
    <div v-show="!downloading">
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-icon
            @click="download"
            dark
            v-bind="attrs"
            v-on="on"
            class="mt-1 ml-1"
          >
            mdi-download
          </v-icon>
        </template>
        <span>Baixar log</span>
      </v-tooltip>
    </div>
  </div>
</template>

<script>
import commons from "../js/commons";
export default {
  data() {
    return {
      namespace: this.$route.params.namespace,
      app: this.$route.params.app,
      podName: this.$route.params.podName,
      downloading: false,
    };
  },
  methods: {
    download() {
      this.downloading = true;
      const pod = {
        objectMeta: {
          labels: {
            app: this.app,
          },
          name: this.podName,
        },
      };
      console.log(this.namespace, this.app, this.podName);
      commons
        .download(this.$http, pod, this.namespace)
        .then(() => {
          this.downloading = false;
          console.log(this.downloading);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>