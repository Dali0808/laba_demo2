<template>
  <el-main class="materials-page">
    <div class="layout-container">
      <aside class="sidebar">
        <h3>分类</h3>
        <ul class="category-list">
          <li v-for="(item, index) in ['全部', '图片', '视频', '文档']" :key="index">{{ item }}</li>
        </ul>
      </aside>
      <section class="content">
        <h2 class="page-title">素材展示</h2>
        <el-row :gutter="20" class="grid">
          <el-col :span="6" v-for="(item, index) in materials" :key="index">
            <el-card shadow="hover" :body-style="{ padding: '10px' }">
              <img :src="item.image" class="card-image" />
              <div class="card-title">{{ item.title }}</div>
            </el-card>
          </el-col>
        </el-row>
      </section>
    </div>
  </el-main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const materials = ref([])

onMounted(() => {
  axios.get('https://m1.apifoxmock.com/m1/6217252-5910738-default/test').then((res) => {
    materials.value = res.data
  })
})
</script>

<style scoped>
.materials-page {
  padding: 0px;
  background-color: #f5f5f5;
  min-height: 100vh;
}

.layout-container {
  display: flex;
}

.sidebar {
  width: 25%;
  padding: 20px;
  background-color: #ffffff;
  border-right: 1px solid #e0e0e0;
}

.category-list {
  list-style: none;
  padding: 0;
}

.category-list li {
  padding: 8px 0;
  cursor: pointer;
}

.content {
  width: 75%;
  padding: 20px;
}

.page-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: center;
}

.card-image {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 6px;
}

.card-title {
  padding-top: 10px;
  font-size: 16px;
  text-align: center;
}
</style>
