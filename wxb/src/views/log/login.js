import { sysHandle as ajax } from 'services'
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            logining: false,
            form: {
                grant_type: 'password',
                username: 'zeng3',
                password: '123456',
                scope: 'pc'
            },
            rules: {
                username: [
                    { 
                        required: true, 
                        message: '请输入账号', 
                        trigger: 'blur' 
                    }
                ],
                password: [
                    {
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                    }
                ]
            },
            checked: false
        }
    },
    created() {
        // 获取商家的图片资源
        // this.getSysImgs()
    },
    methods: {
        ...mapActions([
            'setAuth', // 设置登录token
            'setSysImages', // 设置系统图片资源
            'setAccount' // 登陆者信息
        ]),
        handleSubmit() {
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    this.logining = true
                    ajax.login(this.form).then((result) => {
                        this.logining = false
                        if (result) {
                            this.setAuth(result.access_token)
                            this.$message({
                                message: '登录成功',
                                type: 'success'
                            })

                            ajax.getAccount().then((res) => {
                                this.setAccount(res)
                            })

                            setTimeout(() => {
                                this.$router.push('/dashboard')
                            }, 600)
                        }
                    }).catch((error) => {
                        this.logining = false
                        this.$message({
                            message: '账号或密码错误',
                            type: 'error'
                        })
                    })
                }
            })
        },
        /**
         * 获取当前商家的图片资源
         */
        getSysImgs() {
            ajax.getSysImgs().then((result) => {
                this.setSysImages(result)
                console.log(result)
            })
        }
    }
}