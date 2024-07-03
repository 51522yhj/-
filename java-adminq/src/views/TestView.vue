<template>
  <div class="container">
    <el-header style="background-color: #0088d2">
      <h1 style="color: white">智能物联</h1>
      <el-icon name="search"></el-icon>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer ref="footer">
      <el-row>
        <el-col ref="col" id="cang" :span="14" @click="findc">
          <span class="iconfont icon-shouye-zhihui"></span>
        </el-col>
      </el-row>
      <el-row>
        <el-col ref="col" id="dong" :span="14" @click="findd">
          <span class="iconfont icon-shouye-zhihui"></span>
        </el-col>
      </el-row>
      <el-row>
        <el-col ref="col" id="gong" :span="14" @click="findg">
          <span class="iconfont icon-shouye-zhihui"></span>
        </el-col>
      </el-row>
      <el-row>
        <el-col
          ref="col"
          :span="14"
          @click="findm"
          class="x"
          style="width: auto; height: auto; color: red"
          id="my"
        >
          <span
            class="iconfont icon-shouye-zhihui"
            style="margin-left: 5px; margin-bottom: 15px"
          ></span
          >首页
        </el-col>
      </el-row>
    </el-footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
const footer = ref(null)
const cols = ref([])

onMounted(() => {
  // 使用 $el 来获取底层 DOM 元素
  const footerElement = footer.value.$el
  cols.value = Array.from(footerElement.querySelectorAll('.el-col'))
  cols.value.forEach((col) => {
    console.log(col) // 在控制台打印每个 el-col 元素
  })
})
const router = useRouter()
const findg = () => {
  console.log(cols.value)
  cols.value.forEach((span) => {
    if (span.id === 'gong') {
      span.style.color = 'red'
    } else {
      span.style.color = ''
    }
  })
  router.push('/test/gong')
}

const findd = () => {
  //let spans = document.querySelectorAll('el-col')
  cols.value.forEach((span) => {
    if (span.id === 'dong') {
      span.style.color = 'red'
    } else {
      span.style.color = ''
    }
  })
  router.push('/test/dong')
}
const findm = () => {
  //let spans = document.querySelectorAll('el-col')
  cols.value.forEach((span) => {
    if (span.id === 'my') {
      span.style.color = 'red'
    } else {
      span.style.color = ''
    }
  })
  router.push('/test/my')
}
const findc = () => {
  //let spans = document.querySelectorAll('el-col')
  cols.value.forEach((span) => {
    if (span.id === 'cang') {
      span.style.color = 'red'
    } else {
      span.style.color = ''
    }
  })
  router.push('/test/cang')
}
</script>
<style scoped>
.x {
  width: 50px;
}
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f5f7fa;
}

.el-main {
  flex: 1;
  padding: 1rem;
}

.el-footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  background-color: #f5f7fa;
}
</style>
