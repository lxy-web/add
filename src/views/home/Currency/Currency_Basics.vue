<template>
	<div class="Currency_Basics">
		<utilsHeader></utilsHeader>
		<div class="contents">
					<div class="titles">
						基本设置
					</div>
					<div class="fromLIST">
						<div class="fromLIST_item">
							<span class="fromLIST_item_title">姓名：</span>
							<div class="utils-box"><el-input v-model="name" placeholder="刘老帅"></el-input></div>
							
						</div>
						<div class="fromLIST_item-rul">
							<span class="fromLIST_item_title">上传头像：</span>
							<div class="utils-box">
								<el-upload
								  class="avatar-uploader"
								  action="https://jsonplaceholder.typicode.com/posts/"
								  :show-file-list="false"
								  :on-success="handleAvatarSuccess"
								  :on-preview="fn"
								  :before-upload="beforeAvatarUpload">
								  <img v-if="imageUrl" :src="imageUrl" class="avatar">
								  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
								</el-upload>
							</div>
						</div>
						<div class="fromLIST_item">
							<span class="fromLIST_item_title">性别：</span>
							<div class="fromLIST_item-utile-lh">
								<el-radio v-model="radio" label="1">男</el-radio>
                                <el-radio v-model="radio" label="2">女</el-radio>
							</div>
						</div>
						<div class="fromLIST_item">
							<span class="fromLIST_item_title">通知：</span>
							<div class="fromLIST_item-utile-lh">
								<el-switch  v-model="switchs">
								</el-switch>
							</div>
							
						</div>
						<div class="fromLIST_item">
							<span class="fromLIST_item_title">邮件：</span>
							<div class="utils-box">
								<el-input v-model="mailbox" placeholder="刘老帅"></el-input>
							</div>
							
						</div>
						<div class="fromLIST_item">
							<span class="fromLIST_item_title">Github：</span>
							<div class="utils-box">
								<el-input v-model="Github" placeholder="https://github.com/alibaba/ice"></el-input>
							</div>
							
						</div>
						<div class="fromLIST_item">
							<span class="fromLIST_item_title">自我描述：</span>
							<div class="utils-box">
								<el-input
								  type="textarea"
								  :autosize="{ minRows: 2, maxRows: 4}"
								  placeholder="请输入描述..."
								  v-model="describe">
								</el-input>
							</div>
						</div>
					</div>
					<div class="btnSub">
					   <el-button type="primary" @click="handleSub()">确认</el-button>
					</div>
					
		</div>	 
	</div>
	
</template>

<script>
	import utilsHeader from "@/components/utils_Breadcrumb.vue";
	export default {
		components:{
			utilsHeader
		},
		  data() {
		       return {
		         imageUrl: '',
				 radio:"1",
				 switchs:false,
				 mailbox:"",
				 describe:"",
				 Github:"",
				 name:""
		       };
		     },
		     methods: {
				 fn(file){
					console.log(file) 
				 },
				 handleSub(){
					 console.log(this.imageUrl)
				 },
		       handleAvatarSuccess(res, file) {
		         this.imageUrl = URL.createObjectURL(file.raw);
		       },
		       beforeAvatarUpload(file) {
		         const isJPG = file.type === 'image/jpeg';
		         const isLt2M = file.size / 1024 / 1024 < 2;
		 
		         if (!isJPG) {
		           this.$message.error('上传头像图片只能是 JPG 格式!');
		         }
		         if (!isLt2M) {
		           this.$message.error('上传头像图片大小不能超过 2MB!');
		         }
		         return isJPG && isLt2M;
		       }
		     }
	}
</script>

<style lang="scss" scoped>
	.Currency_Basics{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		
		.contents{
			width: 100%;
			height: auto;
			background: #fff;
			margin-top: 1%;
			border-radius: 5px;
			display: flex;
			flex-direction: column;
			.titles{
				width: 98%;
				height: 40px;
				font-size: 20px;
				line-height: 40px;
				font-weight: 400;
				text-indent: 20px;
				border-bottom: 1px solid #ccc;
				margin: 1%;
			}
			.fromLIST{
				width: 100%;
				height: 100%;
				.fromLIST_item{
					width: 20%;
					height: 40px;
					display: flex;
					margin: 2%;
					.fromLIST_item_title{
						width: 100px!important;
						height: 100%;
					    line-height: 40px;
						text-align: right!important;
						z-index: 1;
						clear: none;
					}
				}
				.fromLIST_item-rul{
					width: 20%;
					height: auto;
					display: flex;
					margin: 2%;
					.fromLIST_item_title{
						width: 100px!important;
						height: 100%;
					    line-height:100px;
						text-align: right!important;
						z-index: 1;
						clear: none;
					}
					.utils-box{
						flex: 1;
					}
				}
				.fromLIST_item-utile-lh{
					line-height: 40px;
				}
			}
		   .btnSub{
				width: 93%;
				height: 40px;
				margin: 1% 0px;
				margin-left: 7%;
				
				// .el-button{
				// 	margin-left: 5%;
				// }
		      }		
		}
	}
	  .avatar-uploader .el-upload {
	    border: 1px dashed #d9d9d9;
	    border-radius: 6px;
	    cursor: pointer;
	    position: relative;
	    overflow: hidden;
	  }
	  .avatar-uploader .el-upload:hover {
	    border-color: #409EFF;
	  }
	  .avatar-uploader-icon {
	    font-size: 28px;
	    color: #8c939d;
	    width: 100px;
	    height: 100px;
	    line-height: 100px;
	    text-align: center;
		border: 1px dashed #ccc;
	  }
	  .avatar {
	    width: 100px;
	    height: 100px;
	    display: block;
	  }
</style>
