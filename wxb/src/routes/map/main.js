import Main from '../../views/main/index.vue'
import Demo from '../../views/demo/customer.vue'

import dashboard from '../../views/dashboard/dashboard.vue' // 仪表盘页面

import customer from '../../views/customer/customerlist/customer.vue' // 分销客户列表
import levelprice from '../../views/customer/levelprice/levelprice.vue' // 等级商品价
import team from '../../views/customer/team/team.vue' // 分销团队列表

import brand from '../../views/goods/brand/brand.vue' // 品牌列表
import goods from  '../../views/goods/goods/goods.vue' // 商品列表
import sku from '../../views/goods/sku/sku.vue' // SKU列表
import qrcode from '../../views/goods/qrcode/qrcode.vue' // 二维码管理

import order from '../../views/order/order/order.vue' // 订单列表
import checkorder from '../../views/order/checkorder/checkorder.vue' // 待审核订单
import sendorder from '../../views/order/sendorder/sendorder.vue' // 发送订单
import courier from '../../views/order/courier/courier.vue' // 快递管理
import scancode from '../../views/order/scancode/scancode.vue' // 朔源扫码

import account from '../../views/finance/account/account.vue' // 分销账户
import commissionreport from '../../views/finance/commissionreport/commissionreport.vue' //佣金报表

import peersrebates from '../../views/rebates/peersrebates/peersrebates.vue' //平级返点
import skiprebates from '../../views/rebates/skiprebates/skiprebates.vue' // 跨级返点
import myrebates from '../../views/rebates/myrebates/myrebates.vue' // 个人业绩返点
import goodsrebates from '../../views/rebates/goodsrebates/goodsrebates.vue' // 商品返点

import accreditlist from '../../views/accredit/accreditlist/accreditlist.vue' // 授权列表
import accreditstyle from '../../views/accredit/accreditstyle/accreditstyle.vue' // 授权样式

import auditregister from '../../views/audit/auditregister/auditregister.vue' // 注册审核
import auditupgrade from '../../views/audit/auditupgrade/auditupgrade.vue' // 升级审核
import auditwithdraw from '../../views/audit/auditwithdraw/auditwithdraw.vue' // 提现审核
import auditrecharge from '../../views/audit/auditrecharge/auditrecharge.vue' // 充值审核

import resultstatistics from '../../views/result/resultstatistics/resultstatistics.vue' // 业绩统计

export default [
    {
        path: '/main',
        name: 'main',
        component: Main,
        meta: {
            title: '管理系统',
        },
        children: [
            {
                path: '/demo',
                name: 'demo',
                component: Demo,
                meta: {
                    title: 'DEMO'
                }
            },
            {
                path: '/dashboard',
                name: 'dashboard',
                component: dashboard,
                meta : {
                    title: '首页'
                }
            },
            {
                path: '/customer',
                name: 'customer',
                component: customer,
                meta: {
                    title: '分销客户列表',
                }
            },
            {
                path: '/levelprice',
                name: 'levelprice',
                component: levelprice,
                meta: {
                    title: '等级商品价',
                }
            },
            {
                path: '/team',
                name: 'team',
                component: team,
                meta: {
                    title: '分销团队列表',
                }
            },
            {
                path: '/brand',
                name: 'brand',
                component: brand,
                meta: {
                    title: '品牌列表',
                }
            },
            {
                path: '/goods',
                name: 'goods',
                component: goods,
                meta: {
                    title: '商品列表',
                }
            },
            {
                path: '/sku',
                name: 'sku',
                component: sku,
                meta: {
                    title: 'SKU列表',
                }
            },
            {
                path: '/qrcode',
                name: 'qrcode',
                component: qrcode,
                meta: {
                    title: '二维码管理',
                }
            },
            {
                path: '/order',
                name: 'order',
                component: order,
                meta: {
                    title: '订单列表'
                }
            },
            {
                path: '/checkorder',
                name: 'checkorder',
                component: checkorder,
                meta: {
                    title: '待审核订单'
                }
            },
            {
                path: '/sendorder',
                name: 'sendorder',
                component: sendorder,
                meta: {
                    title: '发货订单'
                }
            },
            {
                path: '/scancode',
                name: 'scancode',
                component: scancode,
                meta: {
                    title: '朔源扫码'
                }
            },
            {
                path: '/courier',
                name: 'courier',
                component: courier,
                meta: {
                    title: '快递管理'
                }
            },
            {
                path: '/account',
                name: 'account',
                component: account,
                meta: {
                    title: '分销账户',
                }
            },
            {
                path: '/commissionreport',
                name: 'commissionreport',
                component: commissionreport,
                meta: {
                    title: '佣金报表',
                }
            },
            {
                path: '/peersrebates',
                name: 'peersrebates',
                component: peersrebates,
                meta: {
                    title: '平级返点',
                }
            },
            {
                path: '/skiprebates',
                name: 'skiprebates',
                component: skiprebates,
                meta: {
                    title: '跨级返点',
                }
            },
            {
                path: '/myrebates',
                name: 'myrebates',
                component: myrebates,
                meta: {
                    title: '个人业绩返点',
                }
            },
            {
                path: '/goodsrebates',
                name: 'goodsrebates',
                component: goodsrebates,
                meta: {
                    title: '商品返点',
                }
            },
            {
                path: '/accreditlist',
                name: 'accreditlist',
                component: accreditlist,
                meta: {
                    title: '授权列表'
                },
            },
            {
                path: '/accreditstyle',
                name: 'accreditstyle',
                component: accreditstyle,
                meta: {
                    title: '授权样式'
                }
            },
            {
                path: '/auditregister',
                name: 'auditregister',
                component: auditregister,
                meta: {
                    title: '注册审核'
                }
            },
            {
                path: '/auditupgrade',
                name: 'auditupgrade',
                component: auditupgrade,
                meta: {
                    title: '升级审核'
                }
            },
            {
                path: '/auditwithdraw',
                name: 'auditwithdraw',
                component: auditwithdraw,
                meta: {
                    title: '提现审核'
                }
            },
            {
                path: '/auditrecharge',
                name: 'auditrecharge',
                component: auditrecharge,
                meta: {
                    title: '充值审核'
                }
            },
            {
                path: '/resultstatistics',
                name: 'resultstatistics',
                component: resultstatistics,
                meta: {
                    title: '业绩统计'
                }
            }
        ]
    }
]