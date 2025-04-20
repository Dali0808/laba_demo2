
<template>
    <div class="materials-page">
      <div class="materials-list">
        <el-row :gutter="20">
          <el-col :span="6" v-for="item in pagedMaterials" :key="item.id">
            <el-card shadow="hover" :body-style="{ padding: '10px' }">
              <img :src="item.url" class="card-image" />
              <div class="card-title">{{ item.author }}</div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div class="pagination">
        <el-pagination
          background
          layout="prev, pager, next"
          :page-size="pageSize"
          :total="materials.length"
          @current-change="handlePageChange"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue'
  import axios from 'axios'
  
  const materials = ref([])
  const currentPage = ref(1)
  const pageSize = 8
  
  const pagedMaterials = computed(() => {
    const start = (currentPage.value - 1) * pageSize
    return materials.value.slice(start, start + pageSize)
  })
  
  const handlePageChange = (page) => {
    currentPage.value = page
  }
  
  onMounted(() => {
    axios.get('http://localhost:8080/show')
      .then((res) => {
        materials.value = res.data.data
      })
      .catch((err) => {
        console.error('请求失败：', err.message)
      })
  })
  </script>
  
  <style scoped>
  .materials-page {
    padding: 20px;
  }
  .card-image {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }
  .card-title {
    margin-top: 8px;
    font-weight: bold;
    text-align: center;
  }
  .pagination {
    text-align: center;
    margin-top: 20px;
  }
  </style>