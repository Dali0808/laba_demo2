<template>
  <el-container class="page-wrapper">
    <el-header class="nav-bar">
      <div class="logo">LABA</div>
      <div class="nav-links">
        <el-button text @click="goToPage('/materials')">素材</el-button>
        <el-button text @click="goToPage('/speaker')">小喇叭</el-button>
        <el-button text @click="goToPage('/about')">关于我们</el-button>
      </div>
    </el-header>
    <el-main class="main-content">
      <div class="hero-section">
        <div class="hero-text">
          <transition name="fade">
            <div v-if="showText">
              <h1>欢迎来到<br>计算机小喇叭</h1>
              <p>这里是计算机与信息学院专属吉祥物</p>
            </div>
          </transition>
        </div>
        <transition name="fade">
          <img v-if="showImage" src="@/assets/main.jpg" alt="Main Image" class="main-image" />
        </transition>
      </div>
    </el-main>
    <el-main class="secondary-section">
      <transition name="fade">
        <img v-if="showImage" src="@/assets/main2.jpg" alt="Main Image" class="main-image" />
      </transition>
      <h2>深入了解</h2>
      <p>在这里你可以添加更多说明内容、FAQ 或其他信息，鼓励用户继续探索。</p>
    </el-main>
    <el-footer class="footer">© 2025 Inc.</el-footer>
  </el-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ElContainer, ElHeader, ElMain, ElFooter, ElButton } from 'element-plus'
import 'element-plus/dist/index.css'

const router = useRouter()
const goToPage = (path) => {
  router.push(path)
}

const showImage = ref(false)
const showText = ref(false)

onMounted(() => {
  setTimeout(() => {
    showImage.value = true
  }, 100)

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        showText.value = true
      }
    })
  }, { threshold: 0.1 })

  const textEl = document.querySelector('.hero-text')
  if (textEl) {
    observer.observe(textEl)
  }
})
</script>

<style scoped>
.page-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f7;
  padding: 0 40px;
  height: 60px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.logo {
  font-size: 20px;
  font-weight: bold;
}

.nav-links el-button {
  margin-left: 20px;
  font-weight: 500;
}

.main-content {
  flex: 1;
  text-align: center;
  padding: 80px 20px;
  background-color: #ffffff;
}

.hero-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
}

.hero-text {
  padding-top: 10vh;
  margin-left: 5vw;
  flex: 1;
  max-width: 600px;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
}

.hero-text h1 {
  font-size: 6vw;
  font-weight: bold;
}

.hero-text p {
  font-size: 1.5vw;
  font-weight: 500;
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .hero-text h1 {
    font-size: 60px;
  }
  .hero-text p {
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  .hero-text {
    max-width: 100%;
    margin: 0 auto;
    text-align: center;
  }
  .hero-text h1 {
    font-size: 42px;
  }
  .hero-text p {
    font-size: 14px;
  }
}

.footer {
  text-align: center;
  padding: 20px;
  background-color: #f5f5f7;
  color: #888;
}

.main-image {
  margin-right: 30px;
  max-width: 700px;
  width: 100%;
  height: auto;
}

/* 小屏设备下自动缩小图片 */
@media (max-width: 1024px) {
  .main-image {
    max-width: 500px;
    margin-right: 0;
  }
}

@media (max-width: 768px) {
  .main-image {
    max-width: 100%;
    margin: 0 auto;
  }
}

.card-container {
  display: flex;
  justify-content: space-around;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 40px;
}

.feature-card {
  background-color: #fff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  text-align: center;
  width: 280px;
}

.feature-card .icon {
  font-size: 36px;
  margin-bottom: 12px;
}

.fade-enter-active {
  transition: all 0.8s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(40px);
}
.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
