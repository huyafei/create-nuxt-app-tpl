<template>
  <header class="header" :class="[showBg?'active':'']">
    <div class=" header-navbar flex-r">
      <div class="logo flex-r">
        <img src="" alt="">
        <span>查专线</span>
      </div>
      <div class="navbar-list flex-r">
        <nuxt-link to="/">首页</nuxt-link>
        <a>企业数据</a>
        <nuxt-link to="/goods">货源信息</nuxt-link>
        <a>车源信息</a>
        <a>产品服务</a>
        <a>手机版</a>
      </div>
      <div class="login flex-r">
        <a>登录</a>
        <span></span>
        <a>注册</a>
      </div>
    </div>
  </header>
</template>
<script>
  export default {
    name: 'EaHeader',
    components: {},
    props: {},
    data() {
      return {
        showBg: false,
        putHeaderStyle: true,
        putHeaderRouter:['index']
      }
    },
    //计算属性
    computed: {},
    watch: {
      '$route': function(v, oldv) {
        this.handleScroll()
      }
    },
    created() {

    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll, true)
      this.handleScroll()
    },
    //keep-alive 组件激活时调用
    activated() {
    },
    //keep-alive 组件停用时调用。
    deactivated() {
    },
    //方法
    methods: {
      handleScroll() {
        if (this.putHeaderRouter.includes(this.$route.name)) {
          this.putHeaderStyle = true
        } else {
          this.putHeaderStyle = false
        }
        if (this.putHeaderStyle) {
          var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
          if (scrollTop > 60 || scrollTop === 60) {
            if (!this.showBg) {
              this.showBg = true
            }
          } else {
            this.showBg = false
          }
        }else {
          this.showBg = true
        }
      }
    }
  }
</script>
<style scoped lang="scss">
  .header {
    position: fixed;
    z-index: 999;
    width: 100%;
    background-color: transparent;
    color: $cl-white;

    .header-navbar {
      height: 60px;
      width: 1200px;
      margin: 0 auto;
      position: relative;
      align-items: center;


      .logo {
        height: 60px;
        align-items: center;
        position: absolute;
        left: 0;

        img {
          width: 36px;
          height: 36px;
          border-radius: 5px;
          margin-right: 20px;
        }
      }

      .navbar-list {
        margin: 0 auto;
        height: 60px;
        align-items: center;

        a {
          height: 60px;
          line-height: 60px;
          padding: 0 20px;
          color: $cl-white;
        }


      }

      .login {
        height: 60px;
        align-items: center;
        position: absolute;
        right: 0;

        a {
          padding: 0 10px;
        }

        span {
          height: 16px;
          width: 1px;
          background-color: $cl-white;
        }

      }
    }


  }

  .header.active {
    background-color: $cl-white;
    color: $cl-black;

    .navbar-list {
      a {
        color: #333;
      }


    }

    .login {
      span {
        background-color: #333;
      }
    }
  }
</style>
