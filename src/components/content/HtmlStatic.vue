<template>
  <div class="htmlstatic">
    <div class="m-desc">
      <p>每次网站后台修改或添加东西最后一步都要做生成更新！！！否则不会生效。</p>
    </div>
    <ul class="m-list mt-25">
        <li class="m-item">
            <p>(1)HTML静态生成：</p>
            <ul class="m-sublist">
                <li class="m-subitem">1.选择生成更新；</li>
                <li class="m-subitem">2.选择HTML静态生成；</li>
                <li class="m-subitem">3.生成首页；</li>           
                <li class="m-subitem">4.生成列表页(一键生成或者根据修改的内容生成指定分类)；</li>         
                <li class="m-subitem">5.生成内容页(一键生成或者根据修改的内容生成指定分类)；</li>     
                <li class="m-subitem">6.生成单页；</li>      
            </ul>
        </li>
        <li class="m-item">
            <p>(2)网站地图生成：</p>
            <ul class="m-sublist">
                <li class="m-subitem">1.选择生成更新；</li>
                <li class="m-subitem">2.网站地图生成；</li>
                <li class="m-subitem">3.生成网站地图；</li>   
                <li class="m-subitem">4.生成搜索引擎地图；</li>           
            </ul>
        </li>
    </ul>
    <main-other></main-other>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import MainOther from '../MainOther';
export default {
  name: 'HtmlStatic',
  data () {
    return {
    }
  },
  computed:{
    ...mapState(["nav"]),
  },
  components: {
    MainOther
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
