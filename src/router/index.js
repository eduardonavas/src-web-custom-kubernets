import Vue from 'vue'
import VueRouter from 'vue-router'
import NameSpaces from '../views/NameSpaces.vue'
import PodsView from '../views/PodsView.vue'
import LogView from '../views/LogView.vue'
import Enviroments from '../views/SelectEnviroments.vue'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/namespaces/:env',
    name: 'namespaces',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: NameSpaces
  },
  {
    path: '/pods/:namespace',
    name: 'pods',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: PodsView
  },
  {
    path: '/log/:namespace/:podName/:app',
    name: 'log',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: LogView
  },
  {
    path: '/',
    name: 'enviroments',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Enviroments
  },
  {
    path: '*',
    name: 'enviroments',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Enviroments
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if(store.getters.ambiente.name || to.name == 'enviroments'|| to.name == 'log'){
    next()
    return 
  }

  next('/')
  
  
})

export default router
