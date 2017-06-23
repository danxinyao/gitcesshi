export default {
    props: {
        list: Array,
    },
    data() {
        return {
           devList: [ 
                {
                    code: '112312',
                    name: 'sf'
                }
           ]
        }
    },
    methods: {
        // 修改快递公司
        edit(item) {
            this.$emit('edit', item)
        },
        // 删除快递公司
        del(item) {
            this.$emit('del', item)
        },
        // 全选
        selectChange(val) {
            this.$emit('select-change', val)
        },
    }
}