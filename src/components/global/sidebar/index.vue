<template>
  <el-aside width="200px">
    <el-menu :default-active="activeMenu" @select="handleSelect" router style="padding: 16px">
      <el-menu-item v-for="(item, index) in menuItems.slice(1)"
        :key="index"
        :index="item.path"
        style="border-radius: 8px;">
        {{ item.name }}
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script setup>
import store from "@/store/index.js";
import { computed, ref } from "vue";

const activeMenu = computed(() => store.state.activeMenu);
import routes from "@/router/routes.js";

const menuItems = ref(routes);

function handleSelect(key, keyPath) {
  console.log(`Selected menu item: ${key}`);
  store.dispatch('updateActiveMenu', key);
}
</script>

<style scoped>
.el-menu {
  height: 100%;

  .el-menu-item.is-active {
    background: rgba(64, 158, 255, .1);
  }

  .el-menu-item:not(.is-active):hover {
    background: none;
    color: #409eff;
  }
}
</style>