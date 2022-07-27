<template >
  <Loading v-if="loading" />
  <section v-else class="scroll">
    <v-container>
      <v-row>
        <div>
          <xmp class="text-caption">
            {{ log }}
          </xmp>
        </div>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import Loading from "../views/Loading.vue";
import MiniLoading from "../views/MiniLoading.vue";
import commons from "../js/commons";

export default {
  components: {
    Loading,
    MiniLoading,
  },
  created() {
    this.log = '';
    window.addEventListener("scroll", this.handleScroll);
    this.getFirstLog();
  },
  destroyed() {
    this.restartParams();
  },
  data() {
    return {
      namespace: this.$route.params.namespace,
      podName: this.$route.params.podName,
      app: this.$route.params.app,
      log: "",
      loading: true,
      offSetFrom: -2000000100,
      offsetTo: -2000000000,
      stopLoadLogs: false,
      firstConsult: true,
      timestamp: "oldest",
      lineNum: -1,
      logFilePosition: "beginning",
      fromDate: '',
      toDate: ''
    };
  },
  methods: {
    getFirstLog() {
      const path = `/get-first-log/${this.namespace}/${this.podName}/${this.app}`;
      this.requestLog(path).then(() =>{
        this.sendScrollToBottom()
      }).catch(err => {
        console.log(err)
      })
    },
    getLog() {
      const path = `/get-log/${this.namespace}/${this.podName}/${this.app}/${this.offSetFrom}/${this.offSetFrom + 100}/${this.timestamp}/${this.lineNum}/${this.logFilePosition}`
      this.requestLog(path).then(() => {
        window.scrollTo(0, 200);
      }).catch(err => {
        console.log(err)
      })
    },
    sendScrollToBottom(){
      window.scrollTo(0, document.body.scrollHeight);
    },
    requestLog(path) {
      return new Promise((resolve, reject) => {
        this.$http
          .get(path)
          .then((res) => {
            const offSetFrom = res.data.selection.offsetFrom;
            const offsetTo = res.data.selection.offsetTo;
            const fromDate = res.data.info.fromDate;
            const toDate = res.data.info.toDate;
            
            if(this.toDate == toDate){
              this.stopLoadLogs = true
              return
            }
            
            this.toDate = toDate
            this.timestamp = res.data.selection.referencePoint.timestamp;
            this.lineNum = res.data.selection.referencePoint.lineNum;
            this.logFilePosition = res.data.selection.logFilePosition;
            this.concatLog(res.data.logs);

            this.offSetFrom = offSetFrom - 100;
            this.offsetTo = offsetTo - 100;
            this.loading = false;
            this.firstConsult = false;
            resolve()
          })
          .catch((err) => {
            console.log(err);
            reject()
          });
      });
    },
    concatLog(logs) {
      let log = ''
      logs.forEach((l) => {
        log += `${l.content}\n`;
      });
      this.log = log + this.log
    },
    handleScroll(event) {
      
      if (!this.stopLoadLogs && window.scrollY == 0) {
        this.getLog();
      }
    },
    restartParams() {
      this.log = ''
    }
  },
};
</script>

<style>
body {
  overflow-y: auto;
  overflow-x: auto;
  height: 100%;
}

</style>