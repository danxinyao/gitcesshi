export const menuList = [
    // {
    //     path: '/',
    //     name: 'Demo',
    //     iconCls: 'xitongguanli',
    //     children: [
    //         {
    //             path: '/demo',
    //             name: 'Demo',
    //             iconCls: ''
    //         }
    //     ]
    // },
    {
        path: '/',
        name: '客户管理',
        iconCls: 'kehuguanli',
        children: [
            {
                path: '/team',
                name: '分销团队列表',
                iconCls: ''
            },
            {
                path: '/customer',
                name: '分销客户列表',
                iconCls: ''
            },
            {
                path: '/levelprice',
                name: '等级商品价',
                iconCls: ''
            }
        ]
    },
    {
        path: '/',
        name: '商品管理',
        iconCls: 'shangpinguanli',
        children: [
            {
                path: '/brand',
                name: '品牌列表',
                iconCls: ''
            },
            {
                path: '/goods',
                name: '商品列表',
                iconCls: ''
            },
            {
                path: '/qrcode',
                name: '二维码管理',
                iconCls: ''
            }
        ]
    },
    {
        path: '/',
        name: '订单管理',
        iconCls: 'dingdanguanli',
        children: [
            {
                path: '/checkorder',
                name: '待审核订单',
                iconCls: ''
            },
            {
                path: '/sendorder',
                name: '发货订单',
                iconCls: ''
            },
        ]
    },
    {
        path: '/',
        name: '财务管理',
        iconCls: 'caiwuguanli',
        children: [
            {
                path: '/account',
                name: '分销账户',
                iconCls: ''
            },
            {
                path: '/commissionreport',
                name: '佣金报表',
                iconCls: ''
            }
        ]
    },
    {
        path: '/',
        name: '返点管理',
        iconCls: 'fandianguanli',
        children: [
            {
                path: '/peersrebates',
                name: '平级返点',
                iconCls: ''
            },
            // {
            //    path: '/skiprebates',
           	//    name: '跨级返点',
            //    iconCls: ''
            // },
            // {
            //     path: '/myrebates',
            //     name: '个人业绩返点',
            //     iconCls: ''
            // },
            // {
            //     path: '/goodsrebates',
            //     name: '商品返点',
            //     iconCls: ''
            // }
        ]
    },
    {
        path: '/',
        name: '授权管理',
        iconCls: 'shouquanguanli',
        children: [
            {
                path: '/accreditstyle',
                name: '授权样式',
                iconCls: ''
            },
            {
                path: '/accreditlist',
                name: '授权列表',
                iconCls: ''
            },
        ]
    },
    {
        path: '/',
        name: '审核管理',
        iconCls: 'shenheguanli',
        children: [
            {
                path: '/auditregister',
                name: '注册审核',
                iconCls: ''
            },
            {
                path: '/auditupgrade',
                name: '升级审核',
                iconCls: ''
            },
            {
                path: '/auditwithdraw',
                name: '提现审核',
                iconCls: ''
            },
            // {
            //     path: '/auditrecharge',
            //     name: '充值审核',
            //     iconCls: ''
            // }
        ]
    },
    {
        path: '/',
        name: '业绩管理',
        iconCls: 'yejitongji',
        children: [
            {
                path: '/resultstatistics',
                name: '业绩统计',
                iconCls: ''
            },
        ]
    },
    // {
    //     path: '/',
    //     name: '系统管理',
    //     iconCls: 'xitongguanli',
    //     children: [
    //         {
    //             path: '/peersrebates',
    //             name: '全局控制',
    //             iconCls: ''
    //         }
    //     ]
    // },
]