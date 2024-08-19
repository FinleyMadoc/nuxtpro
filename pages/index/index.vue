<script setup lang="ts">
// 拿到的data就是响应式的数据
const { data: channelList } = await useFetch('/api/channel');
console.log("channelList", channelList);

const { data: videoList } = await useFetch('/api/video');
console.log("videoList", videoList);

</script>

<template>
    <div>
    <!-- <h2>首页</h2>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="success">主要按钮</van-button>
    <van-button type="default">主要按钮</van-button>
    <van-button type="warning">主要按钮</van-button>
    <van-button type="danger">主要按钮</van-button> -->
    <!-- 公共头部 -->
    <header class="app-header"></header>

    <!-- 频道模块 -->
    <van-tabs>
        <van-tab v-for="item in channelList" :key="item.id" :title="item.name" />
    </van-tabs>

    <!-- 视频列表 -->
    <div class="video-list">
        <Nuxtlink class="v-card" v-for="item in videoList" :key="item.id" :to="/video/${item.id}">
            <div class="card">
                <div class="card-img">
                    <img class="pic" src="@/assets/images/loading/png" alt=""/>
                </div>
                <div class="count">
                    <span>
                        
                    </span>
                </div>
            </div>
        </Nuxtlink>
    </div>
</div>
</template>

<style scoped>

</style>
