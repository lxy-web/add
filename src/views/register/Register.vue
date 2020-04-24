
<template>
	<div class="login"> 
		<div class="login-box">
			<div class="header">
				注&nbsp;&nbsp; 册
			</div>
			<div class="content">
				<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2"  class="demo-ruleForm">
				    <el-form-item  prop="username">
				      <el-input v-model="ruleForm2.username"  placeholder="账号"></el-input>
				    </el-form-item>
				   
				    <el-form-item  prop="pass">
				        <el-input type="password" v-model="ruleForm2.pass" placeholder="密码" auto-complete="off"></el-input>
				      </el-form-item>
				      <el-form-item prop="checkPass">
				        <el-input type="password" v-model="ruleForm2.checkPass" placeholder="再次输入密码" auto-complete="off"></el-input>
				      </el-form-item>
				      <el-form-item  prop="tel">
				        <el-input v-model.number="ruleForm2.tel" placeholder="手机号" ></el-input>
				      </el-form-item>
				  <el-form-item>
				    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
				    <el-button @click="resetForm('ruleForm2')">重置</el-button>
					<el-button type="primary" @click="handelRegister()">已有账号去登录</el-button>
				  </el-form-item>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>
	// import axios from "axios"
	export default {
		 data() {
		             var Username = (rule, value, callback) => {
		                 if (!value) {
		                   return callback(new Error('账号不能为空！'));
		                 }else{
							  callback();
						 }
		               };
		                var checkAge = (rule, value, callback) => {
		                      if (!value) {
		                        return callback(new Error('手机号不能为空'));
		                      }
		                      setTimeout(() => {
		                        if (!Number.isInteger(value)) {
		                          callback(new Error('请输入数字值'));
		                        } else {
		                          if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(value)) {
		                            callback(new Error('手机号不合法！'));
		                          } else {
		                            callback();
		                          }
		                        }
		                      }, 1000);
		                    };
		                    var validatePass = (rule, value, callback) => {
		                      if (value === '') {
		                        callback(new Error('请输入密码'));
		                      } else {
		                        if (this.ruleForm2.checkPass !== '') {
		                          this.$refs.ruleForm2.validateField('checkPass');
		                        }
		                        callback();
		                      }
		                    };
		                    var validatePass2 = (rule, value, callback) => {
		                      if (value === '') {
		                        callback(new Error('请再次输入密码'));
		                      } else if (value !== this.ruleForm2.pass) {
		                        callback(new Error('两次输入密码不一致!'));
		                      } else {
		                        callback();
		                      }
		                    };
		      
		      return {
		        ruleForm2: {
		                   pass: '',
		                   checkPass: '',
		                   tel: '',
		                   username: ''
		        },
		        rules2: {
		                pass:[
		                       { validator: validatePass, trigger: 'blur' }
		                     ],
		          checkPass: [
		                       { validator: validatePass2, trigger: 'blur' }
		                     ],
		                tel: [
		                       { validator: checkAge, trigger: 'blur' }
		                     ],
		            username:[
		                      { validator:Username, trigger: 'blur' }
		                     ]
		        }
		      };
		    },
		    methods: {
		      submitForm(formName) {
		        this.$refs[formName].validate((valid) => {
		          if (valid) {
		          this.http.post("/register",{
					  obj: this.ruleForm2
				   }).then(res=>{
					     if(res.data.code==200){
							 this.$notify({
							           title: '成功',
							           message: `${res.data.msg}`,
							           type: 'success'
							         });
						 }else if(res.data.code==401){
							 this.$notify.error({
							           title: '错误',
							           message: `${res.data.msg}`
							         });
						 }
				   })
		          } else {
		            console.log('error submit!!');
		            return false;
		          }
		        });
		      },
		      resetForm(formName) {
		        this.$refs[formName].resetFields();
		      },
			  handelRegister(){
				  this.$router.push("/login")
			 }
		    }
	}
</script>

<style scoped lang="scss">
	.login{
		width: 100%;
		height: 100%;
		background: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583747540319&di=612c1a0ec7f6db58a0c5e9f7216a9d2f&imgtype=0&src=http%3A%2F%2Fwww.33lc.com%2Farticle%2FUploadPic%2F2012-7%2F201272713565163040.jpg");
	    position: relative;
		.login-box{
			width: 365px;
		    height: 466px;
		    position: absolute;
			top: 200px;
			right: 200px;
			background: #fff;
			border-radius: 5px;
			display: flex;
			flex-direction: column;
			.header {
				     width: 100%;
				    height: 25px;
				    font-size: 27px;
				    text-align: center;
				    line-height: 100px;
				    font-weight: 500;
			}
			.content{
			  flex: 1;
			  display: flex;
			  align-items: center;
			  justify-content: center;
			}
		}
		
	}
	.el-form-item {
	   
	    width: 312px!important;
	}
	
</style>
