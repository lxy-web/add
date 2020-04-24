<template>
	<div class="user_add">
		 <utilsHeader> </utilsHeader>
		 <div class="contents">
		 			<div class="titles">
		 				添加用户
		 			</div>
		 		    <div class="fromLIST">
						<div class="fromLIST_item">
							<span class="fromLIST_item_title">用户名：</span>
							<div class="utils-box"><el-input v-model="user" placeholder="请输入用户名"></el-input></div>
						</div>
						<div class="fromLIST_item">
							<span class="fromLIST_item_title">昵称：</span>
							<div class="utils-box"> <el-input v-model="name" placeholder="请输入昵称"></el-input></div>
							
						</div>
						<div class="fromLIST_item">
							<span class="fromLIST_item_title">邮箱：</span>
							<div class="utils-box"><el-input v-model="mailbox" placeholder="请输入邮箱"></el-input></div>
							
						</div>
						<div class="fromLIST_item">
							<span class="fromLIST_item_title">用户组：</span>
							<div class="utils-box">
								<el-select  v-model="userGroupValue" clearable placeholder="请选择用户组">
								   <el-option
								     v-for="item in userGroup"
								     :key="item.value"
								     :label="item.label"
								     :value="item.value">
								   </el-option>
								 </el-select>
							</div>
							 
						</div>
						<div class="fromLIST_item">
							<span class="fromLIST_item_title">状态：</span>
							<div class="utils-box">
								<el-select v-model="userTYPEValue" clearable placeholder="请选择状态">
								   <el-option
								     v-for="item in userTYPE"
								     :key="item.value"
								     :label="item.label"
								     :value="item.value">
								   </el-option>
								 </el-select>
							</div>		
						</div>
						<div class="fromLIST_item">
							<span class="fromLIST_item_title">新密码：</span>
							<div class="utils-box">
								<el-input v-model="newPwd" placeholder="请输入新密码"></el-input>
							</div>
							
						</div>
						<div class="fromLIST_item">
							<span class="fromLIST_item_title">确认密码：</span>
							<div class="utils-box">
								<el-input v-model="okPwd" placeholder="请确认密码"></el-input>
							</div>							
						</div>
					</div>
					<div class="btnSub">
					   <el-button type="primary">确认</el-button>
					</div>	
		 </div>	 
	</div>
</template>

<script>
	import utilsHeader from "@/components/utils_Breadcrumb.vue";
	export default{
		components:{
			utilsHeader
		},
		 data() {
		      return {
		        userGroup: [{
		          value: '选项1',
		          label: '管理员'
		        }, {
		          value: '选项2',
		          label: '投稿者'
		        }],
		        userGroupValue: '',
				userTYPE: [{
				  value: '选项1',
				  label: '有效'
				}, {
				  value: '选项2',
				  label: '禁用'
				},
				{
				  value: '选项3',
				  label: '过期'
				}],
				userTYPEValue: '',
				user:"",
				name:"",
				mailbox:"",
				newPwd:"",
				okPwd:"",
		      }
		    }
	}
</script>

<style lang="scss" scoped>
	.user_add{
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
					.utils-box{
						flex: 1;
					}
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
</style>
