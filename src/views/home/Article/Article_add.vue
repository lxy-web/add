<template>
	<div class="Article_list">
		<utilsHeader></utilsHeader>
		<div class="content-ADD">
			<div class="title-s">
				添加文章
			</div>
			<div class="bt">
				<p class="bt-title"><i class="bt-icon">*</i>&nbsp;&nbsp; 标题</p>
				<p class="bt-input"><el-input v-model="title" placeholder="请输入内容"></el-input></p>
			</div>
			<div class="zc_fl">
				<div class="left">
					<p class="zc_fl-title"><i class="zc_fl-icon">*</i>&nbsp;&nbsp; 作者</p>
					<p class="zc_fl-input"><el-input v-model="name" placeholder="请输入内容"></el-input></p>
				</div>
				<div class="rgiht">
					<p class="zc_fl-title"><i class="zc_fl-icon">*</i>&nbsp;&nbsp; 选项</p>
					<p class="zc_fl-input">
						<el-select style="width:100%;" v-model="value5" multiple placeholder="请选择" >
							<el-option
							  v-for="item in options"
							  :key="item.value"
							  :label="item.label"
							  :value="item.value"
							   >
							</el-option>
						  </el-select>
				     </p>
				</div>
			</div>
			<div class="describe">
				<p class="describe-title">描述</p>
				<p class="describe-input">
					<el-input
					      class="inputs"
						  type="textarea"
						  :autosize="{ minRows: 2, maxRows: 4}"
						  placeholder="请输入内容"
						  v-model="describe">
					</el-input>
			  </p>
			</div>
			<div class="text-s">
				<div class="text-s-title">
					正文
				</div>
				<div>
					<textarea class="textarea__inner" v-model="texts" >
					</textarea>
				</div>
			</div>
		    <div class="Release"><el-button type="primary" @click="handleRelease()">发布文章</el-button></div>
		</div>
	</div>
</template>

<script>
	// import axios from "axios";
	import utilsHeader from "@/components/utils_Breadcrumb.vue";
	export default {
		components:{
			utilsHeader
		},
		 data() {
		    return {
		     title: '',
			  name:'',
		  describe:'',
			 texts:'',
			   options: [{
			            value: '选项1',
			            label: '选项1',
						type:1,
			          }, {
			            value: '选项2',
			            label: '选项2',
						type:2,
			          }, {
			            value: '选项3',
			            label: '选项3',
						type:3
			          }],
			          value5: [],      
		        }
		  },
		  methods:{
			  handleRelease(){
				  console.log(this.title,this.name,this.describe,this.texts,this.value5);
				  this.http.put("/Articl_add",{
					  title:this.title,
					  name:this.name,
					  describe_s:this.describe,
					  texts:this.texts,
					  values_s:this.value5,
					  type:0
				  }).then(res=>{
					  console.log(res)
					  if(res.data.code==200){
						   this.$message({
						            message: `恭喜你，${res.data.msg}`,
						            type: 'success'
						     });
					  }else if(res.data.code==401){
						  this.$message({
						           message: `${res.data.msg}`,
						           type: 'success'
						    });
					  }
				  })
			  }
		  },
		  created(){
			//   console.log(this.http)
		  }
	}
</script>

<style lang="scss" scoped>
	.Article_list{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		.content-ADD{
			flex: 1;
		    margin-top: 15px;
			background: #fff;
			border-radius: 5px;
			.title-s{
				width: 98%;
				height: 40px;
				margin: 5px 1%;
				font-size: 20px;
				border-bottom: 1px solid #ccc;				
			}
			.bt{
				width: 100%;
				height: 70px;
				margin: 15px 1%;
				margin-top: 20px;
				
				.bt-title{
					width: 100%;
					height: 30px;
					line-height: 30px;
					font-size: 14px;
				}
				.bt-title .bt-icon{
					line-height: 30px;
					color: red;
				}
				.bt-input{
					width: 45%;
					height: 35px;
				}
			}
			.zc_fl{
				width: 100%;
				height: 70px;
				margin: 1% 1%;
				display: flex;
				.rgiht{
					width: 45%;
					height: 100%;
					margin-left: 7%;
				}
				.left{
					width: 45%;
					height: 100%;
				}
				.zc_fl-title{
					width: 100%;
					height: 30px;
					line-height: 30px;
					font-size: 14px;
				}
				.zc_fl-title .zc_fl-icon{
					line-height: 30px;
					color: red;
				}
				.zc_fl-input{
					width: 100%;
					height: 35px;
				}
			}
			.describe{
				width: 100%;
				height: 90px;
				margin: 15px 1%;
				.describe-title{
					width: 100%;
					height: 30px;
					line-height: 30px;
					font-size: 14px;
				}
				.describe-input{
					width:97%;
					height: 60px;
				}	
			}
			.text-s{
				width: 100%;
				height: auto;
				.text-s-title{
					width: 96%;
					height: 30px;
					margin: 1%;		
				}
				.textarea__inner {
				    display: block;
				    resize: vertical;
				    padding: 5px 15px;
				    line-height: 1.5;
				    -webkit-box-sizing: border-box;
				    box-sizing: border-box;
				    width: 97%;
					height: 200px;
					margin: 1%;
				    font-size: inherit;
				    color: #606266;
				    background-color: #FFF;
				    background-image: none;
				    border: 1px solid #DCDFE6;
				    border-radius: 4px;
				    -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
				    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
				}
			}
			.Release{
				width: 100%;
				height: 40px;
				margin: 1%;
			}
			
		}
	}
</style>
