import { menuList } from '../../data/menu.js'
import cookie from 'js-cookie'
import {sysHandle as ajax} from '../../services'
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            sysName: '后台管理系统',
            menuList: []
        }
    },
    mounted() {
        this.menuList = menuList
        // 获取菜单接口
        // this.getMenus()
    },
    computed: {
        ...mapGetters([
            'accountInfo' // 登录者信息
        ])
    },
    methods: {
        handleDropdown(command) {
            if (command === 'logout') {
                this.$confirm('确定退出吗？', '提示', { type: 'warning' }).then(() => {
                    this.$message({
                        message: '退出登录成功',
                        type: 'success'
                    })
                    cookie.remove('isLogin')
                    this.$router.push('/log')
                }).catch(() => {

                })
            }
        },
        /**
         * 获取菜单
         */
        getMenus() {
            ajax.getMenus().then((result) => {
                this.menuList = result
            })
        },
        /**
         * 调转到首页
         */
        gotoHome() {
            this.$router.push({
                path: '/dashboard'
            })
        }
    }
}