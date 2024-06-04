<template>
  <div class="container">
    <Header />
    <router-view></router-view> <!-- index.js가 그려지는 영역 -->
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
</style>