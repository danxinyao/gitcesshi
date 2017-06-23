import {goods as ajax} from 'services'

export default {
    props: {
        list: Array
    },
    methods: {
        edit(item) {
            this.$emit('edit', item)
        },
        detail(item) {
            this.$emit('detail', item)
        },
        selectChange(val) {
            this.$emit('select-change', val)
        },
        level(item,type){
            this.$emit('level', item,type)
        },
    }
}