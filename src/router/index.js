import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import DownloadPrices from '@/components/DownloadPrices'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    }, {
      path: '/downloadPrices',
      name: 'DownloadPrices',
      component: DownloadPricese
    }
  ]
})
