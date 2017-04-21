import Vue from 'vue'
import Router from 'vue-router'

import OrderVerification from '@/components/OrderVerification'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/order',
      name: 'OrderVerification',
      component: OrderVerification
    }
  ]
})
