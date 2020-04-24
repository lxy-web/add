<template>
	<div class="login"> 
		<div class="login-box">
			<div class="header">
				
				登&nbsp;&nbsp;录
			</div>
			<div class="content">
				<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2"  class="demo-ruleForm">
				    <el-form-item  prop="username">
				      <el-input v-model="ruleForm2.username"  placeholder="账号"></el-input>
				    </el-form-item>
				   
				    <el-form-item  prop="password">
				      <el-input type="password" v-model="ruleForm2.password"  placeholder="密码" auto-complete="off"></el-input>
				    </el-form-item>
				 
				  <el-form-item>
				    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
				    <el-button @click="resetForm('ruleForm2')">重置</el-button>
					<el-button type="primary" @click="handelRegister()">注册</el-button>
				  </el-form-item>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>
	// import axios from "axios";
	export default {
		 data() {
		             var checkAge = (rule, value, callback) => {
		                 if (!value) {
		                   return callback(new Error('账号不能为空！'));
		                 }else{
							  callback();
						 }
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
		      
		      return {
		        ruleForm2: {
		            password: '',
		            username: ''
		        },
		        rules2: {
		           password:[
		                      { validator: validatePass, trigger: 'blur' }
		                    ],
		          username: [
		                      { validator: checkAge, trigger: 'blur' }
		                    ]
		        }
		      };
		    },
		    methods: {
		      submitForm(formName) {
		        this.$refs[formName].validate((valid) => {
		          if (valid) {
		            this.http.post("/login",{
					   obj:this.ruleForm2
				   }).then(res=>{
					  if(res.data.code==200){
						  const loading = this.$loading({
						            lock: true,
						            text: '小帅加载中，请稍等！',
						            spinner: 'el-icon-loading',
						            background: 'rgba(0, 0, 0, 0.7)'
						          });
						          setTimeout(() => {
						            loading.close();
									this.$notify({
									   title: '成功',
									    message: `${res.data.msg}`,
									    type: 'success'
									 });
									 this.$router.push("/home")
						          }, 2000);
					  	     
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
				  this.$router.push("/Register")
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
			    height: 379px;
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