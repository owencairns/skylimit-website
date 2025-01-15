<script setup>
import { ref, onMounted } from 'vue';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const functions = getFunctions();
const updateVideoFunction = httpsCallable(functions, 'updateVideo');

const videos = ref([]);
const categories = ['Weddings', 'Personal', 'Commercial'];
const selectedCategory = ref(categories[0]);

const getVideos = async () => {
    try {
        const db = getFirestore();
        const videoDoc = doc(db, 'Videos', selectedCategory.value);
        const snapshot = await getDoc(videoDoc);

        if (snapshot.exists()) {
            const data = snapshot.data();
            videos.value = Object.values(data);
        }
    } catch (error) {
        console.error('Error fetching videos:', error);
    }
};

onMounted(getVideos);
</script>

<template>
    <div class="video-manager">
        <div class="controls">
            <h2>Video Management</h2>
            <select v-model="selectedCategory" @change="getVideos">
                <option v-for="category in categories" :key="category" :value="category">
                    {{ category }}
                </option>
            </select>
        </div>

        <div class="videos-grid">
            <div v-for="video in videos" :key="video.id" class="video-card">
                <img :src="video.thumbnail" :alt="video.title" class="thumbnail">
                <div class="video-info">
                    <h3>{{ video.title }}</h3>
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
.video-manager {
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

.videos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
}

.video-card {
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    overflow: hidden;
}

.thumbnail {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.video-info {
    padding: 1.25rem;
}

.video-info h3 {
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