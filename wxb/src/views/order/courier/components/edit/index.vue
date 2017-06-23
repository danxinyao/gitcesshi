<template>
    <pg-box :isShowBox="show" @close="close">
        <div class="box_title">{{title}}</div>
        <el-form ref="form" :model="form" label-width="100px">
            <el-form-item label="编号">
                <el-input v-model="form.code" placeholder="请输入编号" class="input_item"></el-input>
            </el-form-item>
            <el-form-item label="快递公司">
                <el-input v-model="form.name" placeholder="请输入品牌名称" class="input_item"></el-input>
            </el-form-item>
            <el-form-item class="el-form-item_btns">
                <el-button size="small" type="primary" @click="save">保存</el-button>
                <el-button size="small" @click="close">返回</el-button>
            </el-form-item>
        </el-form>
    </pg-box>
</template>

<style rel="stylesheet/less" lang="less">
    .input_item {
        width: 200px;
    }
</style>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>
