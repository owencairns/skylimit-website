<script setup>
import { ref, onMounted } from 'vue';
import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';

const auth = getAuth();
const router = useRouter();
const userEmail = ref('');

onMounted(() => {
    userEmail.value = auth.currentUser?.email || '';
});

const handleSignOut = async () => {
    try {
        await signOut(auth);
        router.push('/login');
    } catch (error) {
        console.error('Error signing out:', error);
    }
};
</script>

<template>
    <div class="user-profile">
        <img src="/img/slv-logo-icon.webp" alt="Sky Limit Visuals" class="logo">
        <div class="user-info">
            <p class="email">{{ userEmail }}</p>
            <button @click="handleSignOut" class="sign-out">
                Sign Out
            </button>
        </div>
    </div>
</template>

<style scoped>
.user-profile {
    padding-bottom: 2rem;
    border-bottom: 1px solid #e9ecef;
}

.logo {
    width: 80px;
    height: 80px;
    margin-bottom: 1rem;
}

.user-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.email {
    font-size: 0.9rem;
    color: #6c757d;
}

.sign-out {
    padding: 0.5rem 1rem;
    border: 1px solid #dc3545;
    background: transparent;
    color: #dc3545;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s;
}

.sign-out:hover {
    background: #dc3545;
    color: white;
}
</style>