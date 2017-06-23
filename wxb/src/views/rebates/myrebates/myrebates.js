import PgTable from './components/table/index.vue'
import PgEdit from './components/edit/index.vue'
import { rebates as ajax } from '../../../services'

export default {
    components: {
        PgTable,
        PgEdit
    },
    data() {
        return {
            isShowMoreQuery: false, // 搜索区是否显示更多
            // 搜索条件
            query: {
                condition: {
                    distributorGroupID: "",//分销团队ID
                    configType: "",//参考指标
                    payMothod: "",//发放方式
                    editTimeRange: {//修改时间范围
                        editTimeBegin: "",//起始
                        editTimeEnd: ""//截止
                    },
                    time:[],//修改时间
                    editor: "",//修改人
                },
                pageSize: 15,//每页条数
                page: 1//当前页码
            },
            //重置搜索条件
            resetForm: {
                condition: {
                    distributorGroupID: "",//分销团队ID
                    configType: "",//参考指标
                    payMothod: "",//发放方式
                    editTimeRange: {//修改时间范围
                        editTimeBegin: "",//起始
                        editTimeEnd: ""//截止
                    },
                    time:[],//修改时间
                    editor: "",//修改人
                },
                pageSize: 15,//每页条数
                page: 1//当前页码
            },
            page: 1, // 当前页码
            pageSize: 15, // 每页条数
            total: 40, // 总条数
            selected: [],//全选数据
            editTitle: '编辑', // 新增/修改标题
            editForm: {}, // 新增/修改数据
            isEdit: false, // 是否新增
            showEdit: false, // 是否显示新增弹出窗口
            teamList: [],//团队列表，提供下拉框使用  
            myrebatesList: [],//请求过来的列表数据                      
            // 操作区按钮
            operations: [
                {
                    name: '新增',
                    action: 'add',
                    type: 'primary'
                },
                {
                    name: '启用',
                    action: 'enable'
                },
                {
                    name: '禁用',
                    action: 'disable'
                }
            ],
        }
    },
    computed: {
        // 搜索区默认显示区域
        defaultQuery: {
            get() {
                return [
                    {
                        type: 'select',
                        label: '团队名称',
                        model: 'distributorGroupID',
                        text: 'name',
                        value: 'distributorGroupID',
                        options:this.teamList,//团队数据
                    },
                    {
                        type: 'select',
                        label: '参考指标',
                        model: 'configType',
                        text: 'text',
                        value: 'configType',
                        options: [
                            {
                                configType: 0,
                                text: '订单金额'
                            },
                            {
                                configType: 1,
                                text: '订单利润'
                            },
                            {
                                configType: 2,
                                text: '固定金额'
                            },                            
                        ]                        
                    },
                ]
            }
        },
        //搜索隐藏区域
        moreQuery: {
            get() {
                return [
                    {
                        type: 'select',
                        label: '发放方式',
                        model: 'payMothod',
                        text: 'text',
                        value: 'payMothod',
                        options: [
                            {
                                payMothod: 0,
                                text: '公司发放'
                            },
                            {
                                payMothod: 1,
                                text: '上级发放'
                            }
                        ]
                    },
                    {
                        type: 'timeRange',
                        label: '修改时间',
                        model: 'time'                            
                    },
                    {
                        type: 'input',
                        label: '修改人',
                        model: 'editor'                            
                    },                    
                ]
            }
        }
    },
    mounted(){
        this.getTeamList();
        this.search();
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
        //获取个人业绩列表
        getSelectPersonConfigListPage(){

            if(this.query.condition.time.length != 0) {
                this.query.condition.editTimeRange.editTimeBegin = this.util.formatTimeRange(this.query.condition.time[0], true)//起始时间
                this.query.condition.editTimeRange.editTimeEnd = this.util.formatTimeRange(this.query.condition.time[1], true)//截止时间
            }
            this.query.page = this.page//当前页面
            this.query.pageSize = this.pageSize//每页条数

            ajax.selectPersonConfigListPage(this.query).then((result)=>{
                console.log(result)
                this.myrebatesList = result.dataList
                this.total = result.total
            })
        },
        // 搜索区显示更多
        toggleOpen(isShow) {
            console.log(isShow)
            this.isShowMoreQuery = isShow
        },
        // 搜索按钮
        search() {
            this.page = 1
            //console.log(this.query)
            this.getSelectPersonConfigListPage()
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
        // 编辑
        edit(item) {
            this.showEdit = true
            this.isEdit = true
            this.editTitle = '个人返点编辑'
            this.editForm = item
        },
        // 新增
        add() {
            this.showEdit = true
            this.isEdit = false
            this.editTitle = '个人返点新增'
            this.editForm = {}
        },
        // 删除
        del() {
            console.log('删除')
        },
        // 启用
        enable() {
            console.log('启用')
        },
        // 禁用
        disable() {
            console.log('禁用')
        },
        // 关闭弹出窗口
        closeEdit() {
            this.showEdit = false
        }
    }
}