<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#2d3a4b"
    class="el-menu-vertical-demo"
    text-color="#fff"
    router
    :default-active="'/index'"
  >
    <!-- index="/index" -->
    <el-menu-item>
      <el-icon><home-filled /></el-icon>
      <span @click="refresh">首页</span>
    </el-menu-item>

    <el-sub-menu :index="menu.path" :key="menu" v-for="menu in menuList">
      <template #title>
        <!--  <el-icon><svg-icon :icon="menu.icon"/></el-icon> -->
        <span>{{ menu.name }}</span>
      </template>

      <el-menu-item
        :index="item.path"
        :key="item"
        v-for="item in menu.children"
        @click="openTab(item)"
      >
        <!-- <el-icon><svg-icon :icon="item.icon"/></el-icon> -->
        <span>{{ item.name }}</span>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import {
  HomeFilled,
  User,
  Tickets,
  Goods,
  DocumentAdd,
  Management,
  Setting,
  Edit,
  SwitchButton,
  Promotion,
} from '@element-plus/icons-vue'
import { ref, onMounted } from 'vue'
import store from '@/store'
import { useRouter } from 'vue-router'
const menuList = ref(store.getters.GET_MENULIST)
console.log(menuList)
const openTab = (item) => {
  //console.log('------------------' + item)
  store.commit('ADD_TABS', item)
}
const refresh = () => {
  location.reload()
}
onMounted(() => {
  console.log('?????' + store.getters.GET_TOKEN)
  // 页面初次加载时可以执行一些操作
  if (!store.getters.GET_TOKEN) {
    console.log('页面仅刷新一次')
    refresh()
  }
})
</script>

<style lang="scss" scoped>
</style>