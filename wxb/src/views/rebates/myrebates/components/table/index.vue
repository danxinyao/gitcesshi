<template>
    <el-table :data="list" highlight-current-row border style="width: 100%" @selection-change="selectChange">
        <el-table-column align="center" fixed="left" type="selection" width="55">
        </el-table-column>
        <el-table-column align="center" prop="teamName" label="所属团队" min-width="150"></el-table-column>
        <el-table-column align="center" prop="configTypeDesc" label="参考指标" min-width="150"></el-table-column>
        <el-table-column align="center" prop="payMothodDesc" label="发放方式" min-width="150"></el-table-column>
        <el-table-column align="center" prop="editTime" label="修改时间" min-width="150"></el-table-column>
        <el-table-column align="center" prop="editor" label="修改人" min-width="150"></el-table-column>
        <el-table-column align="center" prop="note" label="备注" min-width="150"></el-table-column>
        <el-table-column align="center" prop="statusDesc" label="状态" min-width="150"></el-table-column>
        <el-table-column align="center" fixed="right" label="操作" min-width="150">
            <template scope="scope">
                <!-- 一个按钮 -->
                <pg-button icon="xiugai" @click="edit(scope.row)"></pg-button>
            </template>
        </el-table-column>
    </el-table>
</template>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>