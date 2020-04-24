<template>
	<div class="Currency_Menu">
		<utilsHeader></utilsHeader>
	</div>
	
</template>

<script>
	import utilsHeader from "@/components/utils_Breadcrumb.vue";
	export default {
		components:{
			utilsHeader
		}
	}
</script>

<style lang="scss" scoped>
	.Currency_Menu{
		width: 100%;
		height: 100%;
		display: flex;
	}
</style>
