<script setup lang="ts">
import { ref, Ref } from 'vue'
import { getAuth, signInWithEmailAndPassword, UserCredential } from 'firebase/auth'
import { useRouter } from 'vue-router';

const router = useRouter()

const username = ref('')
const password = ref('')

const login = () => {
  signInWithEmailAndPassword(getAuth(), username.value, password.value)
    .then((data) => {
      console.log("Successfully Signed In")
      router.push('/')
    })
    .catch((error) => {
      console.log(username.value, password.value)
    })
};

</script>

<template>
  <div class="center">
    <h1>Login</h1>
    <div class="fields">
      <input type="text" placeholder="Email" name="userBox" v-model="username">
      <input type="text" placeholder="Password" name="passBox" v-model="password">
    </div>
    <button class="login" @click="login">Login</button>
    </div>
</template>

<style scoped>

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width:400px;
  background: #242424;
  border: 2px solid lightgray;
  border-radius: 10px;
  color: #42b983;
  padding: 10px
}

.center h1 {
  text-align: center;
  padding: 0 0 20px 0;
  border-bottom: 1px solid lightgray;
}

.fields {
  position: relative;
  border-bottom: 1px solid lightgray;
  margin: 30px 0px;
}

.fields input {
  width: 90%;
  padding: 0 5px;
  height: 40px;
  font-size: 16px;
  border: none;
  background: none;
  border: 2px solid lightgray;
  border-radius: 10px;
  color: white;
  margin-bottom: 20px
}

.center .login {
  transform: translateY(-15px)
}

</style>