<!--
 * @Author: airmz
 * @Date: 2021-10-27 21:39:04
 * @LastEditTime: 2021-11-16 22:02:30
 * @FilePath: \yeb\src\components\sys\basic\EcMana.vue
-->
<template>
    <div>
        <el-input placeholder="输入关键字进行过滤" v-model="filterText" prefix-icon="el-icon-search">
        </el-input>

        <el-tree class="filter-tree" :data="deps" :props="defaultProps" :filter-node-method="filterNode" ref="tree">
        </el-tree>
    </div>
</template>
<script>
    export default {
        name: 'EcMana',
        data() {
            return {
                filterText: '',
                defaultProps: {
                    children: 'children',
                    label: 'name'
                },
                deps: [],
            }
        },
        watch: {
            filterText(val) {
                this.$refs.tree.filter(val)
            }
        },
        mounted() {
            this.initDeps();
        },
        methods: {
            initDeps() {
                this.getRequest('/system/basic/department/')
                    .then(res => {
                        if (res) {
                            this.deps = res;
                        }
                    })
            },
            filterNode(value, data) {
                if (!value) return true;
                return data.name.indexOf(value) !== -1
            }
        },
    }
</script>
<style>

</style>