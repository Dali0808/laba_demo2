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
          <img v-if="showImage" src="@/assets/main.jpg" alt="Main Image" class="main-image main-image-1" />
        </transition>
      </div>
    </el-main>
    <el-main class="secondary-section">
      <div class="image-text-block">
        <transition name="fade">
          <img v-if="showImage" src="@/assets/main2.jpg" alt="Main Image" class="main-image main-image-2" />
        </transition>
        <div class="side-text">
          <h1 class="title">关于我——计算机小喇叭！</h1>
  <p class="description">
    嘿嘿，你好呀！我是<strong>计算机小喇叭</strong>，是计算机与信息学院的吉祥物~ 你没看错，我是一台会说话、懂编程的电脑，还是由我们超棒的<strong>青年新媒体中心</strong>亲手设计的喔！
  </p>
  <p class="description">
    我的任务是传递信息、分享知识、播报学院的新鲜事，让大家都能轻松了解前沿科技和学习资源！无论你是菜鸟小白还是技术大佬，我都会为你摇旗呐喊，打Call助力～
  </p>
  <p class="description">
    如果你在校园里见到我，不要害羞，来给我打个招呼吧，说不定我会送你一个“字节微笑”哦 😊
  </p>
        </div>
      </div>

  <!-- <div class="block text-center" m="t-4">
    <span class="demonstration">Switch when indicator is clicked</span>
    <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div> -->


      <div class="image-text-block-2">
        <div class="site-purpose-text fade-in-text">
          <h2>本网站的作用：</h2>
          <p>本网站用于宣传小喇叭形象以及帮助青年新媒体中心线上管理拍摄素材。</p>
          <p>如果你对我们的拍摄素材感兴趣，可以在右上角素材模块去看看喔。</p>
        </div>
        <transition name="fade">
          <img v-if="showImage" src="@/assets/main4.jpg" alt="Main Image" class="main-image main-image-3 right-shift" />
        </transition>
      </div>
      <br>
      <transition name="fade">
        <img v-if="showImage" src="@/assets/main3.jpg" alt="Main Image" class="main-image main-image-4" />
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
  font-size: 5vw;
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

.main-image-1 {
  max-width: 700px;
  margin-top: -100px;
}

.main-image-2 {
  max-width: 50%;
  margin-right: 30px;
  flex-shrink: 0;
}

.main-image-3,
.main-image-4 {
  max-width: 50%;
  margin: 20px 0;
}

@media (max-width: 768px) {
  .main-image-2 {
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

.image-text-block {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  gap: 40px;
  margin: 40px 0;
}

@media (max-width: 768px) {
  .image-text-block {
    flex-wrap: wrap;
  }
}

.side-text {
  flex: 1;
  min-width: 300px;
  margin-right: 5%;
}

.side-text h1 {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 12px;
}

.side-text p {
  font-size: 16px;
  line-height: 1.6;
  color: #555;
}
</style>

<style scoped>
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.image-text-block-2 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  margin: 60px 0;
  flex-wrap: wrap;
}

.site-purpose-text {
  flex: 1;
  min-width: 300px;
}

.site-purpose-text h2 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 12px;
}

.site-purpose-text p {
  font-size: 16px;
  line-height: 1.6;
  color: #444;
  font-weight: 500;
}

.right-shift {
  margin-left: 30px;
}

.fade-in-text {
  animation: fadeInUp 1s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>