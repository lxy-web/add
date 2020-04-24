<template>
	<div class="C_add">
		 <utilsHeader> </utilsHeader>
		 <div class="contents">
			<div class="titles">
				添加分类
			</div>
			<div class="inputss">
				<div class="addtitle">
				<div class="FrontTitle">{{obj.title}}：</div><el-input
					  placeholder="请输入标题"
					  v-model="title"
					  clearable>
					</el-input>
				</div>
				<div class="addname">
					<div class="FrontTitle">{{obj.name}}：</div><el-input
					  placeholder="请输入缩写"
					  v-model="name"
					  clearable>
					</el-input>
				</div>
				<div class="btnSub">
				   <el-button type="primary" @click="handelSub()">确认</el-button>
				</div>
			</div>
		 </div>	 
	</div>
</template>

<script>
	// import axios from "axios";
	import utilsHeader from "@/components/utils_Breadcrumb.vue";
	export default{
	    components:{
			utilsHeader
		},
		props:{
			obj:{
				type:Object,
			}
		},
		data(){
			return {
				title:"",
				name:""
			}
		},
		methods:{
			handelSub(){
				this.http.post(`${this.obj.url}`,{
					title:this.title,
					name:this.name
				}).then(res=>{
					if(res.data.code==200){
						 this.$message({	
						          message: `恭喜你，${res.data.msg}`,
						          type: 'success'
						     });
					}else{
						  this.$message.error(`错了哦，${res.data.msg}`);
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.C_add{
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

