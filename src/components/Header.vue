<template>
  <div class="hd box-sizing overflow">
    <p class="hd-logo left">
        <img src="../assets/logo.png" alt="九鑫传媒">
    </p>  
    <h3 class="hd-title right">网站后台使用文档</h3>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .hd{
      position: fixed;
      *position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 55px;
      line-height: 55px;
      padding: 0 30px;
      border: {
        bottom: 1px solid #ddd;
      };
  }

  .hd-logo{
      height: 55px;
      img{
          vertical-align: middle;
          width: 100%;
          max-width: 116px;
      }
  }
  .hd-title{
      font-size: 16px;
      color: #333;
  }
</style>
