import { cloneDeep } from 'lodash'
import { rebates as ajax } from '../../../../../services'

export default {

    props: {
        title: String,
        show: Boolean,
        isEdit: Boolean,
        editForm: Object
    },
    data() {
        return {
            options:{//所有默认下拉选项的List
                xiaJiList:[//下单人等级
                    {
                        value: 0,
                        text: '不限'
                    },                
                    {
                        value: 1,
                        text: 'CEO'
                    },
                    {
                        value: 2,
                        text: '总代'
                    }, 
                    {
                        value: 3,
                        text: '一级'
                    }, 
                    {
                        value: 4,
                        text: '二级'
                    },                 
                ],
                operTypeList:[//订单类型
                            {
                                operType: 0,
                                text: '全部'
                            },
                            {
                                operType: 1,
                                text: '首单'
                            },
                            {
                                operType: 2,
                                text: '补货'
                            },  
                ],
                configTypeList:[//参考指标List
                            {
                                configType: 1,
                                text: '订单金额（百分比）'
                            },
                            {
                                configType: 2,
                                text: '商品金额（数字）'
                            },
                            {
                                configType: 3,
                                text: '固定金额（数字）'
                            },           
                ],
                payMothodList:[//发放方式List
                            {
                                payMothod: 0,
                                text: '公司发放'
                            },
                            {
                                payMothod: 1,
                                text: '上级发放'
                            }                  
                ],
                scaleList:[//推荐关系等级List
                    {
                        value: 0,
                        text: '不限'
                    },
                    {
                        value: 1,
                        text: '指定'
                    }                     
                ],
                agencyList:[//返点设置下的代理选择List
                    {
                        value:1,
                        text:'总代'
                    },
                    {
                        value:2,
                        text:'省代'
                    },
                    {
                        value:3,
                        text:'一级'
                    },
                    {
                        value:4,
                        text:'二级'
                    },
                ],                 
            },
            activeNames: "1",//选中的弟几个
            form: {},
            input:'',
            activeName: 'first',//默认tab
            teamList:[],//团队下拉列表
            //返点设置搜索条件
            backForm:{//
                h:'',
                m:''
            },
            // 初始表单
            initForm: {
                distributorGroupID: '',//所属团队
                configType: '',//参考指标
                operType:'',//订单类型
                payMothod:'',//发放方式
                note:'',//备注
                scale:'',//推荐关系等级
                back:[
                    {
                        "goodsID": "2757c829-9563-4bb9-84c8-5017b4647eca",
                        "goodsName": "商品名称",
                        "goodsCustomNo": "H0001",
                        "goodsPrice": 100.00,
                        "distributorIntroConfigID": "ac664886-b381-472a-abc8-972b5ff80c76",
                        "rebateItems": [
                            {
                                "distributorIntroItemID": "028cc837-0e74-462a-8617-2067f02d9899",
                                "customerGradeID": "396baecf-5bd9-41e2-b201-68cf89e8ccd8",
                                "level": 2,
                                "goodsID": "2757c829-9563-4bb9-84c8-5017b4647eca",
                                "point": 2.00,
                                "dataStatus": 0
                            },
                            {
                                "distributorIntroItemID": "65cf8168-c72e-4621-80fa-a86f8ee94140",
                                "customerGradeID": "396baecf-5bd9-41e2-b201-68cf89e8ccd8",
                                "level": 3,
                                "goodsID": "2757c829-9563-4bb9-84c8-5017b4647eca",
                                "point": 3.00,
                                "dataStatus": 0
                            },
                            {
                                "distributorIntroItemID": "8e729474-6415-45ae-bfc7-b192542c47cb",
                                "customerGradeID": "396baecf-5bd9-41e2-b201-68cf89e8ccd8",
                                "level": 1,
                                "goodsID": "2757c829-9563-4bb9-84c8-5017b4647eca",
                                "point": 1.00,
                                "dataStatus": 0
                            }
                        ]
                    },{
                        "goodsID": "2757c829-9563-4bb9-84c8-5017b4647eca",
                        "goodsName": "商品名称2",
                        "goodsCustomNo": "H000方法1",
                        "goodsPrice": 100.00,
                        "distributorIntroConfigID": "ac664886-b381-472a-abc8-972b5ff80c76",
                        "rebateItems": [
                            {
                                "distributorIntroItemID": "028cc837-0e74-462a-8617-2067f02d9899",
                                "customerGradeID": "396baecf-5bd9-41e2-b201-68cf89e8ccd8",
                                "level": 2,
                                "goodsID": "2757c829-9563-4bb9-84c8-5017b4647eca",
                                "point": 12.00,
                                "dataStatus": 0
                            },
                            {
                                "distributorIntroItemID": "65cf8168-c72e-4621-80fa-a86f8ee94140",
                                "customerGradeID": "396baecf-5bd9-41e2-b201-68cf89e8ccd8",
                                "level": 3,
                                "goodsID": "2757c829-9563-4bb9-84c8-5017b4647eca",
                                "point": 33.00,
                                "dataStatus": 0
                            },
                            {
                                "distributorIntroItemID": "8e729474-6415-45ae-bfc7-b192542c47cb",
                                "customerGradeID": "396baecf-5bd9-41e2-b201-68cf89e8ccd8",
                                "level": 1,
                                "goodsID": "2757c829-9563-4bb9-84c8-5017b4647eca",
                                "point": 1.00,
                                "dataStatus": 0
                            }
                        ]
                    }
                ]
            },
            barCode:{
                t0:'',
                t1:'',
                t2:'',
                t3:'',
                t4:'',
                t5:''  
            },            
            // 输入验证
            rules: {
                distributorGroupID: [
                    { required: true, message: '请选择所属团队', trigger: 'blur' },
                ],
                operType:[
                    { required: true, type: "number",message: '请选择订单类型', trigger: 'blur' },
                ],
                configType: [
                    { required: true,type: "number", message: '请选择参考指标', trigger: 'blur' },
                ],
                payMothod: [
                    { required: true,type: "number", message: '请选择发放方式', trigger: 'blur' },
                ],
                back: [
                    { required: true, message: '请添加个人返点设置', trigger: 'blur' },
                ],

            }
        }
    },
    watch: {
        editForm(editForm) {
            if (this.isEdit) {
                console.log(this.form)
                this.form = cloneDeep(this.editForm)
                console.log(this.form)
            }
            else {
                this.resetForm()
            }
        }
    },
    mounted() {
        console.log(this.form)
        if (!this.isEdit) {
            this.resetForm()
        }
        this.getTeamList()//获取团队列表
    },
    created() {
        this.setForm(this.editForm)
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
        //搜索货号名称
        search(){
            console.log(this.backForm)
            console.log('搜索')
        },
        //重置货号名称
        resetSearch(){
            this.backForm = {
                h:'',
                m:''
            },
            console.log(this.backForm)
            console.log('重置')
        },
        //保存返点设置
        saveBack(){
            console.log('保存返点设置')
        },
        //tab切换菜单
        handleClick(tab, event) {
            //console.log(tab, event);
        },
        //修改进来
        resetForm() {
            this.form = cloneDeep(this.initForm)
        },
        //新增进来
        setForm(editForm) {
            if (this.isEdit) {
                this.form = cloneDeep(this.editForm)
            }
            else {
                this.resetForm()
            }
        },
        //选择返点设置下面的等级代理
        agencyClick(val){
            console.log(val)
        },
        //手风琴
        handleChange(val){
            console.log(val)

        },
        // 返回
        close() {
            this.$emit('close')
        },
        // 保存商品返点
        save() {
            this.$refs.form.validate((valid) => {
                console.log(this.form)
                if (valid) {
                    // 验证通过
                }
            })
        },
    }
}