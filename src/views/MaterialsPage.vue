<template>
  <el-main class="materials-page">
    <div class="layout-container">
      <div class="top-nav">
        <div class="category-tabs">
          <span
            v-for="(item, index) in ['全部', '图片', '绘画']"
            :key="index"
            class="tab"
            @click="handleCategoryClick(item)"
          >
            {{ item }}
          </span>
        </div>
        <div class="filter-tabs">
          <el-dropdown trigger="click">
            <span class="filter-option">筛选</span>
            <template #dropdown>
              <el-dropdown-menu>
                <div style="display: flex; padding: 10px 20px; width: 200px;">
                  <div style="width: 60px; font-weight: bold;">作者</div>
                  <div style="flex: 1; display: flex; flex-direction: column; gap: 6px;">
                    <el-dropdown-item @click="filterByAuthor('邹达亮')">邹达亮</el-dropdown-item>
                    <el-dropdown-item @click="filterByAuthor('张城玮')">张城玮</el-dropdown-item>
                    <el-dropdown-item @click="filterByAuthor('小亮')">赵耀</el-dropdown-item>
                  </div>
                </div>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
      <section class="content">
        <h2 class="page-title">素材展示</h2>
        <el-row :gutter="20" class="grid">
          <el-col :span="6" v-for="(item, index) in materials" :key="index">
            <el-card shadow="hover" :body-style="{ padding: '10px' }">
              <el-image :src="item.url" fit="cover" class="card-image" />
              <div class="card-title">{{ item.createDate }}</div>
              <div class="card-tags">{{ Array.isArray(item.tags) ? item.tags.join(', ') : '' }}</div>
            </el-card>
          </el-col>
        </el-row>
      </section>
    </div>
  </el-main>
</template>

<script setup>
import { ElDropdown, ElDropdownMenu, ElDropdownItem } from 'element-plus'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const materials = ref([])

onMounted(() => {
  axios.get('http://localhost:8080/show').then((res) => {
    materials.value = res.data.data
  })
})

function filterByAuthor(author) {
  axios.get(`http://localhost:8080/show1?author=${encodeURIComponent(author)}`)
    .then((res) => {
      materials.value = res.data.data
    })
    .catch((err) => {
      console.error('筛选失败:', err)
    })
}

function handleCategoryClick(category) {
  console.log(`点击了 ${category} 按钮`);
  let url = 'http://localhost:8080/show';
  if (category === '绘画') {
    url = 'http://localhost:8080/show2?type=3';
  } else if (category === '图片') {
    url = 'http://localhost:8080/show2?type=1';
  }
  axios.get(url)
    .then((res) => {
      materials.value = res.data.data;
    })
    .catch((err) => {
      console.error(`${category} 加载失败:`, err);
    });
}
</script>

<style scoped>
.materials-page {
  padding: 0px;
  background-color: #f5f5f5;
  min-height: 100vh;
}

.layout-container {
  display: block;
}

.top-nav {
  background: #fff;
  padding: 16px 20px;
  border-bottom: 1px solid #e0e0e0;
}

.category-tabs, .filter-tabs {
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
}

.tab, .filter-option {
  cursor: pointer;
  padding: 6px 12px;
  border-radius: 4px;
  transition: background 0.3s;
}

.tab:hover, .filter-option:hover {
  background-color: #f0f0f0;
}

.content {
  width: 100%;
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
  height: 180px;
  object-fit: cover;
  border-radius: 6px;
  display: block;
}

.card-title {
  padding-top: 10px;
  font-size: 16px;
  text-align: center;
}

.card-tags {
  font-size: 14px;
  text-align: center;
  color: #888;
}
 .grid {
   display: flex;
   flex-wrap: wrap;
   gap: 20px;
 }
 
.el-col {
  flex: 0 0 23%;
  max-width: 23%;
}
</style>
