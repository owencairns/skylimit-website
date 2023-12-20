<script setup>
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

  if (!auth.currentUser) {
    router.push({ name: 'login' });
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      router.push({ name: 'admin' });
      userEmail.value = auth.currentUser.email;
      userName.value = userEmail.value.split('@')[0];
      if (userName.value === 'Reagan' || userName.value === 'reagan') {
        userName.value = 'Reagan';
        userImage.value = '/img/logo-home/Reagan.webp';
      } else if (userName.value === 'Noah' || userName.value === 'noah') {
        userName.value = 'Noah';
        userImage.value = '/img/logo-home/Noah.webp';
      } else {
        userName.value = 'Owen';
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

const packageCategories = ['Wedding Videography', 'Wedding Photography', 'Personal'];

let vidPackages = ref([]);
let photoPackages = ref([]);
let personalPackages = ref([]);

const getPackageData = async (category) => {
  try {
    const db = getFirestore();
    const packagesCol = doc(db, 'PackageDescriptions', category);
    const packagesDoc = await getDoc(packagesCol);

    // Check if the document exists before trying to access its data
    if (packagesDoc.exists()) {
      if (category === 'WeddingVideography') {
        vidPackages.value.push(...Object.values(packagesDoc.data()));
      } else if (category === 'WeddingPhotography') {
        photoPackages.value.push(...Object.values(packagesDoc.data()));
      } else {
        personalPackages.value.push(...Object.values(packagesDoc.data()));
      }
    } else {
      console.error('Document does not exist');
    }
  } catch (error) {
    console.error('Error fetching packages:', error);
  }
};

const enableEdit = (packageItem) => {
  // Store the original values before editing
  packageItem.originalName = packageItem.name;
  packageItem.originalPrice = packageItem.price;
  packageItem.originalDescription = [...packageItem.description]; // Clone the array
  packageItem.editable = true;
};

const discardChanges = (packageItem) => {
  // Revert the changes made by restoring the original values
  packageItem.name = packageItem.originalName;
  packageItem.price = packageItem.originalPrice;
  packageItem.description = [...packageItem.originalDescription]; // Clone the array
  packageItem.editable = false;
};


const updateFirebase = async (packageItem, category, index) => {
  try {
    const db = getFirestore();
    const packageDoc = doc(db, 'PackageDescriptions', category);

    // Update the document with new values from packageItem
    await updateDoc(packageDoc, {
      [packageItem.name]: {
        name: packageItem.name,
        price: packageItem.price,
        description: packageItem.description,
        image: packageItem.image,
      },
    });

    // Log a success message
    console.log('Document successfully updated!');

    // Update the local vidPackages array with the new values
    vidPackages.value[index] = packageItem;
  } catch (error) {
    console.error('Error updating document: ', error);
  }
  packageItem.editable = false;
};

const addBullet = (packageItem) => {
  // add a new bullet point to the description array at the end
  packageItem.description.push('');
};

const removeBullet = (packageItem, index) => {
  // remove the bullet point at the given index
  packageItem.description.splice(index, 1);
};

getPackageData('WeddingVideography');
getPackageData('WeddingPhotography');
getPackageData('Personal');
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
    <section class="manage-content 1">
      <h2 class="section-title">Wedding Videography</h2>
      <div class="wedding-vid-packages">
        <div class="package" v-for="(pack, index) in vidPackages" :key="index">
          <div v-if="!pack.editable" class="package-info">
            <div class="label">Package Name:</div>
            <h3>{{ pack.name }}</h3>
            <div class="label">Package Price:</div>
            <p>{{ pack.price }}</p>
            <div class="label">Package Image Path:</div>
            <p>{{ pack.image }}</p>
            <div class="label">Package Description:</div>
            <p class="bullet" v-for="(desc, descIndex) in pack.description" :key="descIndex">{{ desc }}</p>
          </div>
          <div v-else class="editable-fields">
            <label for="packageName">Package Name:</label>
            <input id="packageName" v-model="pack.name" placeholder="Package Name" />
            <label for="packagePrice">Package Price:</label>
            <input id="packagePrice" v-model="pack.price" placeholder="Package Price" />
            <label for="packageImage">Package Image Path:</label>
            <input id="packageImage" v-model="pack.image" placeholder="Package Path" />
            <label for="packageDescription">Package Description:</label>
            <div v-for="(desc, descIndex) in pack.description" :key="descIndex" class="bullet-input">
              <input v-model="pack.description[descIndex]" placeholder="Bullet Point" />
              <button class="remove-bullet" @click="removeBullet(pack, descIndex)">-</button>
            </div>
            <button class="add-bullet" @click="addBullet(pack)">Add New Bullet</button>
            <div class="editable-buttons">
              <button class="discard" @click="discardChanges(pack)">Discard</button>
              <button @click="updateFirebase(pack, 'WeddingVideography', index)">Update Firebase</button>
            </div>
          </div>
          <div class="edit-options">
            <button v-if="!pack.editable" class="edit-button" @click="enableEdit(pack)">Edit</button>
            <button v-if="!pack.editable" class="edit-button remove"
              @click="removePackage(pack, 'WeddingVideography', index)">Remove</button>
          </div>
        </div>
        <button class="add-package" @click="addPackage('WeddingVideography')">Add New Package</button>
      </div>
    </section>

    <section class="manage-content 2">
      <h2 class="section-title">Wedding Photography</h2>
      <div class="wedding-vid-packages">
        <div class="package" v-for="(pack, index) in photoPackages" :key="index">
          <div v-if="!pack.editable" class="package-info">
            <div class="label">Package Name:</div>
            <h3>{{ pack.name }}</h3>
            <div class="label">Package Price:</div>
            <p>{{ pack.price }}</p>
            <div class="label">Package Image Path:</div>
            <p>{{ pack.image }}</p>
            <div class="label">Package Description:</div>
            <p class="bullet" v-for="(desc, descIndex) in pack.description" :key="descIndex">{{ desc }}</p>
          </div>
          <div v-else class="editable-fields">
            <label for="packageName">Package Name:</label>
            <input id="packageName" v-model="pack.name" placeholder="Package Name" />
            <label for="packagePrice">Package Price:</label>
            <input id="packagePrice" v-model="pack.price" placeholder="Package Price" />
            <label for="packageImage">Package Image Path:</label>
            <input id="packageImage" v-model="pack.image" placeholder="Package Path" />
            <label for="packageDescription">Package Description:</label>
            <div v-for="(desc, descIndex) in pack.description" :key="descIndex" class="bullet-input">
              <input v-model="pack.description[descIndex]" placeholder="Bullet Point" />
              <button class="remove-bullet" @click="removeBullet(pack, descIndex)">-</button>
            </div>
            <button class="add-bullet" @click="addBullet(pack)">Add New Bullet</button>
            <div class="editable-buttons">
              <button class="discard" @click="discardChanges(pack)">Discard</button>
              <button @click="updateFirebase(pack, 'WeddingPhotography', index)">Update Firebase</button>
            </div>
          </div>
          <div class="edit-options">
            <button v-if="!pack.editable" class="edit-button" @click="enableEdit(pack)">Edit</button>
            <button v-if="!pack.editable" class="edit-button remove"
              @click="removePackage(pack, 'WeddingPhotography', index)">Remove</button>
          </div>
        </div>
      </div>
    </section>

    <section class="manage-content 3">
      <h2 class="section-title">Personal Packages</h2>
      <div class="wedding-vid-packages">
        <div class="package" v-for="(pack, index) in personalPackages" :key="index">
          <div v-if="!pack.editable" class="package-info">
            <div class="label">Package Name:</div>
            <h3>{{ pack.name }}</h3>
            <div class="label">Package Price:</div>
            <p>{{ pack.price }}</p>
            <div class="label">Package Image Path:</div>
            <p>{{ pack.image }}</p>
            <div class="label">Package Description:</div>
            <p class="bullet" v-for="(desc, descIndex) in pack.description" :key="descIndex">{{ desc }}</p>
          </div>
          <div v-else class="editable-fields">
            <label for="packageName">Package Name:</label>
            <input id="packageName" v-model="pack.name" placeholder="Package Name" />
            <label for="packagePrice">Package Price:</label>
            <input id="packagePrice" v-model="pack.price" placeholder="Package Price" />
            <label for="packageImage">Package Image Path:</label>
            <input id="packageImage" v-model="pack.image" placeholder="Package Path" />
            <label for="packageDescription">Package Description:</label>
            <div v-for="(desc, descIndex) in pack.description" :key="descIndex" class="bullet-input">
              <input v-model="pack.description[descIndex]" placeholder="Bullet Point" />
              <button class="remove-bullet" @click="removeBullet(pack, descIndex)">-</button>
            </div>
            <button class="add-bullet" @click="addBullet(pack)">Add New Bullet</button>
            <div class="editable-buttons">
              <button class="discard" @click="discardChanges(pack)">Discard</button>
              <button @click="updateFirebase(pack, 'Personal', index)">Update Firebase</button>
            </div>
          </div>
          <div class="edit-options">
            <button v-if="!pack.editable" class="edit-button" @click="enableEdit(pack)">Edit</button>
            <button v-if="!pack.editable" class="edit-button remove"
              @click="removePackage(pack, 'Personal', index)">Remove</button>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.admin-dashboard {
  font-family: 'Arial', sans-serif;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 20px;
}

.admin-title {
  font-size: 1.5rem;
  margin: 0;
}

.user-name {
  font-size: 1.2rem;
  margin: 0;
}

.logout {
  padding: 8px 15px;
  border-radius: 5px;
  border: none;
  background-color: #3498db;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s;
}

.logout:hover {
  background-color: #2980b9;
}

button {
  background-color: #27ae60;
  color: white;
  border: none;
  cursor: pointer;
  padding: 8px 15px;
  border-radius: 5px;
  font-size: 0.9rem;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #219d53;
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
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #9a9a9a;
}

.section-title {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 20px;
}

.package {
  position: relative;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 20px;
  width: 100%;
  transition: box-shadow 0.3s, transform 0.3s;
}

.package:hover {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  transform: scale(1.02);
}

.package-info {
  display: flex;
  flex-direction: column;
}

.package h3 {
  font-size: 1rem;
  margin: 0 0 5px;
  color: #333;
}

.package p {
  font-size: 0.9rem;
  color: #666;
  margin: 0 0 5px;
}

.label {
  font-size: 0.9rem;
  color: #9f9f9f;
  margin-bottom: 3px;
}

label {
  font-size: 0.9rem;
  color: #9f9f9f;
  margin-bottom: 3px;
}

.edit-options {
  position: absolute;
  bottom: 10px;
  left: 0px;
  width: 100%;
  display: flex;
  place-content: center;
}

.edit-button {
  background-color: #27ae60;
  color: white;
  width: 70%;
}

.edit-button:hover {
  background-color: #219d53;
}

.edit-button.remove {
  width: 19%;
  margin-left: 1%;
  background-color: #e74c3c;
}

.edit-button.remove:hover {
  background-color: #c0392b;
}

.editable-fields input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 0.9rem;
}

.bullet-input {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.bullet:last-child {
  margin-bottom: 40px;
  /* Adjusted margin for the last bullet point */
}

.remove-bullet {
  background-color: #e74c3c;
  color: white;
  border: none;
  font-size: 0.9rem;
  cursor: pointer;
  margin-left: 5px;
  transition: background-color 0.3s;
}

.remove-bullet:hover {
  background-color: #c0392b;
}

.add-bullet {
  background-color: #3498db;
  color: white;
  border: none;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-bullet:hover {
  background-color: #2980b9;
}

.editable-buttons {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 10px;
}

.editable-buttons button {
  padding: 8px 15px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-left: 8px;
  font-size: 0.9rem;
}

.editable-buttons button.discard {
  background-color: #e74c3c;
  color: white;
}

.editable-buttons button.discard:hover {
  background-color: #c0392b;
}

@media (min-width: 1000px) {
  .wedding-vid-packages {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .package {
    width: 48%;
    box-sizing: border-box;
    margin-bottom: 20px;
  }
}
</style>