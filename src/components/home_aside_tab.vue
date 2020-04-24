<template>
		<el-col :span="12">
		    <el-menu
			background-color="rgba(0,0,0,.0)"
		      default-active="2"
		      class="el-menu-vertical-demo"
		      @open="handleOpen"
		      @close="handleClose"
			  router>
		      <el-submenu v-for="(v,i) in list" :key="i" :index="`${i+1}`">
		        <template slot="title">
		          <i :class="v.type"></i>
		          <span class="t-span">{{v.text}}</span>
		        </template>
		        <el-menu-item-group v-for="(vs,is) in v.goods" :key="is">
		          <el-menu-item @click="handleURl(v.text,vs.text)"  :index="`${vs.url}`" :data-id="`${i+1}-${is+1}`" >{{vs.text}}</el-menu-item>
		        </el-menu-item-group>
		      </el-submenu>
		    </el-menu>
		  </el-col>
</template>

<script>
	import {mapMutations} from "vuex"
	export default {
		data(){
			return {
				list:[
					{
						type:"icon icon-home",
						text:"首页",
						goods:[
							{
								text:"监控页",
								url:"/home/index"
							}
						]
					},
					{
						type:"icon icon-file-text",
						text:"文章管理",
						goods:[
							{
								text:"文章列表",
								url:"/home/Articllist"
							},
							{
								text:"添加文章",
								url:"/home/Articladd"
							}
						]
					},
					{
						type:"icon icon-grid",
						text:"分类管理",
						goods:[
							{
								text:"分类列表",
								url:"/home/Classifiedlist"
							},
							{
								text:"添加分类",
								url:"/home/Classifiedadd"
								
							}
						]
					},
					{
						type:"icon icon-paperclip",
						text:"标签管理",
						goods:[
							{
								text:"标签列表",
								url:"/home/Label_list"
							},
							{
								text:"添加标签",
								url:"/home/Label_add"
							}
						]
					},
					{
						type:"icon icon-user",
						text:"用户管理",
						goods:[
							{
								text:"用户列表",
								url:"/home/User_list"
							},
							{
								text:"添加用户",
								url:"/home/User_add"
							},
							{
								text:"修改密码",
								url:"/home/User_Modifyt"
							}
						]
					},
					{
						type:"icon icon-settings",
						text:"通用设置",
						goods:[
							{
								text:"基础设置",
								url:"/home/Currency_Basics"
							},
							{
								text:"菜单设置",
								url:"/home/Currency_Menu"
							},							
						]
					},
				]
			}
		},
	    methods: {
		  ...mapMutations(["setHaederDate"]),//映射vuex里面的函数
	      handleOpen(key, keyPath) {
	        console.log(key, keyPath);
	      },
	      handleClose(key, keyPath) {
	        console.log(key, keyPath);
	      },
		  handleURl(v,vs){//根据点击tab获取对应的名字
			  this.setHaederDate({oneName:v,twoName:vs});//移交vuex管理数据
		  }
	    }
	  }
</script>

<style lang="scss" scoped>
	.el-col-12 {
    width: 100%!important;
	height: 100%!important;
     }
	 .icon{
		 position: absolute;
		 top: 50%;
		 left: 76px;
		 transform: translate(-50%,-50%);
	 }
	 .t-span{
		 margin-left:10px;
		 padding: 5px;
		 font-size: 15px;
	 }
	 .el-submenu .el-menu-item {
	    
	     padding: 0px 27px!important;
	   
	 }
</style>
