<template>
	<div class="h-content">
		<div class="Article">
			<div class="titles">
				<span class="text">最新文章</span> 
				<router-link class="link-s" to="#">更多</router-link>
			</div>
			<div class="list">
				<p class="list-item" v-for="(v,i) in leftlist" :key="i">
					<router-link class="text" to="#">
						{{v.title+(i+1)}}
					</router-link>
					<router-link to="#" class="date-s">
						{{v.date+(i+1)}}
					</router-link>
				</p>
			</div>
		</div>
		<div class="comment">
			<div class="titles">
				<span class="text">最新评论</span> 
				<router-link class="link-s" to="#">更多</router-link>
			</div>
			<div class="list">
				<p class="list-item" v-for="(v,i) in rightlist" :key="i">
					<router-link class="text" to="#">
						
                       <div>{{v.title}}</div>
					   <div>{{v.date}}</div>
					</router-link>
					<router-link to="#" class="date-s">
						<div class="baders">{{v.value}}</div>
					</router-link>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	// import axios from "axios";
	export default {
		data(){
			return {
				leftlist:[
					
				],
				rightlist:[
					{
						title:"这是最新的评论",
						date:"2020-3-",
						value:12
					},
					{
						title:"这是文章的标题",
						date:"2020-3-",
						value:36
					},
					{
						title:"这是文章的标题",
						date:"2020-3-",
						value:41
					},
					{
						title:"这是文章的标题",
						date:"2020-3-",
						value:1
					},
					{
						title:"这是文章的标题",
						date:"2020-3-",
						value:9
					},
					{
						title:"这是文章的标题",
						date:"2020-3-",
						value:13
					}
				]
			}
		},
		created() {
			this.http.get("/Articl_listAll"
			).then(res=>{
				res.data.data.map(v=>{
					if(v.type==1){
						this.leftlist.push(v)
					}
				})
				 
			}) 
		}
	}
</script>

<style lang="scss" scoped>
	.h-content{
		width: 100%;
		height: auto;
		margin-top: 20px;
		display: flex;
		.titles{
			width: 100%;
			height: 40px;
			margin-top: 20px;
			position: relative;
			.text{
				font-size: 16px;
				font-weight: 700;
				margin-left: 20px;
			}
			.link-s{
					position: absolute;
					top: 0px;
					right: 20px;
			}
		}
		.Article{
			width: 50%;
			height: 100%;
			background: #fff;
			border-radius: 5px;
			.list{
				width: 100%;
				height: 100%;
				text-indent: 20px;
				.list-item{
					width: 100%;
					height: 30px;
					line-height: 30px;
					position: relative;
					margin: 5px 0px;
					
					.date-s{
						position: absolute;
						top: 0;
						right: 20px;
					}
				}
			}
		}
		.comment{
			width: 48.5%;
			height: 100%;
			margin-left: 2.5%;
			background: #fff;
			border-radius: 5px;
			.list{
				width: 100%;
				height: 100%;
				
				.list-item{
					width: 100%;
					height: 40px;
					line-height: 30px;
					position: relative;
					margin: 5px 0px;
					.text{
						text-indent: 20px;
						line-height: 22px;
					}
					.date-s{
						position: absolute;
						top: 0;
						right: 20px;
						.baders{
							position: absolute;
							top: 6px;
							right: 0;
							width: 24px;
							height: 24px;
							color: #fff;
							font-size: 12px;
							line-height: 24px;
							text-align: center;
							background: #ff3000;
							border-radius: 50px;
						}
					}
				}
			}
		}
	}
</style>
