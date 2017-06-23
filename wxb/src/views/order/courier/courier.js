import PgTable from './components/table/index.vue'
import PgEdit from './components/edit/index.vue'
export default {
    components: {
        PgTable,
        PgEdit,
    },
    data() {
        return {
            isShowMoreQuery: false, // 搜索区是否显示更多
            // 搜索条件
            query: {
                orderNu: '',
                consignee: '',
                creatime: '',
                submitter: '',          
                note: '',
            },
            page: 1, // 当前页码
            pageSize: 15, // 每页条数
            total: 10, // 总条数
            selected: [],
            editTitle: '编辑', // 新增/修改标题
            editForm: {}, // 新增/修改数据
            isEdit: false, // 是否新增
            showEdit: false, // 是否显示新增弹出窗口
            // 操作区按钮
            operations: [  
                {
                    name: '新增',
                    action: 'add',
                    type: 'primary'
                },
            ],
            orderList: [],
            markList: [
            	{
                    text: '已打印未扫描',
                    value: 0
                },
                {
                    text: '未打印未扫描',
                    value: 1
                },
                {
                    text: '未打印已扫描',
                    value: 2
                },
                {
                    text: '已打印已扫描',
                    value: 3
                }, 
            ],
        }
    },
	computed: {
        // 搜索区默认显示
        defaultQuery: {
            get() {
                return [
                    {
                        type: 'input',
                        label: '订单号',
                        model: 'orderNu'
                    },
                    {
                        type: 'input',
                        label: '收货人',
                        model: 'consignee'
                    }
                ]
            }
        },
        moreQuery: {
            get() {
                return [
                	{
                        type: 'time',
                        label: '下单时间',
                        model: 'creatime',
                    },
                    {
                        type: 'input',
                        label: '提交人',
                        model: 'submitter',
                    },
                    {
                        type: 'input',
                        label: '备注',
                        model: 'note',
                    },
                ]
            }
        }
    },
    methods: {
        // 搜索区显示更多
        toggleOpen(isShow) {
            this.isShowMoreQuery = isShow
        },
        // 搜索按钮
        search() {
            this.page = 1
            this.getDecorationEffects()
        },
        // 全选
        selectChange(selections) {
            this.selected = selections
            console.log(selections)
        },
        // 分页-当前页数更新触发
        currentChange(current) {
            this.page = current
        },
        // 分页-每页条数更改时触发
        sizeChange(size) {
            this.pageSize = size
        },
        // 修改快递公司
        edit(item) {
            this.showEdit = true
            this.isEdit = false
            this.editTitle = '修改快递公司'
            this.editForm = item
        },
        // 新增快递公司
        add() {
            console.log('新增')
            this.showEdit = true
            this.isEdit = true
            this.editTitle = '新增快递公司'
            this.editForm = {}
        },
        // 删除快递公司
        del(item) {
            console.log(item)
        },
        // 导出订单信息
        exportOrder() {
            console.log('导出订单信息')
        },
        // 确认订单
        saveOrder() {
        	console.log('确认订单')
        },
        // 取消订单
        cancelOrder() {
        	console.log('取消订单')

        },
        // 关闭弹出窗口
        closeEdit() {
            this.showEdit = false
        },
    }
}