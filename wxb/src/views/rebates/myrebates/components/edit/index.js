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
            teamList:[],//团队下拉列表
            //所有默认下拉列表数据
            options:{
                
                configTypeList:[//参考指标
                            {
                                configType: 1,
                                text: '订单金额（百分比）'
                            },
                            {
                                configType: 2,
                                text: '固定金额（数字）'
                            },
                            {
                                configType: 2,
                                text: '商品金额（数字）'
                            },                 
                ],
                payMothodList:[//发放方式
                            {
                                payMothod: 0,
                                text: '公司发放'
                            },
                            {
                                payMothod: 1,
                                text: '上级发放'
                            }                 
                ],
            },
            form: {},
            // 初始表单
            initForm: {
                distributorGroupID: '',//所属团队
                configType: '',//推荐等级
                payMothod:'',//参考指标
                manner:'',//发放方式
                note:'',//备注
                back:[
                    {//返点数据
                        t0:'',
                        t1:'',
                        t2:'',
                        t3:'',
                        t4:'',
                        t5:''        
                    }
                ],

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
                    { required: true, message: '请选择所属团队', trigger: 'change' },
                ],
                configType: [
                    { required: true,type: "number", message: '请选择参考指标', trigger: 'change' },
                ],
                payMothod: [
                    { required: true,type: "number", message: '请选择发放方式', trigger: 'change' },
                ],
                back: [
                    { required: true, message: '请添写个人返点设置', trigger: 'blur' },
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
        this.getTeamList();
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
        //主页面修改
        resetForm() {
            this.form = cloneDeep(this.initForm)
        },
        //新增
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
            this.$refs.form.validate((valid) => {
                console.log(this.form)
                if (valid) {
                    // 验证通过
                }
            })
        },
        // 新增返点设置
        addGoodsType() {
            this.form.back.push(cloneDeep(this.barCode))
        },
        // 删除现货类型
        delGoodsType(index) {
            this.form.back.splice(index, 1)
        },
    }
}