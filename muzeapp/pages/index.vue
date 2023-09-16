<template>
  <div class="main_container">
    <div class="left">
      <menusMenu/>
    </div>
    <div class="right">
      <HomeHeader />
    </div>
  </div>
</template>
<script setup lang="ts">
import HomeHeader from "~/components/HomeHeader.vue";
</script>
<style lang="scss">
.right{
  width: 100%;
}
</style>
