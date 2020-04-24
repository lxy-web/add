<template>
	<el-breadcrumb class="header-utiles" separator-class="el-icon-arrow-right">
	  <el-breadcrumb-item class="one">{{handerData.oneName}}</el-breadcrumb-item>
	  <el-breadcrumb-item>{{handerData.twoName}}</el-breadcrumb-item>
	</el-breadcrumb>
</template>

<script>
	import {mapState} from "vuex";
	export default{
		computed:{
			 ...mapState(["handerData"]),
		}
	}
</script>

<style lang="scss" scoped>
	.header-utiles{
		background: #fff;
		width: 100%;
		height: 60px;
		line-height: 60px;
		border-radius: 5px;
		.one{
			text-indent: 20px;
		}
	}
</style>
