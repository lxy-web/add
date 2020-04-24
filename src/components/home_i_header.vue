<template>
	<div class="header">
		<div class="h-item" v-for="(v,i) in list" :key="i">
			<span class="h-item-svn">
				<i :class="v.type"></i>
			</span>
			<span class="h-item-comtent">
				<span class="top">
					{{v.title}}
				</span>
				<span class="bottom">
					{{v.num}}
					<div v-html="v.html"></div>
				</span>
			</span>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				list:[
					{
						type:"icon icon-eye",
						title:"昨日浏览次数",
						num:"6,669",
						
					},
					{
						type:"icon icon-users",
						title:"总访问数",
						num:"12,896",
						
					},
					{
						type:"icon icon-plus",
						title:"总订阅数",
						num:"9,157",
						
					},
					{
						type:"icon icon-shopping-cart",
						title:"总收入数",
						num:"6,682",
						
					}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.header{
		width: 100%;
	    height: 120px;
		background: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 5px;
		.h-item{
			flex: 1;
			display: flex;
			height:100px;
			margin-top: 16px;
			margin-left: 20px;
			.h-item-svn{
				width:80px;
				height:80px;
				margin-left: 80px;
				background:rgba(236,250,255,1);
				border-radius: 50%;
				position: relative;
				.icon{
					width: 60px;
					height: 60px;
					font-size: 40px;    
					color:deepskyblue;
					position: absolute;
					line-height: 60px;
					top: 50%;
					left: 50%;
					transform: translate(-50%,-50%);
				}
			}
			.h-item-comtent{
				
				display: flex;
				width: 100px;
			    flex-direction: column;
				span{
			      width: 100%;
				  height: 20px;
				  line-height: 50px;
					.icon{
						width: 0px!important;
						height: 0px !important;
						border: 0px;
						font-size: 16px;
						background: skyblue;
						text-align: center;
					}
				}
				.bottom{
					font-size: 25px;
					margin-top: 4px;
				}
			}
		}
		
	}
</style>
