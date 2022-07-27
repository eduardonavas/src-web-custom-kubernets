<template>
  <div>
    <div v-if="loading">
      <Loading/>
    </div>
    <div v-else>
      <Voltar/>
    <v-container>
      <v-row>
        
        <span>
          <h1>PODS: {{ namespace }}</h1>
        </span>
        <v-spacer></v-spacer>
        <span>
            <Filtro @filter="filter = $event"/>
          </span>
      </v-row>
    </v-container>
    <v-item-group>
      <v-container>
        <v-row>
          <v-col v-for="(p, i) in filtered" :key="i" cols="12" md="4">
            <v-item>
              <PodCard :pod="p" @log="getLog($event)" @download="download($event)"/>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
    </div>
    
  </div>
</template>

<script>
import PodCard from "../components/PodCard.vue";
import Voltar from "../components/Voltar.vue";
import Loading from "../views/Loading.vue";
import Filtro from "../components/Filtro.vue";
import commons from "../js/commons";

export default {
  components: {
    PodCard,
    Voltar,
    Loading,
    Filtro
  },
  created() {
    this.loading = true
    this.$store.commit('setNamespace', this.namespace)
    this.buscarPods();
    this.refresher = setInterval(() => {
      this.updatePods()
    }, 2000);
  },
  destroyed(){
    clearInterval(this.refresher)
  },
  data() {
    return {
      namespace: this.$route.params.namespace,
      pods: [],
      loading: true,
      filter: '',
      refresher: null
    };
  },
  methods: {
    updatePods(){
      
      if(document.visibilityState == 'visible'){
        this.buscarPods()
      }
    },
    buscarPods() {
      this.$http.get(`/get-pods/${this.namespace}`)
        .then((res) => {
          this.pods = res.data;
          this.loading = false
        })
        .catch((err) => {
          console.log(err);
        });
    },
    download(pod){
      commons.download(this.$http, pod, this.namespace)
    },
    getLog(pod){
        const link = this.$router.resolve({path: `/log/${this.namespace}/${pod.objectMeta.name}/${pod.objectMeta.labels.app}`})
        window.open(link.href, '_blank')
    },
    podFilter(pod){
      return pod.objectMeta.name.indexOf(this.filter) > -1
    }
  },
  computed:{
    filtered(){
      if(this.filter == '' || this.filter == null){
        return this.pods
      }
      return this.pods.filter(this.podFilter)
    }
  }
};
</script>

<style>
</style>