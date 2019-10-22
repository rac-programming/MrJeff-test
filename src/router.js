import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import Test from './Test'
import Orders from './Orders'
import OrderDetails from './OrderDetails'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Test
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders
    },
    {
      path: '/orders/:orderId',
      name: 'Order details',
      component: OrderDetails
    }

  ]
})
