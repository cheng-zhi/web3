<template>
  <div>
    <!-- //面包屑导航区域 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">用户管理</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片试图区域 -->
    <el-card>
      <el-row :gutter="20">
        <el-col :span="8">
          <!-- 搜索添加区域 -->
          <el-input placeholder="请输入内容" v-model="input5">
            <el-button slot="append" icon="el-icon-search">
            </el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary">添加用户</el-button>
        </el-col>
      </el-row>
      <!-- 用户列表表格 -->
      <el-table :data="userlist" border>
        <el-table-column type="index" width="50">
        </el-table-column>
        <el-table-column property="date" label="日期" width="120">
        </el-table-column>
        <el-table-column property="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column property="address" label="地址">
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import mix from './User-mixins.js'
export default {
  mixins: [mix]
}
</script>

<style lang="less" scoped>
</style>
