<template>
    <el-table :data="list" highlight-current-row border style="width: 100%">
        <el-table-column align="center" prop="customer" label="客户姓名" width="100"></el-table-column>
        <el-table-column align="center" prop="teamname" label="团队" width="110"></el-table-column>
        <el-table-column align="center" prop="grade" label="等级" width="100"></el-table-column>
        <el-table-column align="center" prop="withdrawMoney" label="充值金额" width="100"></el-table-column>
        <el-table-column align="center" prop="applyTime" label="申请时间" width="100"></el-table-column>
        <el-table-column align="center" prop="leading" label="上级" width="100"></el-table-column>
        <el-table-column align="center" prop="erweima" label="打款凭证" max-width="130">
            <template scope="scope">
                <img src="" alt="">
            </template>            
        </el-table-column>
        <el-table-column align="center" prop="weChat" label="微信号" width="150"></el-table-column>
        <el-table-column align="center" prop="phone" label="手机号" width="130"></el-table-column>
        <el-table-column align="center" fixed="right" label="操作" width="150">
            <template scope="scope">
                <pg-button-group>
                    <pg-button  @click="enable(scope.row)" v-if="scope.row.flag != 99 || scope.row.flag != 100" icon="tongyi" title="同意" ></pg-button>
                    <pg-button  @click="disable(scope.row)" v-if="scope.row.flag != 99 || scope.row.flag != 100" icon="jujue" title="拒绝" ></pg-button>
                </pg-button-group>
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