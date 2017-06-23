<template>
    <pg-box :isShowBox="show" @close="close">
        <div class="box_title">{{title}}</div>

        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="商品返点" name="first">
                <el-form ref="form" :model="form" label-width="120px" :rules="rules" :inline="true">
                    <el-form-item label="所属团队" prop="distributorGroupID">
                          <el-select  v-model="form.teamnames" placeholder="请选择">
                            <el-option
                              v-for="item in teamList"
                              :key="item.name"
                              :label="item.name"
                              :value="item.distributorGroupID">
                            </el-option>
                          </el-select>   
                    </el-form-item>
                     <br>  
                    <el-form-item label="下单人等级" prop="indexs">
                          <el-select  v-model="form.indexs" placeholder="请选择">
                            <el-option
                              v-for="item in options.xiaJiList"
                              :key="item.value"
                              :label="item.text"
                              :value="item.value">
                            </el-option>
                          </el-select>                
                    </el-form-item>
                     <br>           
                    <el-form-item label="订单类型" prop="operType">
                          <el-select  v-model="form.operType" placeholder="请选择">
                            <el-option
                              v-for="item in options.operTypeList"
                              :key="item.text"
                              :label="item.text"
                              :value="item.operType">
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
                    <el-form-item label="推荐关系等级" prop="manner">
                          <el-select  v-model="form.scale" placeholder="请选择">
                            <el-option
                              v-for="item in options.scaleList"
                              :key="item.value"
                              :label="item.text"
                              :value="item.value">
                            </el-option>
                          </el-select>                
                    </el-form-item>
                    <br>

                    <el-form-item label="备注" prop="note" style="width: 400px;">
                        <el-input
                          type="textarea"
                          :autosize="{ minRows: 4, maxRows: 6}"
                          placeholder="请输入内容"
                          v-model="form.note">
                        </el-input>
                      
                    </el-form-item>            
                    <br>

                    <el-form-item class="el-form-item_btns">
                        <el-button size="small" type="primary" @click="save">保存</el-button>
                        <el-button size="small" @click="close">返回</el-button>
                    </el-form-item>
                </el-form>


            </el-tab-pane>

            <el-tab-pane label="返点设置" name="second"> 

                        <!-- 固定金额 和 不限 -->
                    <el-row v-if="form.configType == 2 && form.scale == 0">
                            <el-row :gutter="20">
                                <el-col :span="2">
                                    <div class="grid-content bg-purple" style="text-align: center;height: 30px;line-height: 30px;">货号</div>
                                </el-col>
                                <el-col :span="6">
                                    <div class="grid-content bg-purple-light">
                                        <el-input size="small" v-model="backForm.h" placeholder="货号">                            
                                        </el-input>
                                    </div>
                                </el-col>
                                <el-col :span="2">
                                    <div class="grid-content bg-purple" style="text-align: center;height: 30px;line-height: 30px;">名称</div>
                                </el-col>
                                <el-col :span="6">
                                    <div class="grid-content bg-purple-light">
                                        <el-input size="small" v-model="backForm.m" placeholder="名称">
                                        </el-input>
                                    </div>
                                </el-col>
                                
                            </el-row>

                            <el-row :gutter="20">
                                <el-col :span="12">
                                    <div class="grid-content">
                                        <el-button size ="small" @click="search">搜索</el-button>
                                        <el-button size ="small" @click="resetSearch">重置</el-button>                             
                                    </div>
                                </el-col>
                            </el-row>

                            <el-row :gutter="20">

                                 <el-col :span="22" >
                                    <div class="grid-content">
                                        <div class="table">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>分销商品货号</th>
                                                        <th>推荐关系-1</th>
                                                        <th>推荐关系-2</th>
                                                        <th>推荐关系-3</th>
                                                    </tr>                                                                                                           
                                                </thead>
                                                <tbody>
                                                    <tr v-for="item in form.back">
                                                        <td>{{item.goodsName}}</td>
                                                        <td v-for="n in item.rebateItems"><input class="inp" type="text" name="" :value="n.point"></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>              
                                    </div>
                                </el-col>
                            </el-row>
                        </el-row> 




                         <!-- 固定金额 和 指定  -->
                        <el-row v-if="form.configType == 2 && form.scale == 1">
                            <el-collapse v-model="activeNames" @change="handleChange" accordion>
                                <el-collapse-item v-for="(item,index) in options.agencyList" :title="item.text" :name="index+1">
                                    <div class="form">
                                        <span class="form-span">
                                            <label class="male" for="male">货号</label>
                                            <input class="text" type="text" name="sex" id="male" placeholder="请输入货号" />                                          
                                        </span>
                                        <span class="form-span">
                                            <label class="male" for="male">名称</label>
                                            <input class="text" type="text" name="sex" id="male" placeholder="请输入名称" />                                          
                                        </span>                                        
                                        <div>
                                            <a class="btn" href="javascript:;">搜索</a>
                                            <a class="btn" href="javascript:;">重置</a>
                                        </div>
                                    </div>
                                    <div class="table">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>分销商品货号</th>
                                                    <th>推荐关系-1</th>
                                                    <th>推荐关系-2</th>
                                                    <th>推荐关系-3</th>
                                                </tr>                                                                                                           
                                            </thead>
                                            <tbody>
                                                <tr v-for="item in form.back">
                                                    <td>{{item.goodsName}}</td>
                                                    <td v-for="n in item.rebateItems"><input class="inp" type="text" name="" :value="n.point"></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div> 
                                </el-collapse-item>
                            </el-collapse>  
                        </el-row>             

                        <!-- 商品金额 和 不限 -->
                        <el-row v-if="form.configType == 3 && form.scale == 0">
                            <el-row :gutter="20">
                                <el-col :span="2">
                                    <div class="grid-content bg-purple" style="text-align: center;height: 30px;line-height: 30px;">货号</div>
                                </el-col>
                                <el-col :span="6">
                                    <div class="grid-content bg-purple-light">
                                        <el-input size="small" v-model="backForm.h" placeholder="货号">                            
                                        </el-input>
                                    </div>
                                </el-col>
                                <el-col :span="2">
                                    <div class="grid-content bg-purple" style="text-align: center;height: 30px;line-height: 30px;">名称</div>
                                </el-col>
                                <el-col :span="6">
                                    <div class="grid-content bg-purple-light">
                                        <el-input size="small" v-model="backForm.m" placeholder="名称">
                                        </el-input>
                                    </div>
                                </el-col>
                            </el-row>
                            <el-row :gutter="20">
                                <el-col :span="12">
                                    <div class="grid-content">
                                        <el-button size ="small" @click="search">搜索</el-button>
                                        <el-button size ="small" @click="resetSearch">重置</el-button>                             
                                    </div>
                                </el-col>
                            </el-row>
                            <el-row :gutter="20">
                                 <el-col :span="22" >
                                    <div class="grid-content">
                                        <div class="table">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>分销商品货号</th>
                                                        <th>推荐关系-1</th>
                                                        <th>推荐关系-2</th>
                                                        <th>推荐关系-3</th>
                                                    </tr>                                                                                                           
                                                </thead>
                                                <tbody>
                                                    <tr v-for="item in form.back">
                                                        <td>{{item.goodsName}}</td>
                                                        <td v-for="n in item.rebateItems"><input class="inp" type="text" name="" :value="n.point"></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>                         
                                    </div>
                                </el-col>
                            </el-row>
                        </el-row>   

                         <!-- 固定金额 和 指定  -->
                        
                        <el-row v-if="form.configType == 3 && form.scale == 1" accordion>
                            <el-collapse v-model="activeNames" @change="handleChange">
                                <el-collapse-item  v-for="(item,index) in options.agencyList" :title="item.text" :name="index+1">
                                    <div class="form">
                                        <span class="form-span">
                                            <label class="male" for="male">货号</label>
                                            <input class="text" type="text" name="sex" id="male" placeholder="请输入货号" />                                          
                                        </span>
                                        <span class="form-span">
                                            <label class="male" for="male">名称</label>
                                            <input class="text" type="text" name="sex" id="male" placeholder="请输入名称" />                                          
                                        </span>                                        
                                        <div>
                                            <a class="btn" href="javascript:;">搜索</a>
                                            <a class="btn" href="javascript:;">重置</a>
                                        </div>
                                    </div>
                                    <div class="table">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>分销商品货号</th>
                                                    <th>推荐关系-1</th>
                                                    <th>推荐关系-2</th>
                                                    <th>推荐关系-3</th>
                                                </tr>                                                                                                           
                                            </thead>
                                            <tbody>
                                                <tr v-for="item in form.back">
                                                    <td>{{item.goodsName}}</td>
                                                    <td v-for="n in item.rebateItems"><input class="inp" type="text" name="" :value="n.point"></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div> 
                                </el-collapse-item>
                            </el-collapse>                        
                        </el-row>

                        <!-- 订单金额 和 不限  -->
                        <el-row v-if="form.configType == 1 && form.scale == 0">
                            <el-row :gutter="20">
                                <el-col :span="2"><div style="text-align: center" class="grid-content bg-purple">推荐关系-1</div></el-col>
                                <el-col :span="4"><div class="grid-content bg-purple-light"><el-input size="small" v-model="input" placeholder="1-100"></el-input></div></el-col>
                            </el-row>
                            <el-row :gutter="20">
                                <el-col :span="2"><div style="text-align: center" class="grid-content bg-purple">推荐关系-2</div></el-col>
                                <el-col :span="4"><div class="grid-content bg-purple-light"><el-input size="small" v-model="input" placeholder="1-100"></el-input></div></el-col>
                            </el-row>
                            <el-row :gutter="20">
                                <el-col :span="2"><div style="text-align: center" class="grid-content bg-purple">推荐关系-3</div></el-col>
                                <el-col :span="4"><div class="grid-content bg-purple-light"><el-input size="small" v-model="input" placeholder="1-100"></el-input></div></el-col>
                            </el-row>

                        </el-row>

                        <!-- 订单金额 和 指定  -->
                        <el-row v-if="form.configType == 1 && form.scale == 1" accordion>
                            <el-collapse v-model="activeNames" @change="handleChange">
                                <el-collapse-item  v-for="(item,index) in options.agencyList" :title="item.text" :name="index+1">
                                    <el-row :gutter="20">
                                        <el-col :span="2"><div style="text-align: center" class="grid-content bg-purple">推荐关系-1</div></el-col>
                                        <el-col :span="4"><div class="grid-content bg-purple-light"><el-input size="small" v-model="input" placeholder="1-100"></el-input></div></el-col>
                                    </el-row>
                                    <el-row :gutter="20">
                                        <el-col :span="2"><div style="text-align: center" class="grid-content bg-purple">推荐关系-2</div></el-col>
                                        <el-col :span="4"><div class="grid-content bg-purple-light"><el-input size="small" v-model="input" placeholder="1-100"></el-input></div></el-col>
                                    </el-row>
                                    <el-row :gutter="20">
                                        <el-col :span="2"><div style="text-align: center" class="grid-content bg-purple">推荐关系-3</div></el-col>
                                        <el-col :span="4"><div class="grid-content bg-purple-light"><el-input size="small" v-model="input" placeholder="1-100"></el-input></div></el-col>
                                    </el-row>                                
                                </el-collapse-item>
                            </el-collapse> 
                        </el-row>                       
                    <br>

                        <el-row :gutter="20">
                            <el-col :span="12">
                                <div class="grid-content bg-purple">
                                    <el-button size="small" type="primary" @click="saveBack">保存</el-button>
                                    <el-button size="small" @click="close">返回</el-button>
                                </div>
                            </el-col>
                        </el-row>
            </el-tab-pane>
        </el-tabs>

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
    .form {
        width: 100%;
        .form-span {

            display: inline-block;
            width: 350px;
            .male {
                text-align: right;
                vertical-align: middle;
                float: left;
                font-size: 14px;
                color: #48576a;
                line-height: 1;
                padding: 11px 12px 11px 0;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box
            }
            .text {
                    height: 30px;
                    border-color: #8391a5;
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                    background-color: #fff;
                    background-image: none;
                    -webkit-border-radius: 4px;
                    -moz-border-radius: 4px;
                    border-radius: 4px;
                    border: 1px solid #bfcbd9;
                    -webkit-box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    box-sizing: border-box;
                    color: #1f2d3d;
                    display: block;
                    font-size: inherit;
                    height: 36px;
                    line-height: 1;
                    outline: 0;
                    padding: 3px 10px;
                    -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
                    -o-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
                    -moz-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
                    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
                    width: 80%;                 
            }
            .text:focus {
                outline: 0;
                border-color: #20a0ff;                 
            }
        }
        .form-span:after {
            clear: both;
            display: block;
            content: "";
        }
        div {
            width: 100%;
            padding: 10px 0 10px 0;
            .btn {
                display: inline-block;
                line-height: 1;
                white-space: nowrap;
                cursor: pointer;
                background: #fff;
                border: 1px solid #bfcbd9;
                color: #1f2d3d;
                margin: 0;
                padding: 10px 15px;
                -webkit-border-radius: 4px;
                -moz-border-radius: 4px;
                border-radius: 4px;                
            }
        }
    }
    .table {
        width: 100%;
        padding: 30px;
        background: #EFF2F7;
        table {
            width: 100%;
            text-align: center;
            .inp {
                    height: 30px;
                    border-color: #8391a5;
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                    background-color: #fff;
                    background-image: none;
                    -webkit-border-radius: 4px;
                    -moz-border-radius: 4px;
                    border-radius: 4px;
                    border: 1px solid #bfcbd9;
                    -webkit-box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    box-sizing: border-box;
                    color: #1f2d3d;
                    display: block;
                    font-size: inherit;
                    height: 36px;
                    line-height: 1;
                    outline: 0;
                    padding: 3px 10px;
                    -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
                    -o-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
                    -moz-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
                    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
                    width: 80%;                    
            }
            .inp:focus {
                outline: 0;
                border-color: #20a0ff; 
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
