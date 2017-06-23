import { cloneDeep } from 'lodash'
export default {
    props: {
        title: String,
        show: Boolean,
        isEdit: Boolean,
        editForm: Object
    },
    data() {
        return {
            form: {},
            // 初始表单
            initForm: {
                code: '', //编号
                name: '', //快递公司
            },
        }
    },
    watch: {
        editForm(editForm) {
            if (this.isEdit === false) {
                this.form = cloneDeep(this.editForm)
            }
            else {
                this.resetForm()
            }
        }
    },
    mounted() {
        if (this.isEdit === false) {
            this.resetForm()
        }
    },
    created() {
        this.setForm(this.editForm)
    },
    methods: {
        resetForm() {
            this.form = cloneDeep(this.initForm)
        },
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
            console.log('保存')
        }
    }
}