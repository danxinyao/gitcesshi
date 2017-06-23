<template>
	<!-- 订单管理 - 快递管理 -->
	<div class="courier">
		<!-- 搜索条件 -->
		<pg-search-form
            v-model="query"
            :default-form="defaultQuery"
            :more="moreQuery"
            :is-show-more="isShowMoreQuery"
            @openMore="toggleOpen"
            slot="search-form"
            @search="search">
        </pg-search-form>
        <div class="pg_content">
			<!-- 按钮 -->
            <pg-operations 
             	:btns="operations" 
             	@add="add" 
            >
            </pg-operations>
			<!-- 列表 -->
	        <pg-table 
	            :list="orderList"
	            @select-change="selectChange"
	            @edit="edit"
	            @del="del"
	        >
	        </pg-table>
            <pg-pagination slot="pagination" @size-change="sizeChange" @current-change="currentChange" :page-size="pageSize" :total="total"></pg-pagination>
        </div>
        <!-- 编辑弹窗页 -->
        <pg-edit :title="editTitle" :show="showEdit" :isEdit="isEdit" :editForm="editForm" @close="closeEdit"></pg-edit>
	</div>
</template>

<style type="stylesheet/less" lang="less" scoped>
	@import '../../../assets/styles/_variables.less';
	
	.courier {

	}
</style>

<script type="text/babel">
	import courier from './courier'

	export default {
		...courier
	}
</script>