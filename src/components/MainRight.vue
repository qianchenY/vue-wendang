<template>
    <div class="main-right">
        <h4 class="m-title">{{activeNav}}</h4>
        <router-view class="mt-25"></router-view>         
    </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: 'MainRight',
  data () {
    return {
      
    }
  },
  computed:{
      ...mapState(["nav","activeNav"])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
