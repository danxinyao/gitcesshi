<template>
    <el-table :data="list" highlight-current-row border style="width: 100%" @selection-change="selectChange">
        <el-table-column align="center" fixed="left" type="selection" width="55">
        </el-table-column>
        <el-table-column align="center" prop="teamName" label="所属团队" width="300"></el-table-column>
        <el-table-column align="center" prop="gradeName" label="收佣客户名称" width="300"></el-table-column>
        <el-table-column align="center" prop="teamnames" label="付佣客户名称" width="300"></el-table-column>
        <el-table-column align="center" prop="teamnames" label="佣金类型" width="300"></el-table-column>
        <el-table-column align="center" prop="teamnames" label="金额" width="300"></el-table-column>
        <el-table-column align="center" prop="teamnames" label="结余" width="300"></el-table-column>
        <el-table-column align="center" prop="teamnames" label="时间" width="300"></el-table-column>
        
    </el-table>
</template>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>