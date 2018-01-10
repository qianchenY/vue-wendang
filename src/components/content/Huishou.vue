<template>
  <div class="huishou">
    <div class="m-desc">
      <p>内容回收站类似于电脑桌面回收站，文章、产品、相册等内容删除后，并不是彻底删除，而是移动到回收站，其他页面不可见，需要到回收站进行彻底删除或者回复到原处。</p>
    </div>
    <ul class="m-list mt-25">
        <li class="m-item">
            <p>(1)回收站操作：</p>
            <ul class="m-sublist">
                <li class="m-subitem">1.选择内容维护；</li>
                <li class="m-subitem">2.选择内容回收站；</li>
                <li class="m-subitem">3.恢复或删除指定内容；</li>           
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
  name: 'Huishou',
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
