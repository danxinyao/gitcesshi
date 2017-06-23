// 打印

const PrintOrder = resolve => require(['views/print/order/index.vue'], resolve) // 订单打印

export default [
    {
        path: '/printOrder',
        name: 'printOrder',
        component: PrintOrder,
        meta: {
            title: '订单打印',
        }
    }
]