<template>
  <el-container style="height: 100vh;">
    <el-aside width="200px">
      <el-menu :default-active="activeMenu" @select="handleSelect" router>
        <el-menu-item index="/">Home</el-menu-item>
        <el-menu-item index="/about">About</el-menu-item>
      </el-menu>
    </el-aside>

    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
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
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
