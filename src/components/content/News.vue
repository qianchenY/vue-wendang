<template>
  <div class="news">
    <div class="m-desc">
      <p>涉及栏目：企业新闻及其子栏目。</p>
    </div>
    <ul class="m-list mt-25">
        <li class="m-item">
            <p>(1)文章列表操作：</p>
            <ul class="m-sublist">
                <li class="m-subitem">1.选择内容维护；</li>
                <li class="m-subitem">2.选择文章新闻管理；</li>
                <li class="m-subitem">3.下拉框出选择指定分类，点击搜索列出指定分类下文章，默认显示全部文章；</li>
                <li class="m-subitem">4.增加、删除、修改文章；</li>
                <li class="m-subitem">5.勾选文章左侧的方块，可进行批量删除、复制、移动等操作；</li>            
            </ul>
        </li>
        <li class="m-item">
            <p>(2)文章添加（<span>注：首页会显示两篇推荐文章，企业博客和行业新闻各一篇，需要在添加文章时，点击“管理高级表单项目”，在其他选项一栏，选择推荐即可</span>）:</p>
            <ul class="m-sublist">
                <li class="m-subitem">1.下拉框处选择文章要添加到的分类；</li>
                <li class="m-subitem">2.添加文章标题、作者、来源；</li>
                <li class="m-subitem">3.编辑框中添加文章内容，工具栏处可添加图片及修改文字样式等操作，操作方法与word文档类似，也可以在word文档编辑好文章复制粘贴到此处（图片需要手动上传），<span>注：文件内存大小不要超过2MB</span>；</li>
                <li class="m-subitem">4.点击添加，保存文章；</li>          
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
  name: 'News',
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
