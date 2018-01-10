<template>
  <div class="linklist">
    <div class="m-desc">
      <p>涉及页面：首页底部</p>
    </div>
    <ul class="m-list mt-25">
        <li class="m-item">
            <p>(1)友情链接列表：</p>
            <ul class="m-sublist">
                <li class="m-subitem">1.选择扩展功能；</li>
                <li class="m-subitem">2.选择友情链接管理；</li>
                <li class="m-subitem">3.添加、修改、删除友情链接；</li>           
            </ul>
        </li>
        <li class="m-item">
            <p>(2)添加友情链接（修改）：</p>
            <ul class="m-sublist">
                <li class="m-subitem">1.填写友情链接名称；</li>
                <li class="m-subitem">2.填写友情链接地址；</li>
                <li class="m-subitem">3.选中立即发布；</li>   
                <li class="m-subitem">4.填写排序号，按排序号排序；</li>  
                <li class="m-subitem">5.保存修改内容（其他默认即可）；</li>          
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
  name: 'Linklist',
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
