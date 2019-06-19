<template>
  <div class="main-container">
    <div>
      <el-carousel height="532px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="content">
      <!--模块1-->
      <div class="generalize  flex-r">
        <div class="generalize-box ">
          <div class="floor-title flex-r">
            <div class=" fz-18">企业推广</div>
            <div class=" fz-12 fz-cl-gray-light">
              更多企业
              <i class="el-icon-arrow-right"></i>
            </div>
          </div>
          <div class="generalize-list flex-r">
            <div class="item flex-c" v-for="(item,index) in 12" :key="index">
              <div class="show-img">
                <img src="" alt="">
                <img class="type-img" src="~/assets/images/cj_icon.png" alt="">
                <!--<img class="type-img" src="~/assets/images/fh_icon.png" alt="">-->
                <!--<img class="type-img" src="~/assets/images/zd_icon.png" alt="">-->
                <!--<img class="type-img" src="~/assets/images/rq_icon.png" alt="">-->
                <!--<img class="type-img" src="~/assets/images/yk_icon.png" alt="">-->
              </div>
              <div class="name fz-14">盛宇物流</div>
              <div class="name fz-12 fz-cl-gray-light">山东专线</div>
            </div>
          </div>
        </div>
        <div class="generalize-info flex-c">
          <div class="personge">
            <div class="personge-info">
              <div class="name fz-18 flex-r">小明，你好</div>
              <div class="btn-group flex-r">
                <el-button size="mini" type="primary">我要发货</el-button>
                <el-button size="mini" type="primary">我要找货</el-button>
                <el-button size="mini" type="primary">我的运单</el-button>
              </div>
            </div>
            <div class="personge-list">
              <div class="item flex-r" v-for="(item,index) in 3" :key="index">
                <span class="type">[推送]</span>
                <p class="title">充100元，送100元特惠活动进行中</p>
              </div>
            </div>
          </div>
          <div class="new">
            <div class="floor-title flex-r">
              <div class=" fz-18">物流头条</div>
              <div class=" fz-12 fz-cl-gray-light">
                更多
                <i class="el-icon-arrow-right"></i>
              </div>
            </div>
            <div class="new-list flex-c">
              <div class="item flex-r" v-for="(item,index) in 6" :key="index">
                <p class="title">关于响应《非银行支付机构网络支付安全规定》</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--模块2-->
      <div class="information flex-r">
        <div class="information-cargo">
          <div class="floor-title flex-r">
            <div class=" fz-18">货源消息</div>
            <div class=" fz-12 fz-cl-gray-light">
              查看更多
              <i class="el-icon-arrow-right"></i>
            </div>
          </div>
          <div class="list">
            <div class="list-item" v-for="(item,index) in 3" :key="index">
              <div class="geography flex-r">
                <div class="direction flex-r">
                  <span>无锡</span>
                  <i class="el-icon-right"></i>
                  <span>广州</span>
                </div>
                <div class="time">
                  5分钟
                </div>
              </div>
              <div class="cargo-info flex-r">
                <div class="cargo-info__lf flex-c">
                  <div class="type">
                    零担/重货/35吨/特种车
                  </div>
                  <div class="desc">货物重量为估算</div>
                </div>
                <div class="phone flex-r">
                  <i class="el-icon-phone"></i>
                </div>
              </div>
              <div class="principal flex-r">
                <div class="portrait flex-r">
                  <img src="" alt="">
                  <span>小明</span>
                </div>
                <div class="show">浏览量5</div>
              </div>
            </div>
          </div>
        </div>
        <div class="information-car">
          <div class="floor-title flex-r">
            <div class=" fz-18">车源消息</div>
            <div class=" fz-12 fz-cl-gray-light">
              查看更多
              <i class="el-icon-arrow-right"></i>
            </div>
          </div>
          <div class="list">
            <div class="list-item" v-for="(item,index) in 3" :key="index">
              <div class="geography flex-r">
                <div class="direction flex-r">
                  <span>无锡</span>
                  <i class="el-icon-right"></i>
                  <span>广州</span>
                </div>
                <div class="time">
                  5分钟
                </div>
              </div>
              <div class="cargo-info flex-r">
                <div class="cargo-info__lf flex-c">
                  <div class="type">
                    零担/重货/35吨/特种车
                  </div>
                  <div class="desc">货物重量为估算</div>
                </div>
                <div class="phone flex-r">
                  <i class="el-icon-phone"></i>
                </div>
              </div>
              <div class="principal flex-r">
                <div class="portrait flex-r">
                  <img src="" alt="">
                  <span>小明</span>
                </div>
                <div class="show">浏览量5</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ad">
        <img src="" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import {userInfoUrl} from '~/api/api'
  export default {
    components: {},

    data(){
      return {

      }
    },
    created(){

    },
    mounted(){
      // userInfoUrl
      this.$axios({
        method: 'get',
        url: userInfoUrl,
        data: {

        },
      headers:{'iftr':'yrue'}
      }).then(res=>{
        console.log(res)
      }).catch(error =>{
        console.log(error.response)
      });
    },
    methods:{

    }
  }
</script>
<style lang="scss">
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 532px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .personge-info {
    .el-button + .el-button {
      margin-left: 0;
    }
  }

</style>
<style lang="scss" scoped>
  .floor-title {
    height: 48px;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background-color: $cl-white;

    & > div:last-child {
      cursor: pointer;
    }
  }

  .personge .personge-list, .new .new-list {
    padding: 4.5px 20px;

    .item {
      align-items: center;
      font-size: 12px;
      padding: 4.5px 0;
      cursor: pointer;

      .type {
        color: #e4393c;
        margin-right: 2px;
      }

      .title {
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }


  .main-container {
    background-color: $cl-gray;

    .content {
      min-height: 600px;
      width: 1200px;
      margin: 0 auto;

      .generalize {
        justify-content: space-between;
        margin-top: 20px;

        .generalize-box {
          width: 880px;
          background-color: $cl-white;
          border: solid 1px #dddddd;

          .generalize-list {
            padding: 0 20px;
            flex-wrap: wrap;

            .item {
              width: 123px;
              justify-content: center;
              align-items: center;
              margin-bottom: 12px;
              margin-right: 20px;
              cursor: pointer;

              .show-img {
                position: relative;

                img {
                  width: 123px;
                  height: 123px;
                }

                .type-img {
                  position: absolute;
                  left: 0;
                  top: 0;
                  width: 50px;
                  height: 50px;
                }
              }

              .name {
                padding: 0px 10px;
                margin-top: 4px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
            }

            & > .item:nth-child(6n) {
              margin-right: 0;
            }
          }
        }

        .generalize-info {
          width: 300px;
          justify-content: space-between;

          .personge {
            background-color: $cl-white;
            border: 1px solid #ddd;
            min-height: 173px;

            .personge-info {
              border-bottom: 1px solid #ddd;

              .name {
                padding: 0px 20px;
                height: 48px;
                align-items: center;
              }

              .btn-group {
                padding: 0px 20px 10px 20px;
                justify-content: space-between;
              }
            }


          }

          .new {
            background-color: #fff;
            min-height: 208px;
            border: 1px solid #ddd;
            border-top: none;

            .floor-title {
              border-top: 2px solid #059cff;;
              border-bottom: 1px solid #ddd;
            }
          }
        }

      }

      .information {
        justify-content: space-between;
        margin-top: 20px;

        & > div {
          width: 590px;

          .floor-title {
            border: 1px solid #ddd;
            border-bottom: none;
          }
        }
        .information-cargo, .information-car {
          .list {
            .list-item {
              margin-top: 10px;
            }
            & > .list-item:first-child {
              margin-top: 0;
            }
          }
        }



      }

      .ad {
        img {
          width: 100%;
          height: 220px;
          margin: 38px 0 55px 0;
        }
      }
    }
  }

</style>
