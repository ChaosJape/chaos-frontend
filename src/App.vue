<template>
  <div class="common-layout">
    <el-container style="height: 100vh;">
      <el-header style="background:skyblue;">It's gonna be the header</el-header>
      <el-container>
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
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-footer style="background:skyblue;">It's gonna be the footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import {ref, onMounted, computed, watch} from 'vue';
import { useRoute,useRouter } from 'vue-router';
import {useStore} from "vuex";

const route = useRoute();
const router = useRouter();
const store = useStore();
const activeMenu = computed(() => store.state.activeMenu);

onMounted(() => {
  const currentRoutePath = route.path;
  console.log(currentRoutePath)
  if (currentRoutePath !== store.state.activeMenu) {
    store.dispatch('updateActiveMenu', currentRoutePath);
  }
});

watch(() => route.path, (newPath) => {
  store.dispatch('updateActiveMenu', newPath);
});

function handleSelect(key, keyPath) {
  console.log(`Selected menu item: ${key}`);
  store.dispatch('updateActiveMenu', key);
}
</script>

<style scoped>
</style>
