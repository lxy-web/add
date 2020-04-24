<template>
	<div class="Article_list">
		<utilsHeader></utilsHeader>
		<div class="contents">
			 <el-tabs class="c-tabs" v-model="activeName" @tab-click="handleClick">
			    <el-tab-pane label="全部" name="first"></el-tab-pane>
			    <el-tab-pane label="已发布" name="second"></el-tab-pane>
			    <el-tab-pane label="审核中" name="third"></el-tab-pane>
			    <el-tab-pane label="已拒绝" name="fourth"></el-tab-pane>
			  </el-tabs>
		      <div class="c-list" >
				 <el-table
				     :data="list"
				     style="width: 100%">
				     <el-table-column
				       label="发布日期"
				       width="180">
				       <template slot-scope="scope">
				         <i class="el-icon-time"></i>
				         <span style="margin-left: 10px">{{ scope.row.date }}</span>
				       </template>
				     </el-table-column>
				     <el-table-column
				       label="作者"
				       width="180">
				       <template slot-scope="scope">
				         <el-popover trigger="hover" placement="top">				   
				           <div slot="reference" class="name-wrapper">
				             <el-tag size="medium">{{ scope.row.name }}</el-tag>
				           </div>
				         </el-popover>
				       </template>
				     </el-table-column>
					 <el-table-column
					   label="状态"
					   width="180">
					   <template slot-scope="scope">
					     <el-popover trigger="hover" placement="top">					       						   
					       <div slot="reference" class="name-wrapper">				       
							 <el-tag size="medium" v-if="scope.row.type==1">已发布</el-tag>
							 <el-tag size="medium" v-else-if="scope.row.type==0">审核中</el-tag>
							 <el-tag size="medium" v-else-if="scope.row.type==3">已拒绝</el-tag>
					       </div>
					     </el-popover>
					   </template>
					 </el-table-column>
					 <el-table-column
					   label="标题"
					   width="180">
					   <template slot-scope="scope">
					     <el-popover trigger="hover" placement="top">		
					       <div slot="reference" class="name-wrapper">
					         <el-tag size="medium">{{ scope.row.title }}</el-tag>
					       </div>
					     </el-popover>
					   </template>
					 </el-table-column>
				     <el-table-column label="操作">
				       <template slot-scope="scope">
				         <el-button
				           size="mini"
						   type="success"
						   :disabled="scope.row.type>0?true:false"
				           @click="handleEdit(scope.$index, scope.row)">同意</el-button>
				         <el-button
				           size="mini"
				           type="danger"
						    :disabled="scope.row.type>0?true:false"
				           @click="handleDelete(scope.$index, scope.row)">拒绝</el-button>
				       </template>
				     </el-table-column>
				   </el-table>
			  </div>
		</div>
	</div>
</template>

<script>
	// import axios from "axios"
	import utilsHeader from "@/components/utils_Breadcrumb.vue";
	export default {
		components:{
			utilsHeader
		},
		data() {
		      return {
		        activeName: 'first',
					  list:[]
		      };
		    },
		    methods: {
		      handleClick(tab, event) {
				this.utilsAjax(tab.index);//根据下标获取对应的数据
		      },
			  handleEdit(index, row) {
					 this.utilsModify(row.id,1);//请求同意接口
			  },
			  handleDelete(index, row) {
					  this.utilsModify(row.id,3);//请求同意接口
			  },
			  utilsAjax(type=0){
				  if(type==0){//如果等于0，说明要请求全部数据
					  this.http.get("http://127.0.0.1:7001/Articl_listAll"
					  ).then(res=>{					 					  
					  	 this.list=res.data.data;
					  }) 
				  }else if(type==2){
					  this.http.get("http://127.0.0.1:7001/Articl_listUnaudited"
					  ).then(res=>{					 					  
					  	 this.list=res.data.data;
					  }) 
				  }else{//如果不等于0 说明要查看所有的分类数据，审核或没有审核的
					 this.http.get("http://127.0.0.1:7001/Articl_list",{
					 		params:{
					 			type
					 			}
					 }).then(res=>{					 					  
					 	 this.list=res.data.data;
					 }) 
				  }
				 
			  },
			  utilsModify(id,type){
				 this.http.put("http://127.0.0.1:7001/Articl_list/Modify",{
				  			    id,
								type
						  }).then(res=>{
							 this.utilsAjax(0);		
				          })
			      }
		       },
			   created() {
				 this.utilsAjax(0);
			   }
	}
</script>

<style lang="scss" scoped>
	.Article_list{
		width: 100%;
		height: auto;
		.contents{
			width: 100%;
			height: auto;
			margin-top: 20px;
			background: #fff;
			border-radius: 5px;
			.c-tabs{
				margin: 2%;
			}
			.c-header{
				width: 98%;
				height: 40px;
				margin: 2%;
				    padding: 0;
				    background: #ebecf0;
				    color: #333;
				    font-weight: 400;
				    border: 1px solid #dcdee3;
					line-height: 40px;
					text-indent: 10px;
			}
			.c-list{
				width:98%;
				margin: 2%;
				min-height: 300px;
				border-bottom: 1px solid #dcdee3;
				
			}
		}
	}
	
	
</style>

