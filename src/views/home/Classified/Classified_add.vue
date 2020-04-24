<template>
	<utilsADD :obj="obj"></utilsADD>
</template>

<script>
	import utilsADD from "@/components/Utils_add.vue";
	export default{
	    components:{
		
			utilsADD
		},
		data(){
			return {
				obj:{
					    title:"添加分类",
						name:"分类缩写",
						url:"/add_class"
					}
			  }
		}		
		
	}
</script>

<style lang="scss" scoped>

</style>
