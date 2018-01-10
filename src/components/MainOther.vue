<template>
    <div class="m-other mt-25">
        <p class="m-other-item left" @click="updateActiveNav(prevtNav)">
            <router-link :to="nav[prevtNav].path">上一篇：{{nav[prevtNav].name}}</router-link>
        </p>
        <p class="m-other-item right" @click="updateActiveNav(nextNav)">
            <router-link :to="nav[nextNav].path">下一篇：{{nav[nextNav].name}}</router-link>
        </p>
    </div>            
</template>

<script>
import {mapState, mapMutations} from 'vuex';
export default {
  name: 'MainOther',
  data () {
    return {
      
    }
  },
  computed:{
      ...mapState(["nav","activeNav","prevtNav","nextNav"])
  },
  methods:{
      ...mapMutations(["updateActiveNav"])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
