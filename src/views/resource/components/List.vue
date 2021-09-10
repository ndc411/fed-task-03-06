<template>
  <div class="resource-list">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-form :inline="true" :model="form" class="demo-form-inline">
          <el-form-item label="资源名称">
            <el-input v-model="form.name" placeholder="资源名称"></el-input>
          </el-form-item>
           <el-form-item label="资源路径">
            <el-input v-model="form.url" placeholder="资源路径"></el-input>
          </el-form-item>
          <el-form-item label="资源分类">
            <el-select v-model="form.categoryId" placeholder="资源分类" clearable>
              <el-option v-for="item in resourceCategoryList" :key="item.id" :label="item.name" :value="item.id" />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
       <el-table
        :data="resources"
        style="width: 100%">
        <el-table-column
          type="index"
          label="编号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="资源名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="url"
          label="资源路径">
        </el-table-column>
        <el-table-column
          prop="description"
          label="描述"
          width="180">
        </el-table-column>
        <el-table-column
          prop="createdTime"
          label="创建时间">
        </el-table-column>
        <el-table-column
          align="center"
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="form.current"
        :page-sizes="[5, 10, 20, 40]"
        :page-size="form.size"
        layout="total, sizes, prev, pager, next"
        :total="form.totalCount">
      </el-pagination>
    </el-card>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { getResourcePagesApi, getResourceCategoryApi } from '@/services/resource'

export default Vue.extend({
  name: 'ResourceList',
  data () {
    return {
      form: {
        name: '', // 资源名称
        url: '', // 资源路径
        categoryId: '',
        totalCount: 0,
        current: 1,
        size: 5
      },
      resources: [],
      resourceCategoryList: []
    }
  },
  created () {
    this.loadResources()
    this.getResourceCategoryList()
  },
  methods: {
    async loadResources () {
      const { data } = await getResourcePagesApi(this.form)
      this.resources = data.data.records
      this.form.totalCount = data.data.total
    },
    async getResourceCategoryList () {
      const { data } = await getResourceCategoryApi()
      this.resourceCategoryList = data.data
    },
    handleSizeChange (val: number) {
      this.form.size = val
      this.form.current = 1
      this.loadResources()
    },
    handleCurrentChange (val: number) {
      this.form.current = val
      this.loadResources()
    },
    handleClick (record: any) {
      console.log(record)
    },
    onSubmit () {
      this.form.current = 1
      this.loadResources()
    }
  }
})
</script>
<style lang="scss" scoped>
</style>
