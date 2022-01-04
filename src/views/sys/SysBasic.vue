<!--
 * @Author: airmz
 * @Date: 2021-10-13 16:08:43
 * @LastEditTime: 2021-11-17 20:35:03
 * @FilePath: \yeb\src\views\sys\SysBasic.vue
-->
<template>
    <el-tabs v-model="activeName" type="card">
        <el-tab-pane label="部门管理" name="DepMana">
           <depMana/>
            </el-tab-pane>
        <el-tab-pane label="职位管理" name="PosMana">
            <posMana/>
        </el-tab-pane>
        <el-tab-pane label="职称管理" name="JoblevelMana">
            <JoblevelMana/>
        </el-tab-pane>
        <el-tab-pane label="奖惩规则" name="EcMana">
            <EcMana/>
        </el-tab-pane>
        <el-tab-pane label="权限组" name="PermissMana">
            <PermissMana/>
        </el-tab-pane>
    </el-tabs>
</template>
<script>
import DepMana from '../../components/sys/basic/DepMana';
import EcMana from '../../components/sys/basic/EcMana';
import JoblevelMana from '../../components/sys/basic/JoblevelMana';
import PermissMana from '../../components/sys/basic/PermissMana';
import PosMana from '../../components/sys/basic/PosMana';
    export default {
        name: 'SysBasic',
        components:{
            DepMana,
            EcMana,
            JoblevelMana,
            PermissMana,
           PosMana,
        },
        data() {
            return {
                activeName:'DepMana'
            }
        },
        methods: {

        },
    }
</script>
<style scoped>

</style>