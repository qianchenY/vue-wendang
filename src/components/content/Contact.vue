<template>
  <div class="contact">
    <div class="m-desc">
      <p>河北九鑫文化传媒有限公司</p>
      <p>QQ:2754096072</p>
      <p>手机:18830115158、13383238733</p>
    </div> 
    <main-other></main-other>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import MainOther from '../MainOther';
export default {
  name: 'Contact',
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
