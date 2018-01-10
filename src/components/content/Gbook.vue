<template>
  <div class="gbook">
    <div class="m-desc">
      <p>涉及页面：首页及联系我们页面的在线留言</p>
    </div>
    <ul class="m-list mt-25">
        <li class="m-item">
            <p>(1)在线留言列表：</p>
            <ul class="m-sublist">
                <li class="m-subitem">1.选择业务处理；</li>
                <li class="m-subitem">2.选择在线留言管理；</li>
                <li class="m-subitem">3.查看或删除指定留言（点击回复，显示全部信息）；</li>           
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
  name: 'Gbook',
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
