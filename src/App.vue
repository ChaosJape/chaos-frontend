<template>
  <div class="common-layout">
    <el-container style="height: 100vh;">
      <el-header style="background:gray;">Header</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu :default-active="activeMenu" @select="handleSelect" router>
            <el-menu-item index="/">Home</el-menu-item>
            <el-menu-item index="/about">About</el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-footer style="background:gray;">Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const activeMenu = ref('/');
const route = useRoute();

onMounted(() => {
  activeMenu.value = route.path;
});

function handleSelect(key, keyPath) {
  console.log(`Selected menu item: ${key}`);
}
</script>

<style scoped>
</style>
