<template>
	<utilsADD :obj="obj" ></utilsADD>
</template>

<script>
	import utilsADD from "@/components/Utils_add.vue";
	export default{
	    components:{
			utilsADD
		},
		data(){
			return{
				obj:{
					    title:"添加标签",
						name:"标签缩写",
						url:"/add_Label"
					}
			    } 
			}		
		}
	
</script>

<style lang="scss" scoped>

</style>