<template>
  <div class="about">
    <div class="m-desc">
      <p>涉及栏目：精科介绍、公司发展史、工厂实景、工艺技术、MIM工艺、现场设备、企业实力、合作伙伴、联系我们，这些栏目都是单独设计的效果不可以在后台修改，有需要调整的话请联系我们</p>
    </div>
    <main-other></main-other>
  </div>
  
</template>

<script>
import {mapState} from 'vuex';
import MainOther from '../MainOther';
export default {
  name: 'About',
  data () {
    return {
    }
  },
  computed: {
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
