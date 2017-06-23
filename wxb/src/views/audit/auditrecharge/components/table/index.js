import {goods as ajax} from 'services'
export default {
    props: {
        list: Array
    },
    methods: {
        //同意
        enable(item) {
            this.$confirm('确定同意吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                console.log(item)
            }).catch(() => {

            })
            
        },
        //拒绝
        disable(item) {
            this.$confirm('确定拒绝吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                console.log(item)
            }).catch(() => {

            })
            
        },
    }
}