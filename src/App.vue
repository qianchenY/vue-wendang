<template>
  <div id="app">
    <Header></Header>
    <div class="main overflow">
      <main-left></main-left>    
      <main-right></main-right>   
    </div>
  </div>
</template>

<script>
import MainLeft from './components/MainLeft'
import Header from './components/Header'
import MainRight from './components/MainRight'
export default {
  name: 'app',
  components: {
    'MainLeft': MainLeft,
    'MainRight': MainRight,
    'Header': Header
  }
}
</script>

<style lang="scss">
@import "./assets/scss/base.scss";

.main{
  width: 100%;
}

.main-left{
  position: fixed;
  *position: absolute;
  left: -250px;
  top: 56px;
  width: 250px;
  height: 100%;
  padding: 25px 0;
  border-right: 1px solid #ddd;
  @include transition;

  &.show{
    left: 0;
  }
}

.main-right{
  width: 90%;
  padding: {
    top: 81px;
    left: 300px;
    bottom: 25px;
    right: 50px;
  };
  @include transition;

  &.pl-50{
    padding-left: 50px;
  }
}

.m-title{
  line-height: 1.2;
  font-size: 20px;
  color: #7e888b;
  text-align: center;
}

.m-desc{
  position: relative;
  padding: {
    top: 50px;
    left: 15px;
    right: 15px;
  };
  font-size: 16px;
  line-height: 25px;

  &:before{
    position: absolute;
    left: 0;
    top: 0;
    content: "简介";
    display: block;
    width: 100%;
    text-indent: 15px;
    line-height: 35px;
    font-size: 16px;
    color: #666;
    border: {
      left: 3px solid #5bc0de;
    };
    background-color: #f4f8fa;
  }
}

// 上一篇&&下一篇
.m-other{
  overflow: hidden;
  visibility: hidden;
}

.m-other-item{
  max-width: 50%;
  height: 25px;
  line-height: 25px;
  font-size: 16px;

  a{
    font-size: 14px;
    color: #333;

    &:hover{
      text-decoration: underline;
    }
  }
}

// 内容列表
.m-list{
  position: relative;
  padding: {
    top: 50px;
    left: 15px;
    right: 15px;
  };
  font-size: 16px;
  line-height: 25px;

  &:before{
    position: absolute;
    left: 0;
    top: 0;
    content: "操作步骤";
    display: block;
    width: 100%;
    text-indent: 15px;
    line-height: 35px;
    font-size: 16px;
    color: #666;
    border: {
      left: 3px solid #5bc0de;
    };
    background-color: #f4f8fa;
  }
}

.m-item{
  margin: {
    top: 10px;
  };
  line-height: 30px;
  font-size: 16px;

  img{
    max-width: 100%;
  }

  span{
    font-size: 14px;
    color: red;
  }

  &:first-child{
    margin-top: 0;
  }
}

.m-sublist{
  padding: {
    left: 15px;
  };  
}

.m-subitem{
  line-height: 25px;
  font-size: 14px;
}
</style>
