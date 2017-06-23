import { cloneDeep } from 'lodash'
import { rebates as ajax} from 'services'

export default {
    props: {
        title: String,
        show: Boolean,
        isEdit: Boolean,
        editForm: Object
    },
    data() {
        return {
            activeName2: 'first',//默认tab
            input: 'hgh',//测试用的假数据
            form: {},
            teamList: [],//团队下拉别表
            orderGrade: [],//下单人等级列表
            //搜索框查询条件
            query: {
                goodsCustomNo: '',
                goodsName: ''
            },
          // 初始表单
            initForm: {
                distributorIntroConfigID: '', //推荐返点设置ID ,
                distributorGroupID: '',//分销团队ID ,
                distributorGroupID_old: '', // 修改之前的团队ID
                orderGradeID:'', //请求代理商等级 ,
                configType: '',//参考指标/返点类型,1:订单金额,2:固定金额,3:商品金额 ,
                operType: '',//订单类型,0:全部,1:后期补货,2:首批进货,4:一次性 ,
                payMothod: '',//发放方式,0:上级发放,1:公司发放 ,
                customerGradeFlag: '',//是否限定推荐人等级,1:限定,0:不限 ,
                introFlag: 1,//推荐类型,0:平级推荐,1:跨级推荐 ,
                status: 1,//状态,1:启用,0:禁用 ,
                note: '',//备注 ,
            },
            goodsModel: [
                {
                    goodsID: "",
                    goodsName: "",
                    goodsCustomNo: "",
                    goodsPrice: 0,
                    distributorIntroConfigID: "",
                    rebateItems: [
                        {
                            distributorIntroItemID: "",
                            customerGradeID: "",
                            level: 0,
                            goodsID: "",
                            point: '',
                            dataStatus: 1
                        },
                        {
                            distributorIntroItemID: "",
                            customerGradeID: "",
                            level: 0,
                            goodsID: "",
                            point: '',
                            dataStatus: 1
                        },
                        {
                            distributorIntroItemID: "",
                            customerGradeID: "",
                            level: 0,
                            goodsID: "",
                            point: '',
                            dataStatus: 1
                        },
                    ]
                },
            ],
            // 输入验证
            rules: {
                distributorGroupID: [
                    { required: true, message: '请选择所属团队', trigger: 'blur' },
                ],
                orderGradeID: [
                    { required: true, message: '请选择下单人等级', trigger: 'blur' },
                ],
                operType: [
                    { required: true, type: "number", message: '请选择订单类型', trigger: 'change' },
                ],
                configType: [
                    { required: true, type: "number", message: '请选择参考指标', trigger: 'change' },
                ],
                payMothod: [
                    { required: true,  type: "number", message: '请选择发放方式', trigger: 'change' },
                ],
            },
            //初始化表单下拉列表
            defaultForm: {
                orderType: [
                    {
                        text: '全部',
                        value: 0
                    },                    
                    {
                        text: '后期补货',
                        value: 1
                    },                    
                    {
                        text: '首批进货',
                        value: 2
                    },
                ],
                zhibiao: [
                    {
                        text: '订单金额',
                        value: 1
                    },                    {
                        text: '固定金额',
                        value: 2
                    },                    {
                        text: '商品金额',
                        value: 3
                    },
                ],
                send: [
                    {
                        text: '上级发放',
                        value: 0
                    },
                    {
                        text: '公司发放',
                        value: 1
                    },                    
                ],
                grade: [
                    {
                        text: '不限',
                        value: 0
                    },
                    {
                        text: '指定',
                        value: 1
                    },                    

                ],
            }
        }
    },
    computed: {
        // 搜索区默认显示
        defaultQuery: {
            get() {
                return [
                    {
                        type: 'input',
                        label: '货号',
                        model: 'goodsCustomNo'
                    },
                    {
                        type: 'input',
                        label: '名称',
                        model: 'goodsName',
                    },
                ]
            }
        },
    },
    watch: {
        isEdit() {
            //每次进来都先显示第一页
            this.activeName2 = 'first'
            if (this.isEdit) {
                this.form = cloneDeep(this.editForm)
                //console.log(this.form.distributorIntroConfigID)
                // 查询基础信息
                this.queryIntroConfigDetail(this.form.distributorIntroConfigID)
            }
            else {
                this.resetForm()
            }
        },
        'form.distributorGroupID': function() {
            this.queryBasCustomerGradeList(this.form.distributorGroupID)
            if(this.form.distributorGroupID_old === this.form.distributorGroupID) {
            } else {
                this.form.orderGradeID = ''
            }
            
        },
        //监听参考指标
        'form.configType': function() {
            this.changeModel()
        },
        'form.customerGradeFlag': function() {
            this.changeModel()
        },
    },
    mounted() {
        this.getTeamList()
        if (!this.isEdit) {
            this.resetForm()
        }
    },
    created() {
        this.setForm(this.editForm)
    },
    methods: {
        search() {},
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
            }
            ajax.queryTeamList(1, 100, query).
              then((result) => {
                  if(result){
                      this.teamList = result.dataList
                  }
            })
        },
        //根据选择的团队id获取团队等级列表
        queryBasCustomerGradeList(distributorGroupID) {
            ajax.getBasCustomerGradeList(distributorGroupID).then((result) => {
                this.orderGrade = result
            })
        },
        // 获取（跨级/平级）推荐返点设置详情
        queryIntroConfigDetail(id) {
            ajax.getIntroConfigDetail(id).then((result) => {
                this.form = result
                // 用于记录初始值
                this.form.distributorGroupID_old = this.form.distributorGroupID
                //console.log('this.form')
            })
        },
        //状态改变时请求对应返点设置项模型
        changeModel() {
            console.log('gaibianmei')
            if(this.form.configType == 1 && this.form.customerGradeFlag == 0) {
                console.log('s1111')
            }else {
                console.log('sssss')
            }
             
        },
        //tab页切换控制
        handleClick(tab, event) {
            console.log(tab, event);
        },
        //重置表单
        resetForm() {
            this.form = cloneDeep(this.initForm)
        },
        //设置表单
        setForm(editForm) {
            if (this.isEdit) {
                this.form = cloneDeep(this.editForm)
            }
            else {
                this.resetForm()
            }
        },
        // 返回
        close() {
            this.$emit('close')
        },
        // 保存
        save() {
            //console.log(this.form)
            this.$refs.form.validate((valid) => {
                if (valid) {
                    // 验证通过
                    ajax.saveIntroConfig(this.form).then((result) => {
                        this.$message({
                            message: '保存成功',
                            type: 'success'
                        })
                        this.form.distributorIntroConfigID = result
                        // 查询基础的返点信息
                        //this.queryIntroConfigBaseModel(this.form.distributorIntroConfigID)
                        //新增时候保存完 查询商品模型的返点信息
                        //this.queryIntroConfigGoodsModel(this.form.distributorIntroConfigID)
                        this.refresh()

                    }).catch((error) => {
                        this.$message.error(error)
                    })

                }
            })
        },
        // 刷新父级列表页面
        refresh() {
            this.$emit('refresh')
        },
    }
}