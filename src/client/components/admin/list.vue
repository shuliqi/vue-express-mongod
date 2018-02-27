<template>
  <div class="list">
    <!-- 文章条数分类 -->
    <div class="article">
        <el-badge :value="article_All" :max="99" class="item">
          <el-button size="small">全部</el-button>
        </el-badge>
        <el-badge :value="release" class="item">
          <el-button size="small">发布</el-button>
        </el-badge>
        <el-badge :value="draft"  class="item">
          <el-button size="small">草稿</el-button>
        </el-badge> 
        <el-button type="primary" class="searchBtt fr" size="small">搜索</el-button>
        <el-input class="search fr" size="small" v-model="articleName" placeholder="搜索文章"></el-input>
       
    </div>
    <!-- 文章筛选条件 -->
    <div class="screen">
      <el-form :inline="true" :model="formInline" class="demo-form-inline" label-position="top" >
        <el-form-item >
              <el-date-picker
              v-model="value"
              type="daterange"
              align="right"
              size="small"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions2">
              </el-date-picker>
        </el-form-item>
        <el-form-item >
          <el-select size="small" v-model="formInline.region" >
            <el-option label="所有分类目录" value="all"></el-option>
            <el-option label="前端" value="web"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button size="small" type="primary" @click="onSubmit">筛选</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 文章表格 -->
    <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="title"
          label="标题">
        </el-table-column>
        <el-table-column
          prop="author"
          label="作者">
        </el-table-column>
        <el-table-column
          prop="catalogue"
          label="分类目录"
          show-overflow-tooltip>
          
        </el-table-column>
        <el-table-column
          prop="tag"
          label="标签"
          show-overflow-tooltip>
          
        </el-table-column>
        <el-table-column
          prop="state"
          label="状态"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="120">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData4)"
              type="text"
              size="small">
              移除
            </el-button>
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData4)"
              type="text"
              size="small">
              编辑
            </el-button>
          </template>
        </el-table-column>
    </el-table>
    <!-- 分页 -->
   <el-pagination
      class="pagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="10"
      layout="prev, pager, next"
      :total="total">
    </el-pagination>


  </div>
  
</template>

<script>
const baseUrl = "https://www.easy-mock.com/mock/5a5dc525d467601e4b7f559a/blog"
export default {
  name:"list",
  data () {
    return {
      article_All:12,   //所有的文章条数
      release:12,       //发布文章条数
      draft:234,         //草稿条数
      pickerOptions2: {
        shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
      },
      value:'',
      formInline:{
        time:'全部',
      },
      articleName:'',
      tableData: [],
      total:1000,
      currentPage:1

    }
  },
  created(){
    this.$axios({
      method:"post",
      url:baseUrl + '/list',
      data:{
        pageSize:1
      }
    }).then( res =>{
       this.tableData = res.data.data


    }, err =>{

    })

    
  },
  methods:{
    // 筛选函数
    onSubmit(){
      console.log("筛选")
    },
    handleSelectionChange(){

    },
    handleSizeChange(){

    },
    handleCurrentChange(){

    }
  }
  
    
  
}
</script>
<style lang="scss" type="text/scss" >
@import "../../static/css/base.scss";
.list{
  // 文章分类条数
  .article{
    // border-bottom: 1px solid #39f;
    .item {
      margin-top: 10px;
      margin-right: 40px;
    }
    .search{
      width: 180px;
      // float: right;
    }
    .searchBtt{
      // float: right;
      margin-left: 10px;

    }

  }
  // 筛选
  .screen{
    .el-form-item{
      margin-bottom: 0px;
      margin-top: 22px;
    }
  }
  //表格
  .el-table{
    table th, table td {
        text-align: left;
    }
  }
  // 分页
  .pagination{
    text-align: right;
    padding: 33px 0 0 33px;
  }

  
}












































































</style>
