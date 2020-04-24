<template>
	<div class="data_list">
         <header class="header">
			 用户活跃趋势
		 </header>
		 <div class="content">
			 <div class="left">
				  <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
			 </div>
			 <div class="right">
				<div class="right-item" v-for="(v,i) in list" :key="i">
					<div class="r-h-icon">
						<i :class="v.type"></i>
					</div>
					<div class="r-h-content">
						<div class="r-h-c-string">
							{{v.name}}
						</div>
						<div class="r-h-c-num">
							{{v.num}}
						</div>
					</div>
				</div>
			 </div>
		 </div>
	</div>
</template>

<script>
	export default{
		 data () {
		      this.chartSettings = {
		       
		        dimension: ['日期']
		      }
		      return {
		        chartData: {
		          columns: ['日期', '访问用户'],
		          rows: [
		            { '日期': '1月', '访问用户': 1393},
		            { '日期': '2月', '访问用户': 3530 },
		            { '日期': '3月', '访问用户': 2923},
		            { '日期': '4月', '访问用户': 1723},
		            { '日期': '5月', '访问用户': 3792},
		            { '日期': '6月', '访问用户': 4593},
					{ '日期': '7月', '访问用户': 1393},
					{ '日期': '8月', '访问用户': 3530 },
					{ '日期': '9月', '访问用户': 2923},
					{ '日期': '10月', '访问用户': 1723},
					{ '日期': '11月', '访问用户': 3792},
					{ '日期': '12月', '访问用户': 4593}
		          ]
		        },
				list:[
					{
						name:"今日注册",
						num:"12378",
						type:"icon icon-users"
					},
					{
						name:"今日登录",
						num:"22139",
						type:"icon icon-user"
					},
					{
						name:"今日订阅",
						num:"22139",
						type:"icon icon-plus-square"
					},
					{
						name:"今日评论",
						num:"22139",
						type:"icon icon-message-square"
					},
					{
						name:"七日新增",
						num:"25%",
						type:"icon icon-user-plus"
					},
					{
						name:"七日活跃",
						num:"68%",
						type:"icon icon-trending-up"
					},
						
				]
		      }
		    }
	}
</script>

<style lang="scss" scoped>
	.data_list{
		width: 100%;
		height: 400px;
		background:#fff;
		margin-top: 15px;
		border-radius: 5px;
		display: flex;
		flex-direction: column;
		.header{
			width: 96%;
			height: 50px;
			margin:0px 2%;
			border-bottom: 1px solid #ccc;
			line-height: 50px;
			text-indent: 10px;
			font-weight: 600;
		}
		.content{
			flex: 1;
			display: flex;
			.left{
				width: 70%;
				height: 100%;
			}
			.right{
				width: 26%;
				height: 71%;
				margin-left:4%;
				display: flex;
				flex-wrap: wrap;
				margin-top: 51px;
				.right-item{
					width: 50%;
					height: 50px;
					display: flex;
					margin-top: 10px;
                    .r-h-icon{
						width: 50px;
						height: 50px;
						position: relative;
					}
					.r-h-icon .icon{
						width: 100%;
						height: 100%;
						font-size: 36px;
						color: #1861d5;
						line-height: 50px;
						text-align: center;
					}
					.r-h-content{
						flex: 1;
						display: flex;
						flex-direction: column;
						text-indent: 4px;
					}
					.r-h-content .r-h-c-string{
						width: 100%;
						height: 46%;
						margin:2px ;
						font-size: 12px;
					}
					.r-h-content .r-h-c-num {
						width: 100%;
						height: 46%;
						margin:2px ;
						font-size: 20px;
						color: #1861d5;
					}
				}
			}
		}
	}
</style>
