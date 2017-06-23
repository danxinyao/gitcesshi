<template>
    <div class="source">
        <div>
            <ul class="el-uplaod-list el-upload-list--picture-card">
                <li class="el-upload-list__item is-success" v-for="file in fileList">
                    <transition name="el-fade-in-linear">
                        <pg-img class="el-upload-list__item-thumbnail" :src="file.imgUrl" v-if="file.isSuccess"></pg-img>
                    </transition>
                    <transition name="el-fade-in-linear">
                        <div class="el-loading-spinner" v-if="!file.isSuccess">
                            <svg viewBox="25 25 50 50" class="circular">
                                <circle cx="50" cy="50" r="20" fill="none" class="path"></circle>
                            </svg>
                        </div>
                    </transition>
                    <span class="el-upload-list__item-actions" v-if="file.imgUrl">
                        <span class="el-upload-list__item-delete" @click="handleRemove(file)">
                            <i class="el-icon-delete2"></i>
                        </span>
                    </span>
                </li>
            </ul>
            <div 
                class="el-upload el-upload--text"
                @click="handleClick" v-show="isShowUpload">
                <span class="avatar-img-size-tip">{{tip}}</span>
                <i class="el-icon-plus avatar-uploader-icon"></i>
                <input 
                    type="file" 
                    name="file" 
                    class="__input" 
                    @change="handleChange" 
                    ref="input" 
                    :multiple="multiple"
                    :accept="accept">
            </div>
        </div>
    </div>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '../../assets/styles/_variables';
    .source {
        padding: 24px 24px 0 0;
    }
    .el-upload-list--picture-card .el-upload-list__item {
        width: 100px;
        height: 100px;
    }
    .avatar-img-size-tip {
        font-size: 12px;
        color: red;
        position: absolute;
        bottom: 40%;
        left: 0;
        height: 30px;
        text-align: center;
        width: 100%;
    }
    .el-upload {
        background: #fbfdff;
        border: 1px dashed #d9d9d9;
        border-radius: 5px;
        box-sizing: border-box;
        width: 100px;
        height: 100px;
        line-height: 98px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        vertical-align: top;
    }
    .el-upload:hover {
        border-color: #20a0ff;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 100px;
        height: 100px;
        line-height: 98px;
        text-align: center;
    }
    .__input {
        display: none;
    }
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>