// 返点管理 - 所有数据操作接口
import ajax from '../fetch'

export default {
    /**
     * 获取同级推荐返点设置-分页列表
     * @param  {[type]} data [description]
     */
     selectSibIntroConfig(data) {
        return ajax({
            url: '/DistributorRebateConfig/SelectSibIntroConfigListPage',
            method: 'post',
            body: data
        })
    }, 
    /**
     * 获取跨级推荐返点设置-分页列表
     * @param {[type]} query    [description]
     * @param {[type]} page     [description]
     * @param {[type]} pageSize [description]
     */
     selectSkipLevelIntroConfig(data) {
        return ajax({
            url: '/DistributorRebateConfig/SelectSkipLevelIntroConfigListPage',
            method: 'post',
            body: data
        })
    }, 
    /**
        更新（跨级/平级）推荐返点设置-启用状态
     * [UpdateIntroConfigStatus description]
     * @param {[type]} data [description]
     */
     UpdateIntroConfigStatus(data) {
        return ajax({
            url: '/DistributorRebateConfig/UpdateIntroConfigStatus',
            method: 'post',
            body: data
        })
    }, 
    /*
    **个人业绩返点列表
    */
    selectPersonConfigListPage(data){
        return ajax({
            url: '/DistributorRebateConfig/SelectPersonConfigListPage',
            method: 'post',
            body: data
        })
    },
    /*
    **商品返点列表
    */
    selectGoodsConfigListPage(data){
        return ajax({
            url: '/DistributorRebateConfig/SelectGoodsConfigListPage',
            method: 'post',
            body: data
        })
    },    
    /**
     * 查询团队列表
     */
    queryTeamList(Page,PageSize,Condition){
        return ajax({
            url: '/Group/SelectBasDistributorGroupListPage',
            method: 'post',
            body:{ Page:Page,
                PageSize:PageSize,
                Condition:Condition
                }
        })
    },
    /*
    **获取（跨级/平级）推荐返点设置详情
     */
    getIntroConfigDetail(id){
        return ajax({
            url: '/DistributorRebateConfig/GetIntroConfigDetail?id='+id,
            method: 'get',
        })
    },
    /**根据团队ID获取该团队等级列表
     * [getBasCustomerGradeList description]
     * @param  {[type]} data [description]
     * @return {[type]}      [description]
     */
    getBasCustomerGradeList(distributorGroupID){
        return ajax({
            url: '/Group/GetBasCustomerGradeList?distributorGroupID=' +distributorGroupID,
            method: 'get',
        })
    },
    /*
     * 保存推荐返点设置
     * @param  {[type]} data [description]
     * @return {[type]}      [description]
     */
    saveIntroConfig(data) {
        return ajax({
            url: '/DistributorRebateConfig/SaveIntroConfig',
            method: 'post',
            body: data
        })
    },
    //获取推荐返点设置-基础模型
    getIntroConfigBaseModel(data){
        return ajax({
            url: '/DistributorRebateConfig/GetIntroConfigBaseModel',
            method: 'get',
            body: data
        })
    },
    //获取推荐返点设置-基础模型
    getIntroConfigBaseModel(id){
        return ajax({
            url: '/DistributorRebateConfig/GetIntroConfigBaseModel?id=' +id,
            method: 'get',
        })
    },
    //获取推荐返点设置-商品模型
    getIntroConfigGoodsModel(id){
        return ajax({
            url: '/DistributorRebateConfig/GetIntroConfigGoodsModel?id=' +id,
            method: 'get',
        })
    },
     //保存推荐返点设置项
    saveIntroConfigItemBaseModel(data){
        return ajax({
            url: '/DistributorRebateConfig/SaveIntroConfigItemBaseModel',
            method: 'post',
            body: data
        })
    },
}
