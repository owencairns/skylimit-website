<script setup>
import { ref, onMounted } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');

const nameFocus = ref(false);
const emailFocus = ref(false);
const msgFocus = ref(false);

const showPopup = ref(false);

const handleNameFocus = () => {
  nameFocus.value = true
}
const handleEmailFocus = () => {
  emailFocus.value = true
}
const handleMsgFocus = () => {
  msgFocus.value = true
}
const handleNameBlur = () => {
  nameFocus.value = false
}
const handleEmailBlur = () => {
  emailFocus.value = false
}
const handleMsgBlur = () => {
  msgFocus.value = false
}

const adjustTextareaHeight = () => {
  const textarea = document.querySelector('textarea');
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
}

const submitForm = () => {

  console.log(name.value);
  console.log(email.value);
  console.log(message.value);

  name.value = ''
  email.value = ''
  message.value = ''

  showPopup.value = true;
};

onMounted(() => {
  const handleClickOutsidePopup = (event) => {
    const popupWindow = document.querySelector('.popup-window');
    if (popupWindow && !popupWindow.contains(event.target)) {
      showPopup.value = false;
    }
  };

  document.addEventListener('click', handleClickOutsidePopup);
});

</script>

<template>
  <div class="background-container">
    <div class="gradient-overlay"></div>
    <img src="/img/logo-home/contactBG.jpg" alt="background image" class="background">
  </div>
  <div class="page-container" :class="{ 'popup-active': showPopup }">
    <div class="heading">
      <h2>Contact Us</h2>
      <div class="contact-msg">Interested in working with us or have any questions?
        Please fill out the form below or contact us directly, and we are happy to help!</div>
    </div>
    <div class="contact-container">
      <div class="direct-contacts">
        <div class="phone">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em"
              viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
            </svg>
          </div>
          <div class="method-container">
            <div class="label">Phone</div>
            <div class="number">123-456-7890</div>
          </div>
        </div>
        <div class="email">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em"
              viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
            </svg>
          </div>
          <div class="method-container">
            <div class="label">Email</div>
            <div class="address">skylimitvisuals@gmail.com</div>
          </div>
        </div>
      </div>
      <div class="contact-form">
        <form @submit.prevent="submitForm">
          <div class="form-heading">Send Message</div>
          <div class="form-group">
            <label for="name" :class="{ 'active': (name || nameFocus) }">Name</label>
            <input v-model="name" type="text" id="name" @focus="handleNameFocus" @blur="handleNameBlur" required />
          </div>
          <div class="form-group">
          <label for="service" class="dropdown-label">Service That Interests You</label>
          <select v-model="selected" class="package-select">
            <option disabled value="">Please Select</option>
            <option>Wedding</option>
            <option>Commercial</option>
            <option>Personal</option>
            <option>Other</option>
          </select>
        </div>
        <div v-if="selected === 'Wedding'" class="form-group">
      <label for="package">Package</label>
      <select v-model="selectedPackage" class="package-select">
        <option disabled value="">Please Select</option>
        <option>Ceremony</option>
        <option>Bronze</option>
        <option>Silver</option>
        <option>Gold</option>
        <option>Diamond</option>
      </select>
    </div>
          <div class="form-group">
            <label for="email" :class="{ 'active': email || emailFocus }">Email Address</label>
            <input v-model="email" type="email" id="email" @focus="handleEmailFocus" @blur="handleEmailBlur" required />
          </div>
          <div class="form-group">
            <label for="message" :class="{ 'active': message || msgFocus }">Message</label>
            <textarea v-model="message" type="text" id="message" maxlength="1000" @input="adjustTextareaHeight"
              @focus="handleMsgFocus" @blur="handleMsgBlur" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
  <div v-if="showPopup" class="popup-window">
    <div class="popup-content">
      <div class="popup-message">
        Thanks for getting in touch! We look forward to working with you.
      </div>
      <button @click="showPopup = false">Close</button>
    </div>
  </div>
</template>

<style scoped>
.background-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -2;
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -2;
}

.gradient-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #1d3051cc;
  mix-blend-mode: multiply;
  z-index: -1;
}

.page-container {
  padding-top: 100px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.heading {
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

h2 {
  color: #fff;
  font-size: 3rem;
}

.contact-msg {
  font-size: 1.2rem;
}

.contact-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 80%;
  margin-top: 50px;
}

.direct-contacts {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.phone,
.email {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  margin-right: 15px;
}

.icon svg {
  width: 40%;
  height: auto;
  fill: #1d3051;
}

.contact-info {
  display: flex;
  flex-direction: column;
}

.label {
  color: #00bcd4;
  font-size: 1.4rem;
  margin-bottom: 5px;
}

.number,
.address {
  color: #fff;
  font-size: 1.2rem;
  margin-left: 0;
}


.contact-form {
  width: 50%;
}

form {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
}

.form-heading {
  color: #1d3051;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

label {
  color: #1d3051;
  font-size: 1rem;
  margin-bottom: 5px;
  margin-left: 2px;
  transform: translateY(35px);
  transition: all 0.2s ease-out;
  cursor: pointer;
}

.dropdown-label {
  color: #1d3051;
  font-size: 1rem;
  margin-bottom: 5px;
  margin-left: 2px;
  cursor: pointer;
  transform: translateY(5px);
  transition: all 0.2s ease-out;
}

label.active {
  transform: translateY(5px);
}

input,
textarea {
  padding-bottom: 10px;
  padding-top: 10px;
  border: none;
  font-size: 1rem;
  outline: none;
  border-bottom: 2px solid #777;
  cursor: pointer;
  resize: none;
  overflow: hidden;
}

.package-select {
  padding-bottom: 10px;
  padding-top: 10px;
  border: 1px solid #00bcd4;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
  resize: none;
  overflow: hidden;
  appearance: none;
}

textarea {
  padding-top: 0px;
  padding-bottom: 2px;
  font-size: 1.05rem;
}

button {
  padding: 10px 20px;
  background-color: #00bcd4;
  color: #e5ecf1;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.popup-window {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 999;
}

.popup-content {
  text-align: center;
  color: #1d3051;
}

.popup-message {
  margin-bottom: 10px;
}

.popup-window button {
  padding: 8px 16px;
  background-color: #00bcd4;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.page-container.popup-active {
  filter: blur(4px);
  background-color: rgba(0, 0, 0, 0.5);
}
</style>