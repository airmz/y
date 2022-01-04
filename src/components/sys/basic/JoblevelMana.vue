<!--
 * @Author: airmz
 * @Date: 2021-10-27 21:39:04
 * @LastEditTime: 2021-11-17 21:58:03
 * @FilePath: \yeb\src\components\sys\basic\JoblevelMana.vue
-->
<template>
    <div>
        <div>
            <el-input v-model="jl.name" placeholder="添加职位..." size="small" clearable prefix-icon="el-icon-plus"
                style="width:300px;margin-right: 10px;"></el-input>
            <el-select v-model="jl.titleLevel" placeholder="请选择" size="small" style="margin-right:10px">
                <el-option v-for="item in titleLevel" :key="item" :label="item" :value="item">
                </el-option>
            </el-select>
            <el-button type="primary" size="small" @click="addgetJoblevel" icon='el-icon-plus'>添加</el-button>
        </div>
        <div>
            <el-table :data="jls" stripe border style="width: 100%;margin-top:10px"
                @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column prop="id" label="编号" width="180">
                </el-table-column>
                <el-table-column prop="name" label="职称" width="180">
                </el-table-column>
                <el-table-column prop="titleLevel" label="职称等级" width="180">
                </el-table-column>
                <el-table-column prop="createDate" label="创建时间" width="180">
                </el-table-column>
                <el-table-column prop="enabled" label="是否启用" width="180">
                    <template slot-scope="scope">
                        <el-tag v-if="scope.row.enabled" type="success">已启用</el-tag>
                        <el-tag v-else type="danger">未启用</el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="mini" type="danger" @click="handleDelete(scope.$index,scope.row)">删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-dialog title="职称等级" :visible.sync="dialogVisible" width="30%">
                <span>
                    <el-tag>职称</el-tag>
                </span>
                <el-input v-model="put.name" placeholder="" size="small" clearable class="dialogVisible" >
                </el-input>
                <span>
                    <el-tag>等级</el-tag>
                </span>
                <el-select v-model="put.titleLevel"  class="dialogVisible" placeholder="请选择" size="small" >
                    <el-option v-for="item in titleLevel" :key="item" :label="item" :value="item">
                    </el-option>
                </el-select>
                <div>
                    <span>
                        <el-tag>状态</el-tag>
                    </span>
                    <el-switch class="dialogVisible"  v-model="put.enabled" active-color="#13ce66" inactive-color="#ff4949"
                        active-text="已启用" inactive-text="未启用" >
                    </el-switch>
                </div>

                <span slot="footer" class="dialog-footer">
                    <el-button size="small" @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" size="small" @click="putTitle">确 定</el-button>
                </span>
            </el-dialog>
            <div>
                <el-button class="deleteMany" type="danger" size="small" :disabled='!this.multipleSelection.length'
                    @click="deleteMany">批量删除</el-button>

            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'JoblevelMana',
        data() {
            return {
                jl: {
                    name: '',
                    titleLevel: '',
                },
                titleLevel: [
                    '正高级', '副高级', '中级', '初级', '员级'
                ],
                jls: [],
                multipleSelection: [],
                dialogVisible: false,
                put: {
                    name: '',
                    titleLevel: '',
                    enabled: '',
                },

            }
        },
        mounted() {
            this.getJoblevel();
        },
        methods: {
            putTitle(index, data) {
                if (this.put.name) {
                    this.putRequest('/system/basic/joblevel/', this.put)
                        .then(res => {
                            if (res) {
                                this.getJoblevel();
                                this.dialogVisible = false;
                            }
                        })
                }
            },
            handleSelectionChange(val) {
                this.multipleSelection = val
            },
            deleteMany() {
                this.$confirm('此操作将永久删除' + this.multipleSelection.length + '条职称, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    let ids = '?'
                    this.multipleSelection.forEach(item => {
                        ids += 'ids=' + item.id + '&'
                    })
                    this.deleteRequest('/system/basic/joblevel/' + ids)
                        .then(res => {
                            if (res) {
                                this.getJoblevel();
                            }
                        })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            handleEdit(index, data) {
                Object.assign(this.put, data)
                this.put.createDate = "";
                this.dialogVisible = true
            },
            handleDelete(index, data) {
                this.$confirm('此操作将永久删除' + data.name + '职称, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.deleteRequest('/system/basic/joblevel/' + data.id)
                        .then(res => {
                            if (res) {
                                this.getJoblevel();
                            }
                        })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            getJoblevel() {
                this.getRequest('/system/basic/joblevel/')
                    .then(res => {
                        if (res) {
                            this.jls = res;
                            this.jl.name = '';
                            this.jl.titleLevel = '';
                        }
                    })
            },
            addgetJoblevel() {
                if (!this.jl.name || !this.jl.titleLevel) {
                    this.$message.error('职位信息不能为空！')
                } else {
                    this.postRequest('/system/basic/joblevel/', this.jl)
                        .then(res => {
                            if (res) {
                                this.getJoblevel();

                            }
                        })
                }
            },
        },
    }
</script>
<style>
    .addPositions {
        width: 300px;
        margin-right: 10px;
        margin-bottom: 10px;
    }

    .updates {
        width: 200px;
    }

    .el-checkbox__inner {
        border: solid 1px #666;
    }
    .dialogVisible{
        width: 300px;
        margin-left: 8px;
        margin-bottom: 10px;
    }
</style>