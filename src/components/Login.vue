<script setup lang="ts">
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

const router = useRouter()

const username = ref('')
const password = ref('')

const errMsg = ref() //ERROR MESSAGE

const login = () => {
  signInWithEmailAndPassword(getAuth(), username.value, password.value)
    .then(() => {
      console.log("Successfully Signed In")
      router.push('/')
    })
    .catch((error) => {
      console.log(error)
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid email";
          break;
        case "auth/user-not-found":
          errMsg.value = "No account with that email was found";
          break;
        case "auth/wrong-passwword":
          errMsg.value = "Incorrect password";
          break;
        default:
          errMsg.value = "Email or password was incorrect";
          break;
      }
    })
}
</script>

<template>
  <div class="login-container">
    <div class="login-card">
      <h1>Admin Login</h1>
      <div class="login-form">
        <div class="login-input">
          <input type="text" placeholder="Email" v-model="username">
        </div>
        <div class="login-input">
          <input type="password" placeholder="Password" v-model="password">
        </div>
        <button class="login-button" @click="login">Login</button>
        <p v-if="errMsg">{{ errMsg }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f3f3f3;
  color: black;
}

.login-card {
  width: 400px;
  background-color: #ffffff;
  border-radius: 10px;
  padding-left: 50px;
  padding-right: 75px;
  text-align: center;
}

.login-card h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 30px;
}

.login-form {
  margin-bottom: 30px;
}

.login-input {
  margin-bottom: 20px;
}

.login-input input {
  width: 100%;
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #d3d3d3;
  font-size: 1rem;
  color: #333333;
}

.login-button {
  display: block;
  margin: 0 auto;
  padding: 12px 30px;
  border-radius: 5px;
  border: none;
  background-color: #00bcd4;
  color: #ffffff;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.login-button:hover {
  background-color: #0192a5;
}

.login-text {
  font-size: 1rem;
  color: #666666;
}

</style>