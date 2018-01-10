<template>
  <div class="main-left box-sizing show">
    <ul class="nav-list">
        <li class="nav-item" v-for="(item, index) in nav" :key="index" @click="updateActiveNav(index)">
            <router-link :class="{current: item.name == activeNav}" :to="item.path">{{item.name}}</router-link>
        </li>
    </ul>
    <p id="main-left-close" class="main-left-close">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </p>
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
  },
  created: function(){
      $(function(){
          var $navclose = $("#main-left-close"),
              $mainleft = $(".main-left").eq(0),
              $mainright = $(".main-right").eq(0);
          
          $navclose.click(function(e){
              if($mainleft.hasClass('show')){
                  $mainleft.removeClass('show');
                  $mainright.addClass('pl-50');
              }else{
                  $mainleft.addClass('show');
                  $mainright.removeClass('pl-50');
              }   
          });
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$color: #2681d6;

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

.main-left-close{
    position: absolute;
    top: 25px;
    right: -30px;
    cursor: pointer;

    span{       
        margin: {
            top: 1px;
        };
        display: block;
        width: 15px;
        height: 2px;
        background-color: #ccc;

        &:first-child{
            margin-top: 0;
        }
    }

    &:hover{
        span{
            background-color: #333;
        }
    }
}
</style>
