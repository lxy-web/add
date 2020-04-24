<template>
	<div class="User_Modify">
		 <utilsHeader> </utilsHeader>
		 <div class="contents">
			<div class="titles">
				修改密码
			</div>
			<div class="inputss">
				<div class="addtitle">
				<div class="FrontTitle">新密码：</div><el-input
					  placeholder="请输入标题"
					  v-model="title"
					  clearable>
					</el-input>
				</div>
				<div class="addname">
					<div class="FrontTitle">确认密码：</div><el-input
					  placeholder="请输入缩写"
					  v-model="name"
					  clearable>
					</el-input>
				</div>
				<div class="btnSub">
				   <el-button type="primary">确认</el-button>
				</div>
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
		data(){
			return {
				title:"",
				name:""
			}
		}
	}
</script>

<style lang="scss" scoped>
	.User_Modify{
		width: 100%;
		height: 100%;
		display: flex;
	    flex-direction: column;
		.contents{
			width: 100%;
			height: 400px;
			background: #fff;
			margin-top: 1%;
			border-radius: 5px;
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
			.inputss{
				width: 100%;
				height: 100%;
				display: flex;
				flex-direction: column;
				.addtitle{
					width: 50%;
					height: 40px;
					margin: 2%;
					display: flex;
					
				}
				.addname{
					width: 50%;
					height: 40px;
					margin: 2%;
					display: flex;
					
				}
				.FrontTitle{
						width: 100px;
						line-height: 40px;
				}
				.btnSub{
					width: 90%;
					height: auto;
					margin-left: 10%;
				}
			}
			
		}
	}
</style>
