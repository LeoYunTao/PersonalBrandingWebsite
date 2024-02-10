<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBarComponent from '@/components/NavBarComponent.vue';
</script>

<template>
  <NavBarComponent />
  
<!-- 
    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
 -->
  <RouterView />

  <footer class="container margin-top-210">
    <p>&copy;Yun Tao 2021. All Rights Reserved.</p>
  </footer>
</template>