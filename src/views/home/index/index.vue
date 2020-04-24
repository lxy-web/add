<template>
	<div class="warpper">
		 <Header/>
		 <Datalist/>
		 <classiFied/>
		 <contentList/>
	</div>
</template>

<script>
	import h_i_header from "@/components/home_i_header.vue";
	import h_i_data from "@/components/home_index_Data_sheet.vue";
	import classiFied from "@/components/h_i_Classified_statistics.vue";
	import contentList from "@/components/h_I_content.vue";
	export default{
		components:{
			Header:h_i_header,
			Datalist:h_i_data,
			classiFied,
			contentList
		}
	}
</script>

<style lang="scss" scoped>
	.warpper{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
</style>
