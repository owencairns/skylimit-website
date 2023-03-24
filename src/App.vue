<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

</script>

<template>
  <div id="nav">
    <RouterLink to="/login" class="link">Login</RouterLink>
    <RouterLink to="/" class="link">Home</RouterLink>
  </div>
  <div class="main">
    <router-view/>
  </div>
</template>

<style scoped>

#nav {
  overflow: hidden;
  background-color: #333;
  position: fixed; /* Set the navbar to fixed position */
  top: 0;
  width: 100%;
  right: 0;
}
button {
  background-color: #333;
}

#nav .link,
#nav button {
  float: right;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}


#nav .link:hover {
  background: #ddd;
  color: black;
}

.user-email {
  position: absolute;
  top: 5%;
  left: 80%
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.main {
  margin-top: 30px;
}
</style>
