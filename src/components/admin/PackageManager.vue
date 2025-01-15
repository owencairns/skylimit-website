<script setup>
import { ref, onMounted } from 'vue';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { firebaseFunctions } from '../../utils/firebase';

const packages = ref([]);
const categories = ['WeddingVideography', 'WeddingPhotography', 'Personal', 'Commercial'];
const selectedCategory = ref(categories[0]);
const isLoading = ref(false);
const editMode = ref({});

const getPackages = async () => {
    isLoading.value = true;
    try {
        const db = getFirestore();
        const docRef = doc(db, 'PackageDescriptions', selectedCategory.value);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            packages.value = Object.entries(docSnap.data()).map(([name, data]) => ({
                ...data,
                originalData: { ...data },
                isEditing: false
            }));
        }
    } catch (error) {
        console.error('Error fetching packages:', error);
    } finally {
        isLoading.value = false;
    }
};

const updatePackage = async (packageItem) => {
    try {
        await firebaseFunctions.updatePackage({
            category: selectedCategory.value,
            packageData: {
                name: packageItem.name,
                price: packageItem.price,
                description: packageItem.description,
                image: packageItem.image
            }
        });

        packageItem.isEditing = false;
        await getPackages(); // Refresh the list
    } catch (error) {
        console.error('Error updating package:', error);
    }
};

const deletePackage = async (packageName) => {
    if (!confirm('Are you sure you want to delete this package?')) return;

    try {
        await firebaseFunctions.deletePackage({
            category: selectedCategory.value,
            packageName
        });

        await getPackages(); // Refresh the list
    } catch (error) {
        console.error('Error deleting package:', error);
    }
};

const toggleEdit = (packageItem) => {
    if (packageItem.isEditing) {
        // Reset to original values if canceling edit
        Object.assign(packageItem, packageItem.originalData);
    }
    packageItem.isEditing = !packageItem.isEditing;
};

onMounted(getPackages);
</script>

<template>
    <div class="package-manager">
        <div class="controls">
            <h2>Package Management</h2>
            <select v-model="selectedCategory" @change="getPackages">
                <option v-for="category in categories" :key="category" :value="category">
                    {{ category }}
                </option>
            </select>
        </div>

        <div v-if="isLoading" class="loading">Loading...</div>

        <div v-else class="packages-grid">
            <div v-for="pkg in packages" :key="pkg.name" class="package-card">
                <div v-if="!pkg.isEditing" class="package-view">
                    <h3>{{ pkg.name }}</h3>
                    <p class="price">{{ pkg.price }}</p>
                    <p class="description">{{ pkg.description }}</p>
                    <div class="actions">
                        <button class="edit-btn" @click="toggleEdit(pkg)">Edit</button>
                        <button class="delete-btn" @click="deletePackage(pkg.name)">Delete</button>
                    </div>
                </div>

                <div v-else class="package-edit">
                    <input v-model="pkg.name" placeholder="Package Name">
                    <input v-model="pkg.price" placeholder="Price">
                    <textarea v-model="pkg.description" placeholder="Description"></textarea>
                    <div class="actions">
                        <button class="save-btn" @click="updatePackage(pkg)">Save</button>
                        <button class="cancel-btn" @click="toggleEdit(pkg)">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.package-manager {
    background: white;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
}

.package-card {
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 1.5rem;
    margin-bottom: 1rem;
}

.package-edit input,
.package-edit textarea {
    width: 100%;
    margin-bottom: 1rem;
    padding: 0.75rem;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    background: white;
    color: #1f2937;
}

.actions {
    display: flex;
    gap: 0.75rem;
    margin-top: 1rem;
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

.save-btn {
    background: #10b981;
    color: white;
}

.delete-btn {
    background: #ef4444;
    color: white;
}

.cancel-btn {
    background: #6b7280;
    color: white;
}

button:hover {
    opacity: 0.9;
    transform: translateY(-1px);
}

.loading {
    text-align: center;
    padding: 2rem;
    color: #6b7280;
}

h2 {
    color: #1f2937;
    font-size: 1.5rem;
}

.package-view h3 {
    color: #1f2937;
    margin-bottom: 0.5rem;
}

.package-view .price {
    color: #059669;
    font-weight: 500;
    margin-bottom: 0.5rem;
}

.package-view .description {
    color: #4b5563;
    margin-bottom: 1rem;
}
</style>