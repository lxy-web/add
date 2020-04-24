<template>
	<div class="home">
		<el-container>
			  <el-header>
				<div class="header" >
					<span v-for="(v,i) in headerlist" class="header-span" :key="i">
						<i :class="v.type"></i>
						<router-link  :to="v.url" class="header-span-btn">{{v.title}}</router-link>
					</span>
					<div class="login">
						<img class="login-img" src="https://cdn.duitang.com/uploads/item/201410/21/20141021130151_ndsC4.jpeg" alt="">
						<el-row class="block-col-2">
						  <el-col :span="12">
						    <el-dropdown>
						      <span class="el-dropdown-link">
						        刘大流<i class="el-icon-arrow-down el-icon--right"></i>
						      </span>
						      <el-dropdown-menu slot="dropdown" >
						        <el-dropdown-item >设置</el-dropdown-item>
						        <el-dropdown-item @click.native="handleLogin()">退出</el-dropdown-item>
						      </el-dropdown-menu>
						    </el-dropdown>
						  </el-col>
						  	</el-row >
					</div>
				</div> 
			  </el-header>
		  <el-container>
		    <el-aside width="240px"><tab/></el-aside>
		    <el-main>
				<router-view>
					
				</router-view>
			</el-main>
		  </el-container>
		</el-container>
	</div>
</template>

<script>
	import h_a_tab from "@/components/home_aside_tab.vue"
	export default{
		components:{
			tab:h_a_tab
		},
		data(){
			return {
				headerlist:[
					{
						type:"icon icon-home",
						title:"首页",
						url:"/home"
					},
					{
						type:"icon icon-mail",
						title:"反馈",
						url:"/#"
					},
					{
						type:"icon icon-help-circle",
						title:"反馈",
						url:"/#"
					},
				]
			}
		},
		methods:{
			handleLogin(){
				
				this.$router.push("/login")
			},
			
		}
	}
</script>

<style scoped lang="scss">
	
	.home{
		width: 100%;
		height: 100%;
		.el-container{
			width: 100% !important;
			height: 100% !important;
		}
		.header{
			width: 31%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			position: absolute;
			top: 0px;
			right: 10px;
			.header-span{
				width: 100px;
				height: 40px;
				display: flex;
				margin-left: 5px;				
				.icon{
					flex: 1;
					font-size: 16px;
					line-height: 40px;
				}
				.header-span-btn{
					width: 80px;
					height: 100%;
					font-size: 16px;
					line-height: 40px;
					text-indent: -20px;
				}
			}
			.login{
				width:200px;
				height: 100%;
				position: relative;
				display: flex;
				.block-col-2{
					width: 123px;
					height: 100%;
					position: absolute;
					top: 0px;
					right: 0px;
					
				}
				.login-img{
					width: 60px;
					height: 60px;
					display: block;
					z-index: 1;
				}
				
			}
		}
	}
	.el-header, .el-footer {
	    background-color: #B3C0D1;
	    color: #333;
	    text-align: center;
	    line-height: 60px;
		position: relative;
		display: flex;
	  }
	  
	  .el-aside {
	    background-color: #D3DCE6;
	    color: #333;
	    text-align: center;
	    line-height: 200px;
	  }
	  
	  .el-main {
	    background-color: #E9EEF3;
	    color: #333;
	    // text-align: center;
	    // line-height: 160px;
	  }
	  
	  body > .el-container {
	    margin-bottom: 40px;
	  }
	  
	  .el-container:nth-child(5) .el-aside,
	  .el-container:nth-child(6) .el-aside {
	    line-height: 260px;
	  }
	  
	  .el-container:nth-child(7) .el-aside {
	    line-height: 320px;
	  }
	  .item {
		  margin-top: 10px;
		  margin-right: 40px;
       }
</style>
