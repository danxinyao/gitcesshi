export default {
    demoList: (state) => state.demo.demoList,
    menusRecord: (state) => state.sysconfig.menusHancleRecord, // 菜单操作记录
    authToken: (state) => state.sysconfig.authToken, // 登录token
    regionStateList: state => state.basic.stateList, // 省
    sysImages: (state) => state.sysconfig.images, // 商家图片资源
    accountInfo: (state) => state.sysconfig.accountInfo // 登录者信息
}