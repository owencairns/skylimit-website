<script setup>
import { ref } from 'vue';
import PackageManager from './PackageManager.vue';
import VideoManager from './VideoManager.vue';
import ImageManager from './ImageManager.vue';
import UserProfile from './UserProfile.vue';

const activeTab = ref('packages');
</script>

<template>
    <div class="dashboard">
        <aside class="sidebar">
            <UserProfile />
            <nav class="nav-menu">
                <button :class="{ active: activeTab === 'packages' }" @click="activeTab = 'packages'">
                    Packages
                </button>
                <button :class="{ active: activeTab === 'videos' }" @click="activeTab = 'videos'">
                    Videos
                </button>
                <button :class="{ active: activeTab === 'images' }" @click="activeTab = 'images'">
                    Images
                </button>
            </nav>
        </aside>

        <main class="content">
            <PackageManager v-if="activeTab === 'packages'" />
            <VideoManager v-if="activeTab === 'videos'" />
            <ImageManager v-if="activeTab === 'images'" />
        </main>
    </div>
</template>

<style scoped>
.dashboard {
    display: grid;
    grid-template-columns: 250px 1fr;
    min-height: 100vh;
    background: #f0f2f5;
    padding-top: 75px;
}

.sidebar {
    background: #1a1c23;
    padding: 2rem;
    border-right: 1px solid #2d3748;
    color: white;
}

.nav-menu {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 2rem;
}

.nav-menu button {
    padding: 1rem;
    border: none;
    background: transparent;
    border-radius: 8px;
    text-align: left;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s;
    color: #a0aec0;
}

.nav-menu button:hover {
    background: #2d3748;
    color: white;
}

.nav-menu button.active {
    background: #2d3748;
    color: white;
    font-weight: 500;
}

.content {
    padding: 2rem;
}
</style>