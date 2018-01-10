<template>
  <div class="main-left box-sizing">
    <p class="mail-left-logo font-none align-center">
        <img src="../assets/logo.png" alt="九鑫传媒">
    </p>
    <ul class="nav-list mt-25">
        <li class="nav-item" v-for="(item, index) in nav" :key="index" @click="updateActiveNav(index)">
            <router-link :class="{current: item.name == activeNav}" :to="item.path">{{item.name}}</router-link>
        </li>
    </ul>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex';
export default {
  name: 'MainLeft',
  data () {
    return {
    }
  },
  computed:{
      ...mapState(["nav","activeNav"]),
  },
  methods:{
      ...mapMutations(["updateActiveNav"]),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$color: #2681d6;

.main-left-logo{
    img{
        max-width: 100%;
    }
}

.nav-item{
    a{
        display: block;
        line-height: 30px;
        text-indent: 28px;
        font-size: 14px;
        color: #666;

        &:hover{
           background-color: #f2f2f2; 
        }

        &.current{
            background-color: #e5e5e5;
        }
    }
}
</style>
