<template>
  <div class="webIndex clearfix">
    <!-- 头部 -->
    <header class="clearfix">
      <!-- <img  class="bg" src="../../../../comon/images/bg.png" alt=""> -->
      <nav class="clearfix">
        <ul class="clearfix">
          <li class="clearfix">首页</li>
          <li class="clearfix">前端</li>
          <li class="clearfix">后端</li>
          <li class="clearfix">案例</li>
          <li class="clearfix">设计</li>
          <li class="clearfix">其他</li>
          <li class="clearfix">关于</li>
        </ul>
      </nav>
      <img class="logo" src="../../../../comon/images/logo.png" alt="">
      <b>APPLLEN</b>
      <el-input v-model="input" @click.native="search()" placeholder="搜索"  suffix-icon="el-icon-search"></el-input>

    </header>
    <!-- 文章列表 -->
    <section class="section clearfix">
      <dl class="top_title">
        <dt>文章概览</dt>
        <dd>An overview of the article</dd>
      </dl>
      <div class="article clearfix">
        <div class="con_left clearfix fl">
          <div class="article_con  iconfont  icon-icon-yuanxk2">
            <div class="title_left fl">
              <div class="title"> 排序算法 </div>
              <div class="con">将一个记录（数）插入到已经拍好序的有序序列中，该数与将一个记录（数）插入到已经拍好序的有序序列中，该数与将一个记录（数）插入到已经拍好序的有序序列中，该数与</div>
            </div>
            <div class="time fr ">
              <div class="date">05-09</div>
              <div class="year">2017</div>
            </div>
          </div>
          <div class="article_con">
            <div class="title_left fl">
              <div class="title">  </div>
              <div class="con"></div>
            </div>
            <div class="time fr">
              <div class="date"></div>
              <div class="year"></div>
            </div>
          </div> 
          <div class="article_con iconfont  icon-icon-yuanxk2">
            <div class="title_left fl">
              <div class="title"> 排序算法 </div>
              <div class="con">将一个记录（数）插入到已经拍好序的有序序列中，该数与将一个记录（数）插入到已经拍好序的有序序列中，该数与将一个记录（数）插入到已经拍好序的有序序列中，该数与</div>
            </div>
            <div class="time fr">
              <div class="date">05-09</div>
              <div class="year">2017</div>
            </div>
          </div>
          <div class="article_con">
            <div class="title_left fl">
              <div class="title">  </div>
              <div class="con"></div>
            </div>
            <div class="time fr">
              <div class="date"></div>
              <div class="year"></div>
            </div>
          </div>      
          <div class="article_con iconfont  icon-icon-yuanxk2">
            <div class="title_left fl">
              <div class="title"> 排序算法 </div>
              <div class="con">将一个记录（数）插入到已经拍好序的有序序列中，该数与将一个记录（数）插入到已经拍好序的有序序列中，该数与将一个记录（数）插入到已经拍好序的有序序列中，该数与</div>
            </div>
            <div class="time fr">
              <div class="date">05-09</div>
              <div class="year">2017</div>
            </div>
          </div>
          <div class="article_con">
            <div class="title_left fl">
              <div class="title">  </div>
              <div class="con"></div>
            </div>
            <div class="time fr">
              <div class="date"></div>
              <div class="year"></div>
            </div>
          </div>              
        </div>
    
        <div class="con_right clearfix fl">
          <div class="article_con ">
            <div class="title_left fr">
              <div class="title">  </div>
              <div class="con"></div>
            </div>
            <div class="time fl">
              <div class="date"></div>
              <div class="year"></div>
            </div>
          </div>   
          <div class="article_con iconfont  icon-icon-yuanxk">
            <div class="title_left fr">
              <div class="title"> 排序算法 </div>
              <div class="con">将一个记录（数）插入到已经拍好序的有序序列中，该数与将一个记录（数）插入到已经拍好序的有序序列中，该数与将一个记录（数）插入到已经拍好序的有序序列中，该数与</div>
            </div>
            <div class="time fl">
              <div class="date">05-09</div>
              <div class="year">2017</div>
            </div>
          </div>
          <div class="article_con">
            <div class="title_left fr">
              <div class="title">  </div>
              <div class="con"></div>
            </div>
            <div class="time fl">
              <div class="date"></div>
              <div class="year"></div>
            </div>
          </div>   
          <div class="article_con iconfont  icon-icon-yuanxk">
            <div class="title_left fr">
              <div class="title"> 排序算法 </div>
              <div class="con">将一个记录（数）插入到已经拍好序的有序序列中，该数与将一个记录（数）插入到已经拍好序的有序序列中，该数与将一个记录（数）插入到已经拍好序的有序序列中，该数与</div>
            </div>
            <div class="time fl">
              <div class="date">05-09</div>
              <div class="year">2017</div>
            </div>
          </div>     
          <div class="article_con iconfont icon-yuanquanjiahao">
            <div class="title_left fr">
              <div class="title">  </div>
              <div class="con"></div>
            </div>
            <div class="time fl">
              <div class="date"></div>
              <div class="year"></div>
            </div>
          </div>  
        </div>

      </div>
    </section>
    <!-- 底部博客介绍 -->
    <section class="clearfix introduce">
      <dl class="top_title">
        <dt>Appllen博客</dt>
        <dd>appllen.com</dd>
      </dl>
      <div class="con">
        2013 年 09 月，我有幸加入 NewThread 团队创新实验室 Feweb 组学习前端开发。一名正走在前端开发工程师路上的程序猿，从xxx起，我建立了属于自己的技术博客
      </div>
      <img class="bg_logo" src="../../../../comon/images/bg_logo.png" alt="">
    </section>
    <!-- 友情链接 -->
    <div  class="clearfix section">
      <ul class="link clearfix">
            <li> <a href="#"> 轩枫阁</a></li>
            <li><a href="#">新思路团队网站-NewThread</a></li>
            <li><a href="#">默识者</a></li>
            <li><a href="#">文艺的聚集地</a></li>
            <li><a href="#">新思路团队网站-NewThread</a></li>
            <li><a href="#">蓝色栗子-petite-dd</a></li>
            <li><a href="#">Sophyn的设计作品</a></li>
            <li><a href="#">web-杨青个人博客</a></li>
            <li><a href="#">伯乐在线-web前端个人博客</a></li>
          </ul>
    </div>
   
         


  </div>
</template>

<script>

export default {
  data () {
    return {
      msg: '前端首页',
      data:[],
      searchValue:"",
      active:0
    }
  },
  created(){
     const baseUrl = this.$store.state.url
     this.$axios.get( baseUrl + '/indexWeb').then(res=>{
        this.data = res.data
      })
  },
  methods: {
    // 文章搜索函数
    search(){

    }
  }
}
</script>
<style lang="scss">
.webIndex{
  position: relative;
  // .bg{
  //   width: 100%;

  // }
  header{
      // overflow: hidden;
      // position: fixed;
      // top: 0;
      // left: 0;
      // zoom: 1;
      width: 100%;
      // max-width: 1200px;
      height:950px;
      background-color: #fff;
      -webkit-background-size: cover;
      -o-background-size: cover;
      background-size: cover; 
      background:url("../../../../comon/images/bg.png") center no-repeat;
      nav{
        max-width: 790px;
        margin: 40px auto;
        li{
          display: inline-block;
          font-size: 20px;
          font-weight: 300;
          letter-spacing: -0.6px;
          padding: 8px 30px;
          cursor: pointer;
          background: rgba(3, 3, 3, 0.19);
          text-align: right;
          color: #ffffff;
          &:first-child{
            padding-left: 50px;
            border-bottom-left-radius: 22px;
            border-top-left-radius: 22px;
          }
          &:last-child{
            padding-right: 50px;
            border-bottom-right-radius: 22px;
            border-top-right-radius: 22px;
          }
        }
      }
      .logo{
        width: 265px;
        height: 278px;
        display: block;
        margin: 0px auto;
        margin-top:5%;
      }
      b{
         font-family: PingFangSC;
        font-size: 59px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: 26.9px;
        text-align: right;
        color: #fff;
        display: block;
        text-align: center;
      }
      .el-input{
        width: 240px;
        height: 37px;
       display: block;
       margin: 25px auto;
      }
      .el-input__inner{
        border-radius: 22px;
        border:none;
        background-color: rgba(255, 255, 255, 0.22);
     
        font-family: SourceHanSansSC;
        font-size: 20px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: -0.5px;
        text-align: left;
        color: #fff; 
      }
      .el-input__suffix {
          right: 18px;
          .el-icon-search:before {
              content: "\E619";
              font-size: 22px;
          }
      }


  }
  // 头部封装
  .top_title{
      width: 450px;
      margin: 50px auto;
      text-align: center;
      dt{
        width: 230px;
        font-family: PingFangSC;
        font-size: 36px;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: -0.9px;
        text-align: center;
        color: #000000;
        margin: 0 auto;
        padding: 15px 0;
        border-top: 3px solid #767676;

      }
      dd{
        font-size: 30px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: -0.8px;
        text-align: center;
        color: rgba(183, 151, 120, 0.5);
      }
  }
  // 文章列表
  .section{
    width: 100%;
    height: auto;
    background: #ebebeb;

    .article{
      width:100%;
      max-width: 1200px;
      margin: 0 auto;
      .con_left,.con_right{
        width: 49%;
        .article_con{
          width:96%;
          padding: 2%;
          margin: 2% 0;
          height: 150px;
          position: relative;
          &:after{

          }
          .title_left{
            width: 70%;
            text-align: right;
            height: 100%;
            font-family: PingFangSC;
          
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            .title{
                font-size: 26px;
                letter-spacing: -0.8px;
                color: #000000;
                text-align: right;
            }
            .con{
                font-size: 22px;
                font-weight: 300;
                font-style: normal;
                height: 70px;
                font-stretch: normal;
                line-height: normal;
                letter-spacing: -0.6px;
                text-align: right;
                color: #b79778;
                padding-top: 10px;
                word-wrap: normal;
                text-overflow: ellipsis;
                overflow: hidden;
                text-overflow: clip;
                white-space: pre-wrap;
            }
          }
          .time{
            width: 30%;
            height: 100%;
            .date{
                font-family: Didot;
                font-size: 40px;
                font-weight: normal;
                font-style: normal;
                font-stretch: normal;
                line-height: normal;
                letter-spacing: -1px;
                text-align: right;
                color: #b79778;
                margin-top: -20px;
            }
            .year{
                font-family: Didot;
                font-size: 30px;
                font-weight: normal;
                font-style: normal;
                font-stretch: normal;
                line-height: normal;
                letter-spacing: -0.8px;
                text-align: right;
                color: #b79778;
            }

          }
        }
        .icon-icon-yuanxk:before {
           
            position: absolute;
            margin-left: -48px;
            /* margin-top: 22px; */
            font-size: 25px;
            color: #595050;
        }
        .icon-yuanquanjiahao:before {
            content: "\e626";
            position: absolute;
            margin-left: -48px;
            bottom: -12px;
            /* margin-top: 22px; */
            font-size: 25px;
            color: #595050;
        }
       .icon-icon-yuanxk2:after {
            content: "\E613";
            position: absolute;
            right: -38px;
            font-size: 25px;
            color: #595050;
        }
      }
      .con_right{
         border-left: 2px solid #b1aaaa;
         .article_con  {
           float: right;
           .title_left,.time{
              .title,.con{
                text-align: left;
              }
              .date,.year{
                text-align: left;
              }
           }

         } 
        
      }
      .con_middle{
        width: 2%;
        height: 800px;
        
      }
      .con_right{
         width: 49%;
      }
    }
  }
  // 介绍页
  .introduce{
    width: 100%;
    background: #f0f0f0;
    .con{
        width: 714px;
        height: 81px;
        margin: 0 auto;
        mix-blend-mode: undefined;
        font-family: PingFangSC;
        font-size: 24px;
        font-weight: 300;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: -0.6px;
        text-align: left;
        color: rgba(0, 0, 0, 0.5);
    }
    .bg_logo{
    
        margin: 0 auto;
        width: 500px;
        display: block;
    }
  }
  // 友情链接
  .link{
    width: 100%;
    max-width: 1200px;
    margin: 18px auto;
    height: auto;
    text-align: center;
    background: #ebebeb;
    li{
        display: inline-block;
        mix-blend-mode: undefined;
        font-family: PingFangSC;
        font-size: 14px;
        font-style: normal;
        cursor: pointer;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: -0.5px;
        text-align: left;
        a{
            color: rgba(0, 0, 0, 0.5);
            &:hover{
              color: #b79778;
            }
        }
        

    }

  }
  
}

</style>
