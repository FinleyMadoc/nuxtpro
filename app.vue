<script setup lang="ts">
// SEO优化信息
useSeoMeta({
  title: '哔哩哔哩(゜-゜)つロ干杯~-bilibili', //搜索引擎搜出的标题
  // 搜索引擎标题下的描述
  description: '哔哩哔哩（bilibili.com)是国内知名的视频弹幕网站，这里有及时的动漫新番，活跃的ACG氛围，有创意的Up主。大家可以在这里找到许多欢乐。', 
  keywords: 'B站，哔哩哔哩，bilibili' //搜索关键词
})
</script>

<template>
  <!-- Nuxt基于文件的路由系统 -->
  <!-- 首页 index/index.vue -->
   <!-- 相当于RouterLink -->
   <!-- <NuxtLink to="/">首页</NuxtLink> -->
   <!-- 视频页 video/video.vue -->
   <!-- <NuxtLink to="/video">视频页</NuxtLink> -->
  
  <!-- Nuxt 页面路由， 自动生成 相当于RouterView -->
  <NuxtPage />

</template>

<style lang="scss">
/* 基础样式 */
@import './assets/styles/base.scss';
/* 字体图标 */
@import './assets/styles/iconfont.scss';
:root {
  /* css 变量设置组件库主题 */
  --van-primary-color: #FB7299 !important;
}
</style>