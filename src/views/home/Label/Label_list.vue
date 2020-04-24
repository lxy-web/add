<template>
	<div class="C_list">
		 <utilsHeader></utilsHeader>
		 <div class="content_list">
			 <el-table
			    :data="tableData"
			    style="width: 100%">
			    <el-table-column
			      label="名称"
			      width="400">
			      <template slot-scope="scope">
			        <span style="margin-left: 10px">{{ scope.row.title }}</span>
			      </template>
			    </el-table-column>
			    <el-table-column
			      label="缩写名"
			      width="400">
			      <template slot-scope="scope">					
					    <span style="margin-left: 10px">{{ scope.row.name}}</span>					 
			      </template>
			    </el-table-column>
				<el-table-column
				  label="文章数"
				  width="400">
				  <template slot-scope="scope">
				    <el-popover trigger="hover" placement="top">
				      <div slot="reference" class="name-wrapper">
				        <el-tag size="medium">{{ scope.row.num }}</el-tag>
				      </div>
				    </el-popover>
				  </template>
				</el-table-column>
			    <el-table-column label="操作">
			      <template slot-scope="scope">
			        <el-button
			          size="mini"
			          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
			        <el-button
			          size="mini"
			          type="danger"
			          @click="handleDelete(scope.$index, scope.row )">删除</el-button>
			      </template>
			    </el-table-column>
			  </el-table>
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
		        tableData: [{
		          title: '前端',
		          name: 'frontEnd',
		          num: '11'
		        }, {
		          title: '后端',
		          name: 'backEnd',
		          num: '3'
		        }, {
		          title: '开发工具',
		          name: 'tool',
		          num: '5'
		        }, {
		          title: '数据库',
		          name: 'database',
		          num: '7'
		        }, {
		          title: '系统',
		          name: 'system',
		          num: '8'
		        },{
				  title: '服务器',
				  name: 'server',
				  num: '18'
				},
				{
				  title: '框架',
				  name: 'framework',
				  num: '28'
				},{
				  title: '其他',
				  name: 'other',
				  num: '52'
				},
				
				],
				
		      }
		    },
		    methods: {
		      handleEdit(index, row) {
		        console.log(index, row);
		      },
		      handleDelete(index, row) {
		        console.log(index, row);
		      }
		    }
	}
</script>

<style lang="scss" scoped>
	.C_list{
		width: 100%;
		height: 100%;
		display: flex;
	    flex-direction: column;
		.content_list{
			width: 100%;
			min-height: 200px;
			height: auto;
			margin-top: 1%;
			background: skyblue;
			border-radius: 5px;
		}
	}
</style>
