<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
          floating
          permanent
      >
<lazy-menus-menu-header></lazy-menus-menu-header>
        <v-list
            density="compact"
            nav
        >
          <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
          <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 250px"></v-main>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      drawer: true,
      rail: true,
    }
  },
}
</script>
<style lang="scss">
.logo{
  margin-left: 1.2rem;
}
</style>
