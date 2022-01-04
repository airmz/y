<!--
 * @Author: airmz
 * @Date: 2021-10-27 21:39:04
 * @LastEditTime: 2021-11-17 22:03:21
 * @FilePath: \yeb\src\components\sys\basic\DepMana.vue
-->
<template>
    <div style="width:500px">
        <div>
            <el-input placeholder="请输入部门名称进行搜索" prefix-icon="el-icon-search" v-model="filterText" style="width: 300px;">
            </el-input>
            <el-button type="primary" size="default" style="margin-left:10px" @click="" icon="el-icon-search">搜索
            </el-button>
        </div>
        <el-tree class="filter-tree" :data="deps" :props="defaultProps" default-expand-all
            :filter-node-method="filterNode" ref="tree" :expand-on-click-node='false'>
            <span class="custom-tree-node span" slot-scope="{ node, data }">
                <span>{{data.name }}</span>
                <span>
                    <el-button type="primary" class="depBtn" size="mini" @click="() => showAddDep(data)">
                        增加
                    </el-button>
                    <el-button type="danger" class="depBtn" size="mini" @click="() => deleteDep(data)">
                        删除
                    </el-button>
                </span>
            </span>
        </el-tree>
        <el-dialog title="添加部门" :visible.sync="dialogVisible" width="30%">
            <div>
                <table>
                    <tr>
                        <td>
                            <el-tag size="normal">上级部门</el-tag>
                        </td>
                        <td>{{pname}}</td>
                    </tr>
                    <tr>
                        <td>
                            <el-tag size="normal">部门名称</el-tag>
                        </td>
                        <td>
                            <el-input v-model="dep.name" placeholder="请输入部门名称..." size="normal" clearable></el-input>
                        </td>
                    </tr>
                </table>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="doAddDep">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        name: 'PosMana',
        data() {
            return {
                filterText: '',
                deps: [],
                defaultProps: {
                    children: 'children',
                    label: 'name'
                },
                dialogVisible: false,
                dep: {
                    name: '',
                    parentId: -1,
                },
                pname: '',

            }

        },
        watch: {
            filterText(val) {
                this.$refs.tree.filter(val);
            }
        },
        mounted() {
            this.initDeps();
        },
        methods: {
            doAddDep() {
                console.log(this.dep)
                console.log(this.pname)
                this.postRequest('/system/basic/department/', this.dep)
                    .then(res => {
                        if (res) {
                            this.initDeps();
                            this.dialogVisible = true;
                        }
                    })
            },
            showAddDep(data) {
                this.dep.parentId = data.id;
                this.pname = data.name;
                console.log(this.dep)
                console.log(this.pname)
                this.dialogVisible = true;
            },
            deleteDep(data) {
                console.log(data)
            },
            filterNode(value, data) {
                if (!value) return true;
                return data.name.indexOf(value) !== -1;
            },
            initDeps() {
                this.getRequest('/system/basic/department/')
                    .then(res => {
                        if (res) {
                            this.deps = res;
                        }
                    })
            },
        },
    }
</script>
<style>
    .depBtn {
        padding: 2px;
        margin-left: 10px;
    }

    .span {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
</style>