import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/content/About'
import News from '@/components/content/News'
import Album from '@/components/content/Album'
import Product from '@/components/content/Product'
import Huishou from '@/components/content/Huishou'
import Gbook from '@/components/content/Gbook'
import Linklist from '@/components/content/Linklist'
import HtmlStatic from '@/components/content/HtmlStatic'
import Contact from '@/components/content/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: About
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/News',
      name: 'News',
      component: News
    },
    {
      path: '/Album',
      name: 'Album',
      component: Album
    },
    {
      path: '/Product',
      name: 'Product',
      component: Product
    },
    {
      path: '/Huishou',
      name: 'Huishou',
      component: Huishou
    },
    {
      path: '/Gbook',
      name: 'Gbook',
      component: Gbook
    },
    {
      path: '/Linklist',
      name: 'Linklist',
      component: Linklist
    },
    {
      path: '/HtmlStatic',
      name: 'HtmlStatic',
      component: HtmlStatic
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
