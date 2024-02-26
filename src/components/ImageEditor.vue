<script setup>
<<<<<<< HEAD
import { ref } from "vue";
=======
import { ref, defineEmits, defineProps } from "vue";
>>>>>>> refs/remotes/origin/master
import { getStorage, uploadBytes, ref as storageRef } from "firebase/storage";

const storage = getStorage();

// Props + emit
const props = defineProps(['selectedImage']);
const emit = defineEmits(['close', 'change'])

// Refs
const imageDimensions = ref('');
const imagePath = ref('');
const uploadedImage = ref(null);

const localDimensions = ref('');
const localPath = ref('');

const fileInput = ref(null); // Add this line to get a reference to the file input element
const fileSave = ref(null); // Add this line to get a reference to the file later

// Event handler for image load
const handleImageLoad = () => {
  // Get dimensions and file size
  const image = new Image();
  image.src = props.selectedImage.url;
  imageDimensions.value = `${image.width} x ${image.height}`;
  imagePath.value = props.selectedImage.path;
};

const handleFileLoad = (width, height) => {
  localDimensions.value = `${width} x ${height}`;
};

// Event handler for file input change
const openFileUpload = () => {
  if (fileInput.value.files.length > 0) {
    const file = fileInput.value.files[0];
    fileSave.value = file; // Save the file for later
    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target.result;

      img.onload = () => {
        uploadedImage.value = e.target.result;
        localDimensions.value = `${img.width} x ${img.height}`;
        localPath.value = file.name;
        handleFileLoad(img.width, img.height);
      };
    };

    reader.readAsDataURL(file);
  }
};

// create a function that uploads the input image to firebase storage, emit 'close' when upload is successful
const uploadImage = () => {
  // 'file' comes from the Blob or File API
  uploadBytes(storageRef(storage, imagePath.value)
    , fileSave.value).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });
  emit('close');
};
</script>


<template>
  <div class="popup">
    <div class="popup-content">
      <span class="close-btn" @click="$emit('close')">X</span>
      <div class="image-grid">
        <div class="image-box">
          <div class="image-container">
            <img :src="selectedImage.url" :alt="selectedImage.alt" class="edited-image" @load="handleImageLoad" />
          </div>
          <div class="image-details">
            <p><strong>Image Dimensions:</strong> {{ imageDimensions }}</p>
            <p><strong>Image Path:</strong> {{ imagePath }}</p>
          </div>
        </div>
        <!-- Code for uploaded image -->
        <div class="image-box">
          <div class="image-container">
            <img v-if="uploadedImage" :src="uploadedImage" alt="New User Image" class="edited-image"
              @load="() => handleImageLoad(uploadedImage.width, uploadedImage.height)" />
            <div v-else class="image-placeholder" @click="openFileUpload">
              <div>Click to Upload a New Image</div>
              <input type="file" ref="fileInput" @change="openFileUpload" accept="image/*" />
            </div>
          </div>
          <div class="image-details">
            <p><strong>Image Dimensions:</strong> {{ localDimensions }}</p>
            <p><strong>Local Name:</strong> {{ localPath }}</p>
          </div>
        </div>
      </div>
      <div class="description-box">
        <!-- add a button that uploads input image to firebase -->
        <button @click="uploadImage">Upload Image</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.popup {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  z-index: 999;
}

.popup-content {
  width: 60%;
  max-width: 800px;
  padding: 25px;
  border-radius: 10px;
  background-color: white;
  overflow: hidden;
  position: relative;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
}

.close-btn {
  position: absolute;
  top: 7px;
  right: 7px;
  cursor: pointer;
  font-size: 20px;
  color: #333;
}

.image-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.image-box {
  border-radius: 10px;
  overflow: hidden;
}

.image-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  overflow: hidden;
}

.image-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #333;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.image-placeholder:hover {
  background-color: #ddd;
}

.edited-image {
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.image-details {
  margin-top: 10px;
  color: #333;
}

.description-box {
  margin-top: 20px;
  color: #333;
}

input {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
}

input:hover {
  cursor: pointer;
}

/* style the button */
button {
  display: block;
  margin: 0 auto;
  padding: 10px 20px;
  color: #eee;
}
</style>