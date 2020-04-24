<template>
	<div class="user_list">
		 <utilsHeader> </utilsHeader>
		 <div class="contents">
		 	 <el-tabs class="c-tabs" v-model="activeName" @tab-click="handleClick">
		 	    <el-tab-pane label="全部" name="first"></el-tab-pane>
		 	    <el-tab-pane label="审核中" name="third"></el-tab-pane>
		 	  </el-tabs>
		       <div class="c-list" >
		 		 <el-table
		 		     :data="list"
		 		     style="width: 100%">
		 		     <el-table-column
		 		       label="ID"
		 		       width="180">
		 		       <template slot-scope="scope">
		 		         <i class="el-icon-time"></i>
		 		         <span style="margin-left: 10px">{{ scope.row.date }}</span>
		 		       </template>
		 		     </el-table-column>
		 		     <el-table-column
		 		       label="用户名"
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
		 			   label="邮箱"
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
		 			   label="用户组"
		 			   width="180">
		 			   <template slot-scope="scope">
		 			     <el-popover trigger="hover" placement="top">		
		 			       <div slot="reference" class="name-wrapper">
		 			         <el-tag size="medium">{{ scope.row.title }}</el-tag>
		 			       </div>
		 			     </el-popover>
		 			   </template>
		 			 </el-table-column>
					 <el-table-column
					   label="文章数"
					   width="180">
					   <template slot-scope="scope">
					     <el-popover trigger="hover" placement="top">		
					       <div slot="reference" class="name-wrapper">
					         <el-tag size="medium">{{ scope.row.title }}</el-tag>
					       </div>
					     </el-popover>
					   </template>
					 </el-table-column>
					 <el-table-column
					   label="评论数"
					   width="180">
					   <template slot-scope="scope">
					     <el-popover trigger="hover" placement="top">		
					       <div slot="reference" class="name-wrapper">
					         <el-tag size="medium">{{ scope.row.title }}</el-tag>
					       </div>
					     </el-popover>
					   </template>
					 </el-table-column>
					 <el-table-column
					   label="注册时间"
					   width="180">
					   <template slot-scope="scope">
					     <el-popover trigger="hover" placement="top">		
					       <div slot="reference" class="name-wrapper">
					         <el-tag size="medium">{{ scope.row.title }}</el-tag>
					       </div>
					     </el-popover>
					   </template>
					 </el-table-column>
					 <el-table-column
					   label="最后登陆时间"
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
	import utilsHeader from "@/components/utils_Breadcrumb.vue";
	export default{
		components:{
			utilsHeader
		},
		data(){
			  return {
				   activeName: 'first',
				  list:[]
			  }
		},
		methods:{
			handleClick(tab, event) {
							// this.utilsAjax(tab.index);//根据下标获取对应的数据
			},
			handleEdit(index, row) {
								 // this.utilsModify(row.id,1);//请求同意接口
			},
			handleDelete(index, row) {
								  // this.utilsModify(row.id,3);//请求同意接口
			},
		}
	}
</script>

<style lang="scss" scoped>
	.user_list{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
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
