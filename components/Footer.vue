<template>
  <div class="footer">
    <div class="footer-content">
      <div class="site flex-r">
        <div class="site-list flex-r">
          <div class="item flex-c">
            <h4 class="title fz-14">关于我们</h4>
            <a>公司简介</a>
            <a>资质荣誉</a>
            <a>公司历程</a>
            <a>联系我们</a>
          </div>
          <div class="item flex-c">
            <h4 class="title fz-14">增值服务</h4>
            <a>物流贷款</a>
            <a>开票服务</a>
            <a>小程序官网</a>
            <a>物流名片</a>
          </div>
          <div class="item flex-c">
            <h4 class="title fz-14">帮助中心</h4>
            <a>注册与登录</a>
            <a>常见问题</a>
            <a>物流头条</a>
            <a>加盟合作</a>
          </div>
          <div class="item flex-c">
            <h4 class="title fz-14">联系方式</h4>
            <p class="phone">
              <img src="~/assets/images/phone_icon.png" alt="">
              <b>400-608-0099</b>
            </p>
            <p>(工作日:9:00--22:00 非工作日 9:00--18:00)</p>
            <p>客服QQ：2314151</p>
          </div>
        </div>
        <div class="code flex-r">
          <div class="code-wx flex-c">
            <img src="" alt="">
            <span>关注我们的微信</span>
          </div>
          <div class="code-app flex-c">
            <img src="" alt="">
            <span>查专线APP下载</span>
          </div>
        </div>
      </div>
      <div class="blogroll">
        <div class="list flex-r">
          <img src="~/assets/images/blogroll1.png" alt="">
          <img src="~/assets/images/blogroll2.png" alt="">
          <img src="~/assets/images/blogroll3.png" alt="">
          <img src="~/assets/images/blogroll4.png" alt="">
          <img src="~/assets/images/blogroll5.png" alt="">
        </div>
        <div class="copyright">2016-2017 版权所有 © 无锡专线查物流科技发展有限公司 苏ICP备12013323号-3</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'EaFooter',
    components: {},
    props: {},
    data() {
      return {}
    },
    //计算属性
    computed: {},
    watch: {},
    created() {

    },
    mounted() {

    },
    //keep-alive 组件激活时调用
    activated() {
    },
    //keep-alive 组件停用时调用。
    deactivated() {
    },
    //方法
    methods: {}
  }
</script>
<style scoped lang="scss">
  .footer {
    background-color: $cl-white;
    font-size: 12px;

    .footer-content {
      width:1200px;
      margin: 0 auto;

      .site {
        justify-content: space-between;
        padding-top: 10px;
        .site-list{
          .item{
            margin-left:115px;
            .title{
              padding:7px 0;
              .phone{
                img{
                  width: 18px;
                  height: 20px;
                }
              }

            }
            p{
              padding: 4px 0;
            }
            a{
              padding:4px 0;
            }
          }
          &>.item:first-child{
            margin-left: 0;
          }
        }
        .code{
          &>div{
            justify-content: center;
            align-items: center;
            img{
              width: 90px;
              height: 90px;
            }
            span{
              padding: 10px 0;
            }
          }
          .code-wx{
            margin-right: 40px;
          }
        }
      }

      .blogroll {
        padding: 15px 0;

        .list {
          justify-content: center;
          align-items: center;
          padding: 15px 0;

          img {
            width: 105px;
            height: 35px;
            margin-right: 10px;
          }

          & > img:last-child {
            margin-right: 0;
          }
        }

        .copyright {
          text-align: center;
          color: $cl-gray-light;
          padding: 15px 0;
        }
      }
    }
  }
</style>
