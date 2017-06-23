<template>
    <pg-box :isShowBox="show" @close="close">
        <div class="box_title">{{title}}</div>
        <el-form ref="form" :model="form" label-width="100px" :rules="rules" :inline="true">
            <el-form-item label="所属团队" prop="distributorGroupID">
                  <el-select  v-model="form.distributorGroupID" placeholder="请选择">
                    <el-option
                      v-for="item in teamList"
                      :key="item.name"
                      :label="item.name"
                      :value="item.distributorGroupID">
                    </el-option>
                  </el-select>   
            </el-form-item>
            <br>
            <el-form-item label="参考指标" prop="configType">
                  <el-select  v-model="form.configType" placeholder="请选择">
                    <el-option
                      v-for="item in options.configTypeList"
                      :key="item.text"
                      :label="item.text"
                      :value="item.configType">
                    </el-option>
                  </el-select>                
            </el-form-item>

            <br>
            <el-form-item label="发放方式" prop="payMothod">
                  <el-select  v-model="form.payMothod" placeholder="请选择">
                    <el-option
                      v-for="item in options.payMothodList"
                      :key="item.text"
                      :label="item.text"
                      :value="item.payMothod">
                    </el-option>
                  </el-select>                
            </el-form-item>

            <br>
            <el-form-item label="备注" prop="note" style="width: 400px;">
                <el-input
                  type="textarea"
                  :rows="4"
                  placeholder="请输入内容"
                  v-model="form.note">
                </el-input>
              
            </el-form-item>            

            <br>
            <el-form-item label="返点设置"  width="600px" >
                <div class="bgColor" style="background-color: #EEF1F6;border: 1px solid #dfe6ec;border-bottom:none;">

                    <el-button style="margin:20px 0px 20px 20px" @click="addGoodsType">增加</el-button>

                    <el-table style="border:none;" :data="form.back">

                        <el-table-column   align="center"  fixed label="等级" width="150">
                                
                                <template scope="scope">
                                  <el-select placeholder="请选择" v-model="scope.row.t0">
                                    <el-option
                                      v-for="item in options.tuijianrenList"
                                      :key="item.value"
                                      :label="item.text"
                                      :value="item.text">
                                    </el-option>
                                  </el-select>
                                </template>
                        </el-table-column>

                        <el-table-column  align="center"  fixed  label="业绩范围" width="300">
                            <template scope="scope">
                                <p style="width: 48%;float: left">
                                  <el-input v-model="scope.row.t1"  placeholder="0" ></el-input>
                                </p>
                                <p style="width: 4%;float: left;text-align: center">
                                  -
                                </p>                            
                                <p style="width: 48%;float: left">
                                  <el-input v-model="scope.row.t1"  placeholder="0" ></el-input>
                                </p>
                                
                            </template>                     
                        </el-table-column>

                        <el-table-column align="center"  fixed  label="参数值" width="200">
                            <template scope="scope">
                                <el-input v-model="scope.row.t5" placeholder="1-100"></el-input>
                            </template>
                        </el-table-column>
                        <el-table-column align="center"  fixed  label="操作" width="150">
                            <template scope="scope">
                            <el-button v-if="scope.$index > 0" @click="delGoodsType(scope.$index)">删除</el-button>
                            </template>                    
                        </el-table-column>
                    </el-table>  
                </div>
            </el-form-item>   
            <br>
            <el-form-item class="el-form-item_btns">
                <el-button size="small" type="primary" @click="save">保存</el-button>
                <el-button size="small" @click="close">返回</el-button>
            </el-form-item>
        </el-form>
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
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>
