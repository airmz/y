<!--
 * @Author: airmz
 * @Date: 2021-10-27 21:39:04
 * @LastEditTime: 2021-11-03 21:38:30
 * @FilePath: \yeb\src\components\sys\basic\PoSMana.vue
-->
<template>
    <div>
        <div>
            <el-input class="addDepMana" size="small" placeholder="添加职位" suffix-icon="el-icon-plus" v-model="pos.name"
                @keydown.enter.native="addPositions">
            </el-input>
            <el-button type="primary" size="small" icon="el-icon-plus" @click="addPositions">添加</el-button>
        </div>
        <div>

            <el-table @selection-change="handleSelectionChange" stripe :data="positions" border style="width: 100%">
                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column prop="id" label="编号" width="180">
                </el-table-column>
                <el-table-column prop="name" label="职位" width="180">
                </el-table-column>
                <el-table-column prop="createDate" label="创建时间" width="200">
                </el-table-column>
                <!-- <el-table-column prop="enabled" label="是否启用" width="120">
                </el-table-column> -->
                <el-table-column label="操作" width="200">
                    <template slot-scope="scope">
                        <!-- xxx.$index 意思是这段数据中的某一条数据的下标 （0 1 2 3 4 5） -->
                        <el-button size="mini" @click="showEditView(scope.$index, scope.row)">编辑</el-button>
                        <!-- xxx.row意思是这段数据的这一行数据 -->
                        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
                <span>
                    <el-tag>职位</el-tag>
                    <el-input class="updates" v-model="updates.name" placeholder="" size="small" clearable></el-input>

                </span>
                <span slot="footer" class="dialog-footer">
                    <el-button size="small" @click="dialogVisible = false">取 消</el-button>
                    <el-button size="small" type="primary" @click="upEditView">确 定</el-button>
                </span>
            </el-dialog>
        </div>
        <div>
            <el-button class="deleteMany" type="danger" size="default" :disabled="this.multipleSelection.length==0"
                @click="deleteMany">批量删除</el-button>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'PosMana',
        data() {
            return {
                pos: {
                    name: ''
                },
                positions: [],
                dialogVisible: false,
                updates: {
                    name: ''
                },
                multipleSelection: []
            }

        },
        mounted() {
            this.initPositions();
        },
        methods: {
            deleteMany() {
                this.$confirm('此操作将永久删除[' + this.multipleSelection.length + ']条职位, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    let ids = '?';
                    this.multipleSelection.forEach(item => {
                        ids += 'ids=' + item.id + '&'
                    })
                    this.deleteRequest('/system/basic/pos/' + ids)
                        .then(res => {
                            if (res) {
                                this.initPositions();
                            }
                        })

                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            handleSelectionChange(val) {
                this.multipleSelection = val
            },
            upEditView() {
                this.putRequest('/system/basic/pos/', this.updates)
                    .then(res => {
                        this.initPositions();
                        this.updates.name = ''
                        this.dialogVisible = false
                    })

            },
            addPositions() {
                if (!this.pos.name) {
                    this.$message.error('职位信息不能为空！');
                    return;
                } else {
                    this.postRequest('/system/basic/pos/', this.pos)
                        .then(res => {
                            if (res) {
                                this.initPositions();
                                this.pos.name = ''
                            }
                        })
                }

            },

            initPositions() {
                this.getRequest('/system/basic/pos/')
                    .then(res => {
                        if (res) {
                            this.positions = res;
                        }
                    })
            },
            showEditView(index, data) {
                Object.assign(this.updates, data);
                this.updates.createDate = '';
                this.dialogVisible = true
            },
            handleDelete(index, data) {
                this.$confirm('此操作将永久删除[' + data.name + ']职位, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.deleteRequest('/system/basic/pos/' + data.id)
                        .then(res => {
                            if (res) {
                                this.initPositions();
                            }
                        })

                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });

            },
        },

    }
</script>
<style>
    .addDepMana {
        width: 300px;
        margin-right: 10px;
        margin-bottom: 10px;
    }

    .updates {
        width: 200px;
        margin-left: 10px;
    }

    .deleteMany {
        margin-top: 10px;
    }
</style>