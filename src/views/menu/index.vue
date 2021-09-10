<template>
  <div class="menu">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-button @click="$router.push('/menu-create')">添加菜单</el-button>
      </div>
      <el-table :data="menuList" style="width: 100%" border>
        <el-table-column label="编号" type="index" min-width="150" align="center" />
        <el-table-column prop="name" label="菜单名称" min-width="150" align="center" />
        <el-table-column prop="level" label="菜单级数" min-width="150" align="center"  />
        <el-table-column prop="icon" label="菜单图标" min-width="150" align="center" />
        <el-table-column prop="orderNum" label="排序" min-width="150" align="center" />
        <el-table-column prop="address" label="操作" min-width="150" align="center" />
        <el-table-column label="操作"  min-width="150" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
      </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script lang="ts">
import { getAllMenuApi, deleteMenuApi } from '@/services/menu'
import Vue from 'vue'

export default Vue.extend({
  name: 'MenuIndex',
  data () {
    return {
      menuList: []
    }
  },
  created () {
    this.getMenuList()
  },
  methods: {
    async getMenuList () {
      const { data } = await getAllMenuApi()
      this.menuList = data.data
    },
    handleEdit (item: any) {
      this.$router.push({
        name: 'menu-edit',
        params: {
          id: item.id
        }
      })
    },
    handleDelete (index: string, item: any) {
      this.$confirm('确认删除么？', '删除提示', {})
        .then(async () => {
          const { data } = await deleteMenuApi(item.id)
          if (data.code === '000000') {
            this.$message.success('删除成功')
            this.getMenuList()
          }
        })
        .catch(err => {
          console.log(err)
          this.$message.info('已取消删除')
        })
    }
  }
})
</script>
<style lang="scss" scoped>
</style>
