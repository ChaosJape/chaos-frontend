<template>
  <div class="common-layout">
    <el-container style="height: 100vh;">
      <my-header></my-header>
      <el-container>
        <my-sidebar></my-sidebar>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
          <my-footer></my-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import {onMounted, watch} from 'vue';
import {useRoute} from 'vue-router';
import {useStore} from "vuex";
import mySidebar from "@/components/global/sidebar/index.vue";
import myHeader from "@/components/global/header/index.vue";
import myFooter from "@/components/global/footer/index.vue";

const route = useRoute();
const store = useStore();

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


</script>

<style scoped>
</style>
