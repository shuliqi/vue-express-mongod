/*
 * @Author: mikey.zhaopeng 
 * @Date: 2018-01-04 15:38:30 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-03-05 14:06:06
 */

<template>
  <div class="edit">
    <div class="edit_con clearfix">
      <el-input
        placeholder="请输入文章标题"
        v-model="name" clearable>
      </el-input>
      <div id="editorElem" style="text-align:left"></div>
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="发布" name="1">
          <el-button class="fl" size="mini">保存草稿</el-button>
          <el-button class="fr" size="mini" type="primary" @click="public">发布</el-button>
 
        </el-collapse-item>
        <el-collapse-item title="分类目录" name="2">
          <el-tabs v-model="catalogue"  type="border-card" @tab-click="handleClick">
            <el-tab-pane label="所有分类目录" name="first">
              <el-tree
                :data="catalogueAll"
                show-checkbox
                default-expand-all
                node-key="id"
                ref="tree"
                highlight-current
               >
              </el-tree>
            
            </el-tab-pane>
            <el-tab-pane label="最常用" name="second">
             <el-tree
                :data="catalogueCom"
                show-checkbox
                default-expand-all
                node-key="id"
                ref="tree"
                highlight-current
                >
              </el-tree>
            </el-tab-pane>
          </el-tabs>
        </el-collapse-item>
        <el-collapse-item title="标签" name="3">
            <el-form :inline="true" :model="form" class="demo-form-inline">
              <el-form-item style="width:60%" >
                <el-input size="mini" v-model="form.name"></el-input>
              </el-form-item >
              <el-form-item style="width:20%">
                <el-button  size="mini" @click="addTag">添加标签</el-button>
              </el-form-item>
            </el-form>
            <el-tag
              size="mini"
              v-for="tag in Tags"
              :key="tag"
              closable
              @close="handleClose(tag)">
              {{tag}}
            </el-tag>
         <p>常用的标签：</p>
        </el-collapse-item>
        <el-collapse-item title="封面" name="4">
         <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList2"
            list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script> 
import E from 'wangeditor'
var editor = null
export default {
  name:"edit",
  data () {
    return {
      //文章标题
      name:"",
      //右侧默认展开
      activeNames:['1'],
      //分类目录
      catalogue:'first',
      //分类目录的数据——所有目录
      catalogueAll: [
        {
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, 
        {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, 
        {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }
      ],
      //分类目录的数据——最近使用
      catalogueCom:[
        {
          id: 1,
          label: '一级 1',
        },
         {
          id: 1,
          label: '一级 1',
        },
         {
          id: 1,
          label: '一级 1',
        },
         {
          id: 1,
          label: '一级 1',
        }
      ],
      //标签内容
      form:{
        name:""
      },
      Tags: ['标一', '标签二', '标签三'],
      //上传图片列表
      fileList2: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
    }

      
  },
  mounted(){
    //富文本编辑器
    editor = new E('#editorElem')
    editor.customConfig.onchange = (html) => {
      this.editorContent = html
    }
    editor.create()
    $(".w-e-text-container").css({
        "height":"auto",
        "min-height":"400px",
        "background":"#fff",
        "max-height":"80%",
        "overflow":"auto"
    })
    $("#editorElem").css({
      "height":"100%"
    })
  },
  created(){
   
    
  },
  methods:{
    //折叠菜单发生改变的
    handleChange(){
      

    },
    //状态保存
    submitForm(){

    },
    //分类目录
    handleClick(){

    },
    //分类目录树结构选择
    getCheckedKeys() {
        console.log(this.$refs.tree.getCheckedKeys());
    },
    //添加标签
    addTag(){
      var tag = this.form.name.replace(" ","")
      if(tag.length > 0){
        this.Tags.push(tag)
      }
    },
    //标签删除
    handleClose(tag) {
        this.Tags.splice(this.Tags.indexOf(tag), 1);
    },
    //发布函数
    
    public(){
      const baseUrl = this.$store.state.url
      //发布接口
      this.$axios.get(baseUrl + '/Release',{params:{id:new Date().getTime(),name:this.name,content:editor.txt.html()}}).then( res =>{
      
      })

    },
    //图片上传服务端返回数据
    handlePreview(file, fileList){
      console.log(file, fileList);
    },
    //文件列表移除函数
    handleRemove(file) {
      console.log(file);
    }

  }
}
</script>
<style lang="scss" type="text/scss" >
@import "../../static/css/base.scss";
.edit_con{
  width:100%;
  height: 100%;
  //input框
  .el-input{
    width:80%;
    float:left;
  }
  //编辑框
  #editorElem {
    width: 80%;
    height: 80%;
    margin-top: 20px;
    min-height:500px;
    height: auto;
    float:left;
    .w-e-toolbar{
      padding: 9px 18px;
    }
    .w-e-text{
      background:#fff;
    }
   
  }
  //发布选择
  .el-collapse{
    width:20%;
    padding:0 0 0 2%;
    margin-top: -41px;
    float:left;
    .el-collapse-item{
      margin:5px 0;
      .el-collapse-item__header{
        padding-left:10px;
        font-weight: bold;
      }
      .el-collapse-item__content {
          padding: 10px 10px 20px 10px;
          overflow: hidden;
      }
    }
    .el-collapse-item__wrap{
        .el-tabs__item {
          padding: 0 20px;
          height: 25px;
          line-height: 25px;
          font-size: 12px;
      }
    }
    .demo-form-inline{
      .el-input--mini{
        width:100%;
      }
      .el-form-item {
        margin-bottom: 0;
      }
    }
    .el-tag--mini{
      margin:5px;
      
    }
  }
}




</style>
