<template>
  <div class="album">
    <div class="m-desc">
      <p>涉及栏目：设备介绍。</p>
    </div>
    <ul class="m-list mt-25">
        <li class="m-item">
            <p>(1)相册列表操作：</p>
            <ul class="m-sublist">
                <li class="m-subitem">1.选择内容维护；</li>
                <li class="m-subitem">2.选择公司相册管理；</li>
                <li class="m-subitem">3.下拉框出选择指定分类，点击搜索列出指定分类下相册，默认显示全部相册；</li>
                <li class="m-subitem">4.增加、删除、修改相册；</li>
                <li class="m-subitem">5.勾选相册左侧的方块，可进行批量删除、复制、移动等操作；</li>            
            </ul>
        </li>
        <li class="m-item">
            <p>(2)相册添加（修改）:</p>
            <ul class="m-sublist">
                <li class="m-subitem">1.下拉框处选择相册要添加到的分类；</li>
                <li class="m-subitem">2.修改相册标题；</li>
                <li class="m-subitem">3.编辑框中添加相册内容，工具栏处可添加图片及修改文字样式等操作，操作方法与word文档类似，也可以在word文档编辑好文章复制粘贴到此处（图片需要手动上传），<span>注：文件内存大小不要超过2MB</span>;</li>
                <li class="m-subitem">4.点击选择文件选中本地图片，点击上传将选中图片上传至空间，并将其设为缩略图（设置一张即可），<span>注：文件内存大小不要超过2MB</span>;</li>    
                <li class="m-subitem">5.点击添加，保存文章；</li>      
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
  name: 'Album',
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
