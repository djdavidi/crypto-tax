import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import PriceDownload from '@/components/PriceDownload'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    }, {
      path: '/priceDownload',
      name: 'PriceDownload',
      component: PriceDownloade
    }
  ]
})
