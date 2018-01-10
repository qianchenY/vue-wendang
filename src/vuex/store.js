import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const state={
    nav:[
      {
          path: '/About',
          name: '单篇文章管理'
      },
      {
          path: '/News',
          name: '文章新闻管理'
      },
      {
          path: '/Album',
          name: '公司相册管理'
      },
      {
          path: '/Product',
          name: '公司产品管理'
      },
      {
          path: '/Gbook',
          name: '在线留言管理'
      },
      {
          path: '/Linklist',
          name: '友情链接管理'
      },
      {
          path: '/HtmlStatic',
          name: '网站静态生成'
      },
      {
          path: '/Huishou',
          name: '内容回收站'
      },
      {
          path: '/Contact',
          name: '联系我们'
      }
    ],
    activeNav: sessionStorage.getItem("activeNav") || '单篇文章管理',
    activeNavKey: sessionStorage.getItem("activeNavKey") || 0,
    prevtNav: sessionStorage.getItem("prevtNav") || 0,
    nextNav: sessionStorage.getItem("nextNav") || 1
}

const mutations = {
    updateActiveNav:function(state,index){  
        state.activeNavKey = index;
        state.activeNav = state.nav[index].name;
        state.prevtNav = index == 0 ? 0 : index - 1;
        state.nextNav = index == state.nav.length-1 ? state.nav.length-1 : index + 1;
        sessionStorage.setItem("activeNavKey",state.activeNavKey);
        sessionStorage.setItem("activeNav",state.activeNav);
        sessionStorage.setItem("prevtNav",state.prevtNav);
        sessionStorage.setItem("nextNav",state.nextNav);
    }
}

export default new Vuex.Store({
    state,mutations
})