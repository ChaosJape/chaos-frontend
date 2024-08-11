<template>
  <el-aside width="200px">
    <el-menu :default-active="activeMenu" @select="handleSelect" router>
      <el-menu-item index="/">Home</el-menu-item>
      <el-menu-item index="/text">Text</el-menu-item>
      <el-menu-item index="/selector">Selector</el-menu-item>
      <el-menu-item index="/display">Display</el-menu-item>
      <el-menu-item index="/background">Background</el-menu-item>
      <el-menu-item index="/box-model">BoxModel</el-menu-item>
      <el-menu-item index="/float">Float</el-menu-item>
      <el-menu-item index="/about">About</el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script setup>
import store from "@/store/index.js";
import {computed} from "vue";
const activeMenu = computed(() => store.state.activeMenu);
function handleSelect(key, keyPath) {
  console.log(`Selected menu item: ${key}`);
  store.dispatch('updateActiveMenu', key);
}
</script>

<style scoped>

</style>