<template>
    <pg-box :isShowBox="show" @close="close">
        <div class="box_title">{{title}}</div>
        <!-- <el-form ref="form" :model="form" label-width="100px" :rules="rules" :inline="false" v-if="isEdit">
            <el-form-item label="批次号前缀" prop="batch">
                <el-input v-model="form.batch"></el-input>
            </el-form-item>
            <el-form-item label="起始值">
                <el-input v-model="form.startValue"></el-input>
            </el-form-item>
            <el-form-item label="箱数" prop="boxs">
                <el-input v-model="form.boxs"></el-input>
            </el-form-item>
            <el-form-item label="每箱数量" prop="Qty">
                <el-input v-model="form.Qty"></el-input>
            </el-form-item>
            <el-form-item label="备注">
                <el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="form.note"></el-input>
            </el-form-item>
            <br>
            <el-form-item class="el-form-item_btns">
                <el-button size="small" type="primary" @click="save"  v-if="isEdit">生成</el-button>
                <el-button size="small" @click="close">关闭</el-button>
            </el-form-item>
        </el-form> -->
        <!-- 查看 -->
        <div v-if="isEdit ===false">
            <div class="header">
                <p class="small">小码:{{form.parentCode}}</p>
                <p class="large">大码:{{form.code}}</p>
            </div>
            <div class="record">
                <h2 class="title">发货记录</h2>
                <div class="record_item" v-for="item in form.deliveryRecords">
                    <span class="time">{{item.time}}</span>
                    <span class="company">{{item.shipper}}</span>发货给
                    <span class="people">{{item.receiver}}</span>，<span>关联订单号：{{item.sheet}}</span>
                </div>
            </div>
            <!-- <div class="qr_record">
                <h2 class="title">二维码查询记录</h2>
                <div class="qr_record_item">
                    <span class="time">2017.5.6.11:45:20</span>
                    <span class="first">首次查询</span>
                    <span>IP:195.183.2.1</span>
                    <span>北京市三里屯</span>
                </div>
            </div> -->
            <br><br>
            <el-button size="small" @click="close">关闭</el-button>
        </div>
    </pg-box>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    .el-row {
        margin-top: 10px;
    }
    .remind {
        color: red;
        font-size: 12px;
    }
    p {
        padding: 0;
        margin: 0;
    }
    .header {
        background: #1F2D3D;
        color: #fff;
        padding: 10px 25px;
        margin-left: -20px;
        margin-bottom: 20px;
        font-size: 16px;
        .small {
            margin-bottom: 20px;
        }
    }
    .record {
        margin: 20px 10px;
        .title {
            font-weight: bold;
            color: #657385;
        }
        .record_item {
            margin-bottom: 15px;
            margin-left: 30px;
            .time {
                margin-right: 50px;
            }
            .company {
                margin-right: 20px;
            }
            .people {
                margin-left: 20px;
            }
        }
    }
    .qr_record {
        margin: 20px 10px;        
        .title {
            font-weight: bold;
            color: #657385;
        }
        .qr_record_item {
            margin-bottom: 15px;
            margin-left: 30px;
            .time {
                margin-right: 50px;
            }
            .first {
                margin-right: 50px;
            }
        }        
    }
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>
