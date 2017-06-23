import PgTable from './components/table/index.vue'
import { audit as ajax } from '../../../services'

export default {
    components: {
        PgTable,
    },
    data() {
        return {
            isShowMoreQuery: false, // 搜索区是否显示更多
            // 搜索条件
            query: {
                customer: '',//客户姓名
                distributorGroupID: '',//团队
                grade: '',//等级
                withdrawMoney: '',//提现金额
                applyTime: '',//申请时间
                leading: '',//上级
                erweima: '',//收款二维码
                weChat: '',//微信号
                phone: '',//手机号
            },
            // 重置搜索条件
            resetForm: {
                customer: '',//客户姓名
                distributorGroupID: '',//团队
                grade: '',//等级
                withdrawMoney: '',//提现金额
                applyTime: '',//申请时间
                leading: '',//上级
                erweima: '',//收款二维码
                weChat: '',//微信号
                phone: '',//手机号
            },
            page: 1, // 当前页码
            pageSize: 15, // 每页条数
            total: 40, // 总条数
            selected: [],
            editTitle: '编辑', // 新增/修改标题
            editForm: {}, // 新增/修改数据
            isEdit: false, // 是否新增
            //showEdit: false, // 是否显示新增弹出窗口
            isShowGoods: false, // 是否显示商品列表弹出框
            teamList: [],//团队下拉列表数据
            // 操作区按钮
            operations: [
                {
                    name: '待公司审核',
                    action: 'add',
                    type: 'default'
                },
                {
                    name: '已完成',
                    action: 'leadIn',
                    type: 'default'
                },
                {
                    name: '已拒绝',
                    action: 'educe',
                    type: 'default'
                }
            ],
            //列表模拟数据
            customerList: [
                {
                    id: 1,
                    customer: '客户姓名',//客户姓名
                    teamname: '团队',//团队
                    grade: '等级',//等级
                    withdrawMoney: '提现金额',//提现金额
                    applyTime: '2017-10-10 12:00',//申请时间
                    leading: '上级',//上级
                    erweima: '收款二维码',//收款二维码
                    weChat: 'dinwu',//微信号
                    phone: '13183015306',//手机号
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
                        label: '客户姓名',
                        model: 'customer'
                    },
                    {
                        type: 'input',
                        label: '上级',
                        model: 'referee',
                    }
                ]
            }
        },
        //搜索区显示更多
        moreQuery: {
            get() {
                return [
                    {
                        type: 'select',
                        label: '申请团队',
                        model: 'distributorGroupID',
                        text: 'name',
                        value: 'distributorGroupID',
                        options: this.teamList
                    },
                    {
                        type: 'input',
                        label: '手机号',
                        model: 'phone'                            
                    },
                    {
                        type: 'input',
                        label: '微信号',
                        model: 'weChat'                            
                    },
                    {
                        type: 'timeRange',
                        label: '申请时间',
                        model: 'applyTime'                            
                    },
                ]
            }
        }
    },
    mounted(){
        this.getTeamList()//加载获取团队下拉列表
    },
    methods: {
        //获取团队列表
        getTeamList(){
            let query=  {
                code: '',
                name: '',
                editor: '',
                time:'',
                beginEditTime:'',
                endEditTime:'',
                status: '1',
                note:'',
            };
            ajax.queryTeamList(1,100,query).
              then((result)=>{
                  if(result){
                      this.teamList = result.dataList;
                  }
            });
        },
        // 搜索区显示更多
        toggleOpen(isShow) {
            this.isShowMoreQuery = isShow
        },
        // 搜索按钮
        search() {
            this.page = 1
            //this.getDecorationEffects()
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
        //展现那种列表
        handleClick(btn){
            console.log(btn)
        },

    }
}