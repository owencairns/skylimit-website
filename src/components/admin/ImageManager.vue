<script setup>
import { ref, onMounted } from 'vue';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { getStorage, ref as storageRef, listAll, getDownloadURL } from 'firebase/storage';

const functions = getFunctions();
const updateImageFunction = httpsCallable(functions, 'updateImage');

const images = ref([]);
const folders = ['weddings', 'personal', 'commercial'];
const selectedFolder = ref(folders[0]);

const getImages = async () => {
    try {
        const storage = getStorage();
        const folderRef = storageRef(storage, selectedFolder.value);
        const result = await listAll(folderRef);

        const imagePromises = result.items.map(async (item) => {
            const url = await getDownloadURL(item);
            return {
                name: item.name,
                path: item.fullPath,
                url
            };
        });

        images.value = await Promise.all(imagePromises);
    } catch (error) {
        console.error('Error fetching images:', error);
    }
};

onMounted(getImages);
</script>

<template>
    <div class="image-manager">
        <div class="controls">
            <h2>Image Management</h2>
            <select v-model="selectedFolder" @change="getImages">
                <option v-for="folder in folders" :key="folder" :value="folder">
                    {{ folder }}
                </option>
            </select>
        </div>

        <div class="images-grid">
            <div v-for="image in images" :key="image.path" class="image-card">
                <img :src="image.url" :alt="image.name" class="thumbnail">
                <div class="image-info">
                    <p>{{ image.name }}</p>
                    <div class="actions">
                        <button class="edit-btn">Edit</button>
                        <button class="delete-btn">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.image-manager {
    background: white;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
    color: #1f2937;
    font-size: 1.5rem;
}

.controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
}

select {
    padding: 0.5rem 1rem;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    background: white;
    font-size: 0.9rem;
    color: #1f2937;
}

.images-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
}

.image-card {
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    overflow: hidden;
}

.image-info {
    padding: 1.25rem;
}

.image-info p {
    color: #1f2937;
    margin-bottom: 1rem;
}

.actions {
    display: flex;
    gap: 0.75rem;
}

button {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s;
    font-weight: 500;
    font-size: 0.9rem;
}

.edit-btn {
    background: #3b82f6;
    color: white;
}

.delete-btn {
    background: #ef4444;
    color: white;
}

button:hover {
    opacity: 0.9;
    transform: translateY(-1px);
}
</style>