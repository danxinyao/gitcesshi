<template>
       <el-table :data="devList" highlight-current-row border style="width: 100%" @selection-change="selectChange">
          <!--  <el-table-column align="center" type="selection" fixed="left" width="55">
           </el-table-column> -->
           <el-table-column align="center" prop="code" label="编号" width="300">
           </el-table-column>  
           <el-table-column align="center" prop="name" label="快递公司" width="300">
           </el-table-column> 
           <el-table-column align="center" prop="note" label="备注" width="400">
           </el-table-column>
           <el-table-column align="center" fixed="right" label="操作" min-width="150">
               <template scope="scope">
                   <!-- 多个按钮 -->
                   <pg-button-group>
                       <pg-button icon="chakan" @click="edit(scope.row)"></pg-button>
                       <pg-button icon="xiugai" @click="del(scope.row)"></pg-button>
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
<style rel="stylesheet/less" lang="less" scoped>
    .skuTable {
        margin-left: 30px;
    }
    .goodsimg {
        width: 60px;
        // height: 60px;
        overflow: hidden;
        vertical-align: middle;
        margin: 10px 0;
        background: #F9FAFC;   
   }
</style>