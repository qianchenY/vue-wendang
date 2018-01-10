<template>
  <div class="product">
    <div class="m-desc">
      <p>涉及栏目：产品中心及其子栏目</p>
    </div>
    <ul class="m-list mt-25">
        <li class="m-item">
            <p>(1)产品列表操作：</p>
            <ul class="m-sublist">
                <li class="m-subitem">1.选择内容维护；</li>
                <li class="m-subitem">2.选择公司产品管理；</li>
                <li class="m-subitem">3.下拉框处选择指定分类，点击搜索列出指定分类下产品，默认显示全部产品；</li>
                <li class="m-subitem">4.增加、删除、修改产品；</li>
                <li class="m-subitem">5.勾选产品左侧方块，可进行批量删除、复制、移动等操作；</li>            
            </ul>
        </li>
        <li class="m-item">
            <p>(2)产品修改：</p>
            <ul class="m-sublist">
                <li class="m-subitem">1.修改产品价格、材料材质、模具类型、制品类型、烧结方法、粉末预处理、烧结气氛、粉末制备方法、烧结温度、成型方法、压制方式、模具材质、后处理；</li>
                <li class="m-subitem">2.编辑框中修改产品简介，工具栏处可添加图片及修改文字样式等操作，操作方法与word文档类似，也可以在word文档编辑好文章复制粘贴到此处（图片需要手动上传）；</li>
                <li class="m-subitem">3.点击选择文件选中本地图片，点击上传将选中图片上传至空间，并将其设为缩略图（设置一张即可），<span>注：文件内存大小不要超过2MB，宽高比例为430:355</span>;</li>
                <li class="m-subitem">4.点击选择文件选中本地图片，点击上传将选中图片上传至空间，并将其设为缩略图（设置一张即可），<span>注：文件内存大小不要超过2MB</span>;</li>    
                <li class="m-subitem">5.点击添加，保存产品；</li>      
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
  name: 'Product',
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
