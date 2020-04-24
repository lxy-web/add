<template>
	<div class="Classified">
		<div class="Classified-left">
			<div class="left-item" v-for="(v,i) in listleft" :key="i" :style="v.background" :id="v.classS">
				<div class="headers">
				  <div class="titles">{{v.title}}</div>
				  <el-tag class="tags" :type="v.type">实时</el-tag>
				</div>
				<div class="contents">
					{{v.num}}
				</div>
				<div class="footers">
					<div class="bottom">{{v.num}}</div>
					<div class="top">{{v.text}}</div>
				</div>
			</div>
		</div>
		<div class="Classified-right">
			
				<div class="right-item" v-for="(v,i) in listright" :key="i" :style="v.background" :id="v.classS">
					<div class="headers">
					  <div class="titles">{{v.title}}</div>
					  <el-tag class="tags" :type="v.type">实时</el-tag>
					</div>
					<div class="contents">
						<div class="left">
							<div class="l-top">{{v.titlenum}}</div>
							<div class="l-bottom">{{v.titletext}}</div>
						</div>
						<div class="right">
							<div class="r-top">{{v.Likesnum}}</div>
							<div class="r-bottom">{{v.Likes}}</div>
						</div>
					</div>
		    </div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				listleft:[
					{
						title:"分类统计",
						num:"8,708",
						text:"当前分类总记录数",
						type:``,
						background:"background:#5e83fb;",
						classS:""
					},
					{
						title:"附件统计",
						num:"3,122",
						text:"当前上传附件数",
						type:`success`,
						background:"background:#f7da47;",
						classS:"tow"
					}
				],
				listright:[
					{
						title:"文章统计",
						titlenum:"908",
						titletext:"评论次数",
						Likes:"点赞次数",
						Likesnum:"263",
				        background:"background-color: rgb(88, 202, 154);",
						type:"success",
						classS:""
					},
					{
						title:"新闻统计",
						titlenum:"908",
						titletext:"评论次数",
						Likes:"点赞次数",
						Likesnum:"263",
						background:"background-color: rgb(238, 112, 109);",
						type:"dange",
						classS:"r-tow"
					}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.Classified{
		width:100%;
		height: 170px;
		// background: ;
		border-radius: 5px;
		margin-top: 20px;
		display: flex;	
		.Classified-left{
			width: 50%;
			height: 100%;
			display: flex;
			#tow{
				margin-left: 5%;
			}
			.left-item{
				width: 50%;
				height: 100%;
	            display: flex;
			    flex-direction: column;
				border-radius: 5px;	
			}
			.left-item .headers{
				width: 100%;
				height: 30px;
				display: flex;
				position: relative;
				
				.titles{
					color: #fff;
					font-size: 14px;
					margin: 5px;
					text-indent: 15px;
				}
				.tags{
					position: absolute;
					top: 7px;
					right: 7px;
					width: 50px;
					height: 26px;
					line-height: 26px;
					text-align: center;
					font-size: 12px;
				}
			}
			.left-item .contents{
				    margin: 10px 0;
				    font-size: 32px;
					color: #fff;
					font-weight: 600;
					text-indent: 15px;
				    flex: 1;
			}
			.left-item .footers{
				width: 100%;
				height: 60px;
				color: #fff;
				text-indent: 15px;
				.bottom{
					margin: 5px;	
				}
				.top{
					margin: 5px;
				}
			}
			
		}
		.Classified-right{
			width: 49%;
			height: 100%;
		    display: flex;
			margin-left: 2%; 
			#r-tow{
				margin-left: 4%; 
			}
			.right-item{
				width: 48%;
				height: 100%;
				margin: 0px 1%;
			    display: flex;
			    flex-direction: column;
				border-radius: 5px;	
			}
			.right-item .headers{
				width: 100%;
				height: 30px;
				display: flex;
				position: relative;
				.titles{
					color: #fff;
					font-size: 14px;
					margin: 5px;
					text-indent: 15px;
				}
				.tags{
					position: absolute;
					top: 7px;
					right: 7px;
					width: 50px;
					height: 26px;
					line-height: 26px;
					text-align: center;
					font-size: 12px;
				}
			}
			.right-item .contents{
				    margin: 10px 0;
					color: #fff;
				    flex: 1;
					display: flex;
					.left{
						width: 50%;
						height: 100%;
						text-align: center;
						.l-top{
							font-size: 32px;
							margin: 3px;
						}
						.l-bottom{
							font-size: 12px;
							margin: 3px;
						}
					}
					.right{
						width: 50%;
						height: 100%;
						text-align: center;
						.r-top{
							font-size: 32px;
							margin: 3px;
						}
						.r-bottom{
							font-size: 12px;
							margin: 3px;
						}
					}
			}
			
		}
	}
</style>
