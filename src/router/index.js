import Vue from 'vue'
import Router from 'vue-router'
import demo from '@/views/demo/index.vue'
import demo2 from '@/views/demo2/index.vue'
import record from '@/views/record/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'demo',
      component: demo
    },
    {
      path: '/form',
      name: 'demo2',
      component: demo2
    },
    {
      path: '/record',
      name: 'record',
      component: record
    }
  ]
})
