<template>
  <div class="iframe-container">
    <iframe class="embedded-page" :src="url"></iframe>
  </div>
</template>

<script setup>
import {ref} from "vue";

const url = ref(import.meta.env.VITE_APP_BASE_STATIC + '/Basic/CSS/02-Display/index.html');
</script>

<style scoped src="@/assets/css/embedded-page-common.css"></style>