<template>
  <div class="fillcontain" ref="fillcontain">
    <div class="info_container" ref="info_container">
      <el-row class="info_row row" :gutter="10">
        <el-col :span="8">
          <div class="area">
            <p class="title">修改信息</p>
            <el-form
              class="form"
              :model="infoForm"
              :rules="infoRules"
              ref="infoForm"
              label-width="80px"
            >
              <el-form-item label="姓名">
                <el-input v-model="infoForm.username" size="mini" disabled placeholder="请输入姓名"></el-input>
              </el-form-item>
              <el-form-item label="昵称" prop="nickname">
                <el-input v-model="infoForm.nickname" size="mini" placeholder="请输入昵称"></el-input>
              </el-form-item>
              <el-form-item label="绑定邮箱" prop="email">
                <el-input v-model="infoForm.email" size="mini" disabled placeholder="绑定的邮箱"></el-input>
              </el-form-item>
              <el-form-item label="绑定手机" prop="telphone">
                <el-input v-model="infoForm.telphone" size="mini" placeholder="请输入绑定手机"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('infoForm')">提交</el-button>
                <el-button @click="resetForm('infoForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-col>

        <el-col :span="8">
          <div class="area">
            <div class="pwdarea">
              <p class="title">修改密码</p>
              <el-form
                class="form"
                :model="pwdForm"
                :rules="pwdRules"
                ref="pwdForm"
                label-width="100px"
              >
                <el-form-item label="邮箱" prop="email">
                  <el-input v-model="infoForm.email" size="mini" disabled placeholder="邮箱"></el-input>
                </el-form-item>
                <el-form-item label="原密码" prop="password">
                  <el-input
                    type="password"
                    v-model="pwdForm.password"
                    auto-complete="off"
                    size="mini"
                    placeholder="请输入原密码"
                  ></el-input>
                </el-form-item>
                <el-form-item label="新密码" prop="newpassword">
                  <el-input
                    type="password"
                    v-model="pwdForm.newpassword"
                    auto-complete="off"
                    size="mini"
                    placeholder="请输入新密码"
                  ></el-input>
                </el-form-item>
                <el-form-item label="确认新密码" prop="surepassword">
                  <el-input
                    type="password"
                    v-model="pwdForm.surepassword"
                    auto-complete="off"
                    size="mini"
                    placeholder="请输入确认新密码"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('pwdForm')">提交</el-button>
                  <el-button @click="resetForm('pwdForm')">重置</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </el-col>

        <el-col :span="8">
          <div class="area">
            <p class="title">头像更改</p>
            <div class="touxiang">
              <picture-cut style="margin-bottom: 25px" :headerUrl="headerUrl" @save="saveNewPic">
                <a-progress
                  style="width:100%"
                  size="small"
                  strokeColor="#8cc269"
                  slot="progress"
                  v-show="showAvatarLoadingProgress"
                  :percent="avatarLoadingProgress"
                />
              </picture-cut>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import * as mutils from '@/plugins/mUtils';
import PictureCut from '../../components/picture-cut/PictureCut.vue';
export default {
  name: "infoModify",
  components: { PictureCut },
  data() {
    // 附带callback(),是在明确通过验证的情况下去掉输入框上的loading
    let validateEmail = (rule, value, callback) => {
      if (value == '') {
        callback(new Error('请输入邮箱~'));
        return;
      }
      let emailRegex = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
      if (!emailRegex.test(value)) {
        callback(new Error('邮箱格式不正确！'))
      } else {
        callback();
      }
    };

    // validateField:对部分表单字段进行校验的方法
    let validateNewpassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入新密码'));
      } else {
        if (this.pwdForm.surepassword !== '') {
          this.$refs.pwdForm.validateField('surepassword');
        }
        callback();
      }
    };
    let validateSurepassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入确认密码'));
      } else if (value !== this.pwdForm.newpassword) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      avatarLoadingProgress: 0,         // 上传进度
      showAvatarLoadingProgress: false, // 是否显示进度条
      infoForm: {
        username: '',
        nickname: '',
        email: this.$store.state.user.userInfo.email,
        telphone: ''
      },
      pwdForm: {
        password: '',
        newpassword: '',
        surepassword: ''
      },

      infoRules: {
        nickname: [
          { required: true, message: '请输入昵称', trigger: 'blur' },
          { min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
        ],
        // touziyear: [
        //   { required: true, message: '请选择投资年限', trigger: 'change' }
        // ],
        email: [
          { required: true, validator: validateEmail, trigger: 'blur' }
        ],
        // telphone: [
        //   { required: true, validator: validatePhone, trigger: 'blur' },
        // ],
      },
      pwdRules: {
        password: [
          { required: true, message: '请输入原密码', trigger: 'blur' },
        ],
        newpassword: [
          { required: true, validator: validateNewpassword, trigger: 'blur' },
        ],
        surepassword: [
          { required: true, validator: validateSurepassword, trigger: 'blur' },
        ],
      },


    };


  },
  created() {

  },
  mounted() {
    // mutils.setContentHeight(this,this.$refs.fillcontain,170);
  },
  computed: {
    headerUrl() {
      return this.$store.state.user.userInfo.headerUrl
    }
  },
  methods: {
    showMessage(type, message) {
      this.$message({
        type: type,
        message: message
      });
    },
    // showUsername() {
    //   let userinfo = mutils.getStore('userinfo');
    //   this.infoForm.username = userinfo.username;
    // },
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          if (formName == 'pwdForm') {
            // 
            try {
              await this.$store.dispatch('modifyUserPass', {
                email: this.infoForm.email,
                password: this.pwdForm.password,
                newPassword: this.pwdForm.newpassword
              })
              this.showMessage('success', '修改密码成功~');
            } catch (error) {
              //下面显示错误信息
              console.log(error)
              this.showMessage('failed', '修改密码失败TT')
            }

          } else if (formName == 'infoForm') { // 判断手机服务是否为空
            this.phoneForm.phone = this.infoForm.telphone;
            for (let key in this.phoneForm) {
              if (this.phoneForm[key] == '') {
                this.showMessage('warning', '请您选择手机服务~');
                return;
              }
            }
          }
          //保存修改的相关信息
          let userinfo = this.infoForm;
          let phoneinfo = this.phoneForm;
          let userData = Object.assign(userinfo, phoneinfo);
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    saveNewPic(data, done) {
      let avatarNewPaths = [];
      let promiseArr = [];
      let tempPicName = CONST.guid() + ".jpg";

      let p = new Promise((resolve) => {
        let that = this
        axios({
          url: "/cos/credential",
          method: "GET",
          params: {
            type: "avatar",
            fileName: tempPicName,
          },
        })
          .then(function (response) {
            let bucket = response.data.msg.bucket
            let region = response.data.msg.region
            let tempSecret = response.data.msg.credential;

            const COS = require("cos-js-sdk-v5");
            that.cos = new COS({
              getAuthorization: (options, callback) => {
                let data = {
                  TmpSecretId: tempSecret.credentials.tmpSecretId,
                  TmpSecretKey: tempSecret.credentials.tmpSecretKey,
                  XCosSecurityToken: tempSecret.credentials.sessionToken,
                  StartTime: tempSecret.startTime, // 时间戳，单位秒
                  ExpiredTime: tempSecret.expiredTime, // 时间戳，单位秒
                };
                callback(data);
              },
            });

            that.cos.putObject(
              {
                Bucket: bucket,
                Region: region,
                Key: that.$store.state.myUserID + "/" + tempPicName,
                Body: CONST.dataURLtoFile(data),
                onProgress(params) {
                  that.avatarLoadingProgress = Math.floor(params.percent * 100)
                  that.showAvatarLoadingProgress = true
                }
              },
              function (err, data) {
                if (err) {
                  console.log(err);
                  resolve(avatarNewPaths.push({
                    success: false,
                    msg: '文件上传失败!'
                  }));
                  return;
                }
                resolve(avatarNewPaths.push({
                  success: true,
                  msg: "https://" + data.Location
                }));
              }
            );
          });
      });
      promiseArr.push(p);

      Promise.all(promiseArr).then(() => {
        if (!avatarNewPaths[0].success) {
          VantToast({
            message: "头像上传失败",
            icon: "cross",
          });
          done()
        } else {
          let that = this
          axios({
            url: "/user/updateHeader",
            method: "POST",
            data: {
              headerUrl: avatarNewPaths[0].msg,
            },
          })
            .then(function () {
              VantToast({
                message: "更新成功",
                icon: "success",
              });
              that.user.headerUrl = avatarNewPaths[0].msg;
              that.$forceUpdate();
              that.$emit("myNewAvatar", avatarNewPaths[0].msg);
            });
          done()
        }

        this.avatarLoadingProgress = 0
        this.showAvatarLoadingProgress = false
      });
    },
  }
}
</script>

<style lang="less" scoped>
.info_container {
  padding: 20px;
  background: #fff;
  box-sizing: border-box;
  overflow: auto;
}
.title {
  text-align: center;
  width: 100%;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
  background-color: #3bc5ff;
  border: 1px solid #3bc5ff;
  color: white;
  display: block;
}
.info_row {
  .area {
    border: 1px solid #dfdfdf;
    height: 100%;
    font-size: 14px;
    padding: 10px;
    .touxiang {
      width: 90%;
      margin-top: 20px;
    }
  }
}
</style>


