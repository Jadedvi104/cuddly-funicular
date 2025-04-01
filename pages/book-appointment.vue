<template>
  <div class="book-appointment-page max-w-xl mx-auto p-5 mt-6 bg-white shadow-md rounded-lg">
    <h1 class="text-2xl font-bold mb-6">Book Appointment</h1>

    <form @submit.prevent="submitForm">
      <div class="form-group mb-4">
        <label for="name" class="block mb-1">Name:</label>
        <input
          type="text"
          id="name"
          v-model="formData.name"
          required
          class="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div class="form-group mb-4">
        <label for="email" class="block mb-1">Email:</label>
        <input
          type="email"
          id="email"
          v-model="formData.email"
          required
          class="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div class="form-group mb-4">
        <label for="phone" class="block mb-1">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          v-model="formData.phone"
          required
          class="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div class="form-group mb-4">
        <label for="date" class="block mb-1">Date:</label>
        <input
          type="date"
          id="date"
          v-model="formData.date"
          required
          class="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div class="form-group mb-4">
        <label for="time" class="block mb-1">Time:</label>
        <input
          type="time"
          id="time"
          v-model="formData.time"
          required
          class="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <button
        type="submit"
        :disabled="isSubmitting"
        class="bg-green-500 text-white px-4 py-2 rounded cursor-pointer disabled:bg-gray-300 disabled:cursor-default"
      >
        <span v-if="isSubmitting">Submitting...</span>
        <span v-else>Book Now</span>
      </button>

      <button @click="goBack" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
      Go Back
      </button>

      <div v-if="errorMessage" class="error-message text-red-500 mt-2">
        {{ errorMessage }}
      </div>

      <div v-if="successMessage" class="success-message text-green-500 mt-2">
        {{ successMessage }}
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
  router.back();
};

// Form data
const formData = reactive({
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
});

// Submission state
const isSubmitting = ref(false);
const errorMessage = ref('');
const successMessage = ref('');

// Submit form function
const submitForm = async () => {
  isSubmitting.value = true;
  errorMessage.value = '';
  successMessage.value = '';

  try {
    // Simulate API call (replace with actual API call)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Example: Check if name is empty
    if (formData.name === '') {
      throw new Error('Name cannot be empty');
    }

    // Simulate successful submission
    successMessage.value = 'Appointment booked successfully!';
    // Reset form
    (Object.keys(formData) as Array<keyof typeof formData>).forEach(key => formData[key] = '');
  } catch (error: any) {
    errorMessage.value = error.message || 'An error occurred.';
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>

</style>
