<script setup lang="js">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';

let auth;
const userEmail = ref('');
const userName = ref('');
const userImage = ref('');

const router = useRouter();

onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      userEmail.value = auth.currentUser.email;
      userName.value = userEmail.value.split('@')[0];
      if (userName.value === 'Reagan') {
        userImage.value = '/img/logo-home/Reagan.webp';
      } else if (userName.value === 'Noah') {
        userImage.value = '/img/logo-home/Noah.webp';
      } else {
        userImage.value = '/img/logo-home/Owen.jpeg';
      }
    }
  });
});

const signOutUser = () => {
  signOut(auth)
    .then(() => {
      console.log('User signed out');
      router.push({ name: 'home' });
    })
    .catch((error) => {
      console.log(error);
    });
};

let vidPackages = ref([]);
let photoPackages = ref([]);
let personalPackages = ref([]);

const getVidPackages = async () => {
  try {
    const db = getFirestore();
    const vidPackagesCol = doc(db, 'PackageDescriptions', 'WeddingVideography');
    const vidPackagesDoc = await getDoc(vidPackagesCol);

    // Check if the document exists before trying to access its data
    if (vidPackagesDoc.exists()) {
      // add each document to the vidPackages array in the order Ceremony, Silver, Gold, Diamond
      vidPackages.value.push(vidPackagesDoc.data().Ceremony);
      vidPackages.value.push(vidPackagesDoc.data().Silver);
      vidPackages.value.push(vidPackagesDoc.data().Gold);
      vidPackages.value.push(vidPackagesDoc.data().Diamond);
    } else {
      console.error('WeddingVideography document does not exist');
    }
  } catch (error) {
    console.error('Error fetching video packages:', error);
  }
};

const getPhotoPackages = async () => {
  try {
    const db = getFirestore();
    const photoPackagesCol = doc(db, 'PackageDescriptions', 'WeddingPhotography');
    const photoPackagesDoc = await getDoc(photoPackagesCol);

    // Check if the document exists before trying to access its data
    if (photoPackagesDoc.exists()) {
      // add each document to the vidPackages array in the order Ceremony, Silver, Gold, Diamond
      photoPackages.value.push(photoPackagesDoc.data().Engagement);
      photoPackages.value.push(photoPackagesDoc.data().Silver);
      photoPackages.value.push(photoPackagesDoc.data().Gold);
      photoPackages.value.push(photoPackagesDoc.data().Diamond);
    } else {
      console.error('WeddingPhotography document does not exist');
    }
  } catch (error) {
    console.error('Error fetching photo packages:', error);
  }
};

const getPersonalPackages = async () => {
  try {
    const db = getFirestore();
    const personalPackagesCol = doc(db, 'PackageDescriptions', 'Personal');
    const personalPackagesDoc = await getDoc(personalPackagesCol);

    // Check if the document exists before trying to access its data
    if (personalPackagesDoc.exists()) {
      // add each document to the vidPackages array in the order Ceremony, Silver, Gold, Diamond
      personalPackages.value.push(personalPackagesDoc.data().ProfessionalHeadshots);
      personalPackages.value.push(personalPackagesDoc.data().SeniorPhotos);
      personalPackages.value.push(personalPackagesDoc.data().PersonalPhotoShoot);
      personalPackages.value.push(personalPackagesDoc.data().FamilyPhotography);
    } else {
      console.error('WeddingVideography document does not exist');
    }
  } catch (error) {
    console.error('Error fetching video packages:', error);
  }
};

const enableEdit = (packageItem) => {
  packageItem.editable = true;
};

const saveChanges = (packageItem) => {
  packageItem.editable = false;
};

const updateFirebase = async (packageItem, category, index) => {
  console.log("Not implemented")
};

getVidPackages();
getPhotoPackages();
getPersonalPackages();
</script>


<template>
  <div class="admin-dashboard">
    <!-- Header Section (User Image and Name) -->
    <header>
      <div class="user-info">
        <img :src="userImage" alt="User Image" class="user-img">
        <div class="heading-text">
          <h1 class="admin-title">Admin Dashboard</h1>
          <h2 class="user-name">Welcome, {{ userName }}</h2>
          <button class="logout" @click="signOutUser">Sign Out</button>
        </div>
      </div>
    </header>

    <!-- Content Management Section -->
    <section class="manage-content">

      <div class="wedding-vid-packages">
        <h2>Wedding Videography Packages</h2>
        <div class="package" v-for="(pack, index) in vidPackages">
          <div v-if="!pack.editable">
            <h3>{{ pack.name }}</h3>
            <p>{{ pack.price }}</p>
            <p>{{ pack.description }}</p>
            <button @click="enableEdit(pack)">Edit</button>
          </div>
          <div v-else>
            <div class="editable-fields">
              <input v-model="pack.name" placeholder="Package Name" />
              <input v-model="pack.price" placeholder="Package Price" />
              <input v-model="pack.description" placeholder="Package Description" />
            </div>
            <div class="editable-buttons">
              <button class="save" @click="saveChanges(pack)">Save</button>
              <button @click="updateFirebase(pack, 'WeddingVideography', index)">Update Firebase</button>
            </div>
          </div>
        </div>
      </div>

      <div class="wedding-photo-packages">
        <h2>Wedding Photography Packages</h2>
        <div class="package" v-for="(pack, index) in photoPackages">
          <div v-if="!pack.editable">
            <h3>{{ pack.name }}</h3>
            <p>{{ pack.price }}</p>
            <p>{{ pack.description }}</p>
            <button @click="enableEdit(pack)">Edit</button>
          </div>
          <div v-else>
            <div class="editable-fields">
              <input v-model="pack.name" placeholder="Package Name" />
              <input v-model="pack.price" placeholder="Package Price" />
              <input v-model="pack.description" placeholder="Package Description" />
            </div>
            <div class="editable-buttons">
              <button class="save" @click="saveChanges(pack)">Save</button>
              <button @click="updateFirebase(pack, 'WeddingPhotography', index)">Update Firebase</button>
            </div>
          </div>
        </div>
      </div>

      <div class="personal-packages">
        <h2>Personal Packages</h2>
        <div class="package" v-for="(pack, index) in personalPackages">
          <div v-if="!pack.editable">
            <h3>{{ pack.name }}</h3>
            <p>{{ pack.price }}</p>
            <p>{{ pack.description }}</p>
            <button @click="enableEdit(pack)">Edit</button>
          </div>
          <div v-else>
            <div class="editable-fields">
              <input v-model="pack.name" placeholder="Package Name" />
              <input v-model="pack.price" placeholder="Package Price" />
              <input v-model="pack.description" placeholder="Package Description" />
            </div>
            <div class="editable-buttons">
              <button class="save" @click="saveChanges(pack)">Save</button>
              <button @click="updateFirebase(pack, 'Personal', index)">Update Firebase</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
  
  
<style scoped>
.admin-dashboard {
  font-family: 'Arial', sans-serif;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

header {
  background-color: #1d3051;
  color: white;
  width: 100%;
  padding: 20px;
  text-align: center;
  padding-top: 75px;
}

.user-info {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.user-img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 20px;
}

.admin-title {
  font-size: 2rem;
  margin: 0;
}

.user-name {
  font-size: 1.5rem;
  margin: 0;
}

.logout {
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #5773a2;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s;
}

.logout:hover {
  background-color: #405c8e;
}

.manage-content {
  background-color: #ffffff;
  width: 100%;
  max-width: 1200px;
  margin-top: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #333;
}

.package {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
}

.package h3 {
  font-size: 1.2rem;
  margin: 0 0 10px;
  color: #333;
}

.package p {
  font-size: 1rem;
  color: #666;
  margin: 0 0 10px;
}

button {
  background-color: #0095f9;
}

.editable-fields input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
}

.editable-buttons {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 10px;
}

.editable-buttons button {
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-left: 10px;
  font-size: 1rem;
}

.editable-buttons button.save {
  background-color: #4caf50;
  color: white;
}

.editable-buttons button.save:hover {
  background-color: #45a045;
}

.editable-buttons button.cancel {
  background-color: #e53935;
  color: white;
}

.editable-buttons button.cancel:hover {
  background-color: #d83731;
}
</style>
