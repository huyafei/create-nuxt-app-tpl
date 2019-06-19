<template>
  <div class="main-container">
    <div class="content">
      <div class="banner">
        <img class="img" src="" alt="暂无图片">
      </div>
      <div class="search flex-r">
        <div>
          <el-radio-group v-model="type">
            <el-radio-button label="全部"></el-radio-button>
            <el-radio-button label="短驳"></el-radio-button>
            <el-radio-button label="大件"></el-radio-button>
          </el-radio-group>
        </div>

        <div>
          <el-select v-model="startLoc" placeholder="起始地" style="width: 200px">
            <el-option
              v-for="item in startLocList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <span>至</span>
          <el-select v-model="endLoc" placeholder="目的地" style="width: 200px">
            <el-option
              v-for="item in endLocList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <!--<el-select v-model="carType" placeholder="车长车型" style="width: 200px">-->
          <!--<el-option-->
          <!--v-for="item in carTypeList"-->
          <!--:key="item.value"-->
          <!--:label="item.label"-->
          <!--:value="item.value">-->
          <!--</el-option>-->
          <!--</el-select>-->
          <el-popover
            placement="bottom"
            width="400"
            :visible-arrow="false"
            trigger="click">
            <div class="popover-box">
              <div class="type">
                <div class="title">用车类型</div>
                <div>
                  <el-radio-group v-model="popoverData.type" size="small">
                    <el-radio-button label="整车" size="small"></el-radio-button>
                    <el-radio-button label="零担" size="small"></el-radio-button>
                  </el-radio-group>
                </div>
              </div>
              <div class="length">
                <div class="title">车长 <span>(米，可多选)</span></div>
                <div>
                  <el-checkbox-group v-model="popoverData.length" size="small">
                    <el-checkbox-button v-for="item in carLengthList" :label="item" :key="item">{{item}}
                    </el-checkbox-button>
                  </el-checkbox-group>
                </div>
                <div class="title flex-r">
                  <span>其他车长：</span>
                  <el-input v-model="carLength" size="small" placeholder="点击输入" style="width: 120px"
                            @blur="getCarLength">
                  </el-input>
                  <span>米</span>
                </div>
                <div>
                  <el-checkbox-group v-model="popoverData.length" size="small">
                    <el-checkbox-button v-for="item in carLengthCustomList" :label="item" :key="item">{{item}}
                    </el-checkbox-button>
                  </el-checkbox-group>
                </div>
              </div>
              <div class="length">
                <div class="title">车型 <span>(可多选)</span></div>
                <div>
                  <el-checkbox-group v-model="popoverData.carType" size="small">
                    <el-checkbox-button v-for="item in carTypeList" :label="item" :key="item">{{item}}
                    </el-checkbox-button>
                  </el-checkbox-group>
                </div>
                <div class="title flex-r">
                  <span>其他车型：</span>
                  <el-input v-model="carType" size="small" placeholder="点击输入" style="width: 120px" @blur="getCarType">
                  </el-input>
                </div>
                <div>
                  <el-checkbox-group v-model="popoverData.carType" size="small">
                    <el-checkbox-button v-for="item in carTypeCustomList" :label="item" :key="item">{{item}}
                    </el-checkbox-button>
                  </el-checkbox-group>
                </div>
              </div>
            </div>
            <el-button slot="reference">车长车型<i class="el-icon-arrow-down el-icon--right"></i></el-button>
          </el-popover>
          <el-button type="primary">查询</el-button>
        </div>
      </div>

      <div class="information-cargo">
        <div class="list flex-r" v-if="true">
          <div class="list-item" v-for="(item,index) in 3" :key="index" @click="checkDetail(1)">
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
        <div class="no-content flex-c" v-if="false">
          暂无货源消息
        </div>
      </div>

      <!--货源详情-->
      <el-dialog title="货源详情" :visible.sync="dialogCargoDetail" width="700px">
        <div class="dialog-cargo-detail">
          <div class="map flex-c">
            <div class="city fz-20">
              <span>无锡</span>
              <i class="el-icon-right"></i>
              <span>无锡</span>
            </div>
            <div class="loc flex-r">
              <span>最短里程约1222km</span>
              <el-button type="text"><i class="el-icon-location-outline"></i>查看路线</el-button>
            </div>
            <div class="fz-12 fz-cl-gray-light">5分钟</div>
          </div>
          <div class="info-list flex-r">
            <div class="item">
              <div class="title flex-r">
                <span></span>
                车辆需求
              </div>
              <div class="form-body">
                <div class="flex-r">
                  <div class="lable">车长</div>
                  <div class="value">17.5米/19.5米</div>
                </div>
                <div class="flex-r">
                  <div class="lable">车型</div>
                  <div class="value">17.5米/19.5米</div>
                </div>
                <div class="flex-r">
                  <div class="lable">装车时间</div>
                  <div class="value">17.5米/19.5米</div>
                </div>
                <div class="flex-r">
                  <div class="lable">卸货时间</div>
                  <div class="value">17.5米/19.5米</div>
                </div>
                <div class="flex-r">
                  <div class="lable">装货方式</div>
                  <div class="value">17.5米/19.5米</div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="title flex-r">
                <span></span>
                货物信息
              </div>
              <div class="form-body">
                <div class="flex-r">
                  <div class="lable">货物名称</div>
                  <div class="value">17.5米/19.5米</div>
                </div>
                <div class="flex-r">
                  <div class="lable">体积/重量</div>
                  <div class="value">17.5米/19.5米</div>
                </div>
                <div class="flex-r">
                  <div class="lable">长/宽/高</div>
                  <div class="value">17.5米/19.5米</div>
                </div>
                <div class="flex-r">
                  <div class="lable">意向价格</div>
                  <div class="value">17.5米/19.5米</div>
                </div>

              </div>
            </div>
            <div class="item">
              <div class="title flex-r">
                <span></span>
                货物信息
              </div>
              <div class="form-body">
                <div class="flex-r img-list">
                  <img src="" alt="暂无图片">
                  <img src="" alt="">
                  <img src="" alt="">
                </div>
                <div class="flex-r">
                  <div class="lable">备注</div>
                  <div class="value">17.5米/19.5米</div>
                </div>
                <div class="flex-r">
                  <div class="lable">付款方式</div>
                  <div class="value">17.5米/19.5米</div>
                </div>
                <div class="flex-r">
                  <div class="lable">发票</div>
                  <div class="value">17.5米/19.5米</div>
                </div>

              </div>
            </div>
            <div class="item">
              <div class="title flex-r">
                <span></span>
                联系货主
              </div>
              <div class="form-body">
                <div class="flex-r user-info">
                  <div class="user flex-r">
                    <img src="" alt="">
                    <div class="flex-c">
                      <div class="name fz-16">小明</div>
                      <div class="fz-14 fz-cl-gray-light">查专线CEO</div>
                      <div class="fz-14 fz-cl-gray-light">5个共同好友</div>
                    </div>
                  </div>
                  <div class="phone flex-r">
                    <i class="el-icon-phone"></i>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
        <div slot="footer">
          <el-button @click="offerDetail=true">立即报价</el-button>
          <el-button type="primary" @click="dialogPay=true">支付定金</el-button>
        </div>
      </el-dialog>
      <!--立即报价-->
      <el-dialog title="立即报价" :visible.sync="offerDetail" width="400px">
        <div class="dialog-offer flex-c">
          <el-alert
            v-if="true"
            title="您已经报价过了，报价金额2000.00元。 输入金额，可再次提交报价。"
            type="warning"
            effect="dark"
            :closable="false"
            style="margin-bottom: 20px">
          </el-alert>
          <!--<div class="hint"></div>-->
          <el-input v-model.number="price" placeholder="请输入您的报价，客户意向10000元"></el-input>
        </div>
        <div slot="footer">
          <el-button type="primary" @click="offerDetail=false">立即报价</el-button>
        </div>
      </el-dialog>
      <!--支付定金-->
      <el-dialog title="支付定金" :visible.sync="dialogPay" width="430px">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="定金" prop="earnest">
            <el-input v-model.number="ruleForm.earnest" style="width: 200px;"></el-input>
          </el-form-item>
          <el-form-item label="使用优惠券">
            <el-select v-model="ruleForm.ticket" placeholder="请选择活优惠券" style="width: 200px;">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="支付方式">
            <el-radio-group v-model="ruleForm.payType">
              <el-radio label="微信支付"></el-radio>
              <el-radio label="支付宝支付"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="应付金额">
            <span class="fz-w fz-16 fz-cl-red">{{totalPrice}}</span>
          </el-form-item>


          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">确定支付</el-button>
          </el-form-item>
        </el-form>

      </el-dialog>
    </div>


  </div>
</template>
<script>
  export default {
    name: '',
    components: {},
    props: {},
    data() {
      return {
        type: '全部',
        startLoc: '',
        endLoc: '',
        startLocList: [],
        endLocList: [],

        popoverData: {
          type: '',
          length: [],
          carType: []
        },
        carLength: '',
        carLengthList: ['15', '16', '17', '18', '不限'],
        carLengthCustomList: ['13', '14'],
        carType: '',
        carTypeList: ['15', '16', '17', '18', '不限'],
        carTypeCustomList: ['13', '14'],
        dialogCargoDetail: false,
        offerDetail: false,
        price: null,
        dialogPay: false,
        ruleForm: {
          earnest: null,
          ticket: '',
          payType: '微信支付'
        },
        rules: {
          earnest: [
            { required: true, message: '请输入金额', trigger: 'blur' }
          ]
        },
        totalPrice: 2300.0
      }
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
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {

            this.$confirm('确认支付定金吗？', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.$message.success('支付成功');
              this.dialogPay=false;
            }).catch(() => {

            })


          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      checkDetail(v) {
        this.dialogCargoDetail = true
      },
      getCarLength() {
        if (this.carLength) {
          if (this.carLengthCustomList.includes(this.carLength) || this.carLengthList.includes(this.carLength)) {
            this.$message.warning('已有' + this.carLength + '车长')
          } else {
            this.carLengthCustomList.push(this.carLength)
          }
        }

      },
      getCarType() {
        if (this.carType) {
          if (this.carTypeCustomList.includes(this.carType) || this.carTypeList.includes(this.carType)) {
            this.$message.warning('已有' + this.carType + '车型')
          } else {
            this.carTypeCustomList.push(this.carType)
          }
        }
      }
    }
  }
</script>
<style lang="scss">
  .popover-box {
    .type {
      .el-radio-button {
        margin-right: 10px;

        .el-radio-button__inner {
          border-left: 1px solid #DCDFE6;
          border-radius: 4px;
        }
      }

      .el-radio-button:first-child .el-radio-button__inner {
        border-radius: 4px;
      }

      .el-radio-button:last-child .el-radio-button__inner {
        border-radius: 4px;
      }

      .el-radio-button__orig-radio:checked + .el-radio-button__inner {
        border-color: #059cff;
      }
    }

    .length {
      .el-checkbox-button {
        margin-right: 10px;

        .el-checkbox-button__inner {
          border-left: 1px solid #DCDFE6;
          border-radius: 4px;
        }
      }

      .el-checkbox-button:first-child .el-checkbox-button__inner {
        border-radius: 4px;
      }

      .el-checkbox-button.is-checked .el-checkbox-button__inner {
        border-color: #059cff;
      }

      .el-checkbox-button.is-focus .el-checkbox-button__inner {
        border-color: #059cff;
      }

    }

    .title {
      font-size: 14px;
      padding: 10px 0;
      align-items: center;
    }
  }
</style>
<style scoped lang="scss">
  .main-container {
    background-color: $cl-gray;

    .content {
      width: 1200px;
      margin: 0 auto;
      padding-top: 60px;

      .banner {
        .img {
          width: 100%;
          height: 300px;
        }
      }

      .search {
        justify-content: space-between;
        align-items: center;
        /* background-color: $cl-white;*/
        margin: 20px 0;
      }

      .information-cargo {
        padding-bottom: 110px;

        .list {
          flex-wrap: wrap;

          .list-item {
            margin-bottom: 10px;
            margin-left: 20px;
          }

          & > .list-item:first-child {
            margin-left: 0;
          }

          & > .list-item:nth-child(2n+1) {
            margin-left: 0;
          }
        }

        .no-content {
          justify-content: center;
          align-items: center;
          color: $cl-gray-light;
          font-size: 18px;
          min-height: 400px;
        }
      }

      .dialog-cargo-detail {
        .map {
          justify-content: center;
          align-items: center;
          padding: 20px 0;
          border-bottom: 1px solid #ddd;

          .loc {
            align-items: center;

            span {
              margin-right: 10px;
            }
          }
        }

        .info-list {
          flex-wrap: wrap;

          .item {
            width: 50%;
            box-sizing: border-box;
            padding: 0 20px;
            margin-top: 20px;

            .title {
              font-size: 16px;
              align-items: center;

              span {
                width: 2px;
                background-color: $main-color;
                height: 16px;
                margin-right: 12px;
              }
            }

            .form-body {
              padding-left: 14px;
              padding-top: 6px;
              padding-bottom: 6px;

              & > div {
                padding: 6px 0;

                .lable {
                  color: $cl-gray-light;
                  width: 80px;
                }

                .value {
                  flex: 1;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
              }

              .img-list {
                img {
                  width: 60px;
                  height: 60px;
                  margin-right: 12px;
                }

                & > img:last-child {
                  margin-right: 0;
                }
              }

              .user-info {
                justify-content: space-between;
                align-items: center;

                .user {
                  img {
                    width: 56px;
                    height: 56px;
                    border-radius: 50%;
                    margin-right: 12px;
                  }
                }

                .phone {
                  width: 36px;
                  height: 36px;
                  justify-content: center;
                  align-items: center;
                  border: 2px solid #059cff;
                  border-radius: 50%;
                  color: #059cff;
                  font-size: 20px;
                  transform: rotateY(180deg);;
                  -ms-transform: rotateY(180deg);; /* IE 9 */
                  -moz-transform: rotateY(180deg);; /* Firefox */
                  -webkit-transform: rotateY(180deg);; /* Safari 和 Chrome */
                  -o-transform: rotateY(180deg);; /* Opera */
                  cursor: pointer;
                }
              }
            }
          }
        }
      }

      .dialog-offer {

      }

    }
  }
</style>
