<template>
  <div>
    <div v-if="loading">
      <Loading />
    </div>
    <div v-else>
      <Voltar/>
      <v-container>
        <v-row>
          <span>
            <h1>NameSpaces</h1>
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
            <v-col v-for="(o, i) in filtered" :key="i" cols="12" md="4">
              <v-item>
                <Cards :obj="o" />
              </v-item>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
    </div>
  </div>
</template>

<script>
import Cards from "../components/CardsManager.vue";
import Loading from "../views/Loading.vue";
import Filtro from "../components/Filtro.vue";
import Voltar from "../components/Voltar.vue";

export default {
  components: {
    Cards,
    Loading,
    Filtro,
    Voltar
  },
  created() {
    this.getNameSpaces();
  },
  data() {
    return {
      namespaces: [],
      loading: true,
      filter: "",
      env: this.$route.params.env,
    };
  },
  methods: {
    getNameSpaces() {
      this.loading = true;
      this.$http
        .get(`/get-namespaces/${this.env}`)
        .then((res) => {
          this.namespaces = res.data.filter(this.filterNameSpaces);
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    filterNameSpaces(namespace) {
      return (
        namespace.objectMeta.name.indexOf("esteira") > -1 ||
        namespace.objectMeta.name.indexOf("dev-") > -1 ||
        namespace.objectMeta.name.indexOf("preprod-") > -1 ||
        namespace.objectMeta.name.indexOf("producao-") > -1
      );
    },
    nameSpaceFilter(namespace) {
      return namespace.objectMeta.name.indexOf(this.filter) > -1;
    },
  },
  computed: {
    filtered() {
      if (this.filter == "" || this.filter == null) {
        return this.namespaces;
      }
      return this.namespaces.filter(this.nameSpaceFilter);
    },
  },
};
</script>

<style>
</style>