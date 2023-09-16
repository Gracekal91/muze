<template>
  <div class="header-container">
    <div class="search_box">
      <input placeholder='search...'>
    </div>
    <div class="search_box">
        <v-icon>mdi-dots-vertical</v-icon>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>

<style lang="scss">
.header-container{
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: black;
  display: flex;
  color: aliceblue;
  justify-content: space-between;
  padding: 0 1rem;

  .search_box{
    input{

    }
  }
}
</style>