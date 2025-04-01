<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Testimonial Slider -->
    <section class="bg-blue-600 text-white py-8">
      <div class="container mx-auto px-4">
        <div class="relative">
          <div
            class="overflow-hidden rounded-lg shadow-lg"
            ref="slider"
          >
            <div
              class="flex transition-transform duration-500"
              :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
            >
              <!-- Slide 1 -->
              <div class="w-full flex-shrink-0">
                <div class="p-8 text-center">
                  <p class="text-lg italic">
                    "The team at DentalPro is amazing! They made me feel so
                    comfortable during my treatment."
                  </p>
                  <h3 class="mt-4 text-xl font-semibold">- John Doe</h3>
                </div>
              </div>
              <!-- Slide 2 -->
              <div class="w-full flex-shrink-0">
                <div class="p-8 text-center">
                  <p class="text-lg italic">
                    "I love my new smile! The teeth whitening service was
                    fantastic."
                  </p>
                  <h3 class="mt-4 text-xl font-semibold">- Jane Smith</h3>
                </div>
              </div>
              <!-- Slide 3 -->
              <div class="w-full flex-shrink-0">
                <div class="p-8 text-center">
                  <p class="text-lg italic">
                    "Highly recommend DentalPro for their professional and
                    friendly service."
                  </p>
                  <h3 class="mt-4 text-xl font-semibold">- Emily Johnson</h3>
                </div>
              </div>
            </div>
          </div>
          <!-- Slider Controls -->
          <button
            class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-blue-600 rounded-full p-2 shadow-md hover:bg-gray-100"
            @click="prevSlide"
          >
            &lt;
          </button>
          <button
            class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-blue-600 rounded-full p-2 shadow-md hover:bg-gray-100"
            @click="nextSlide"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <main class="container mx-auto px-4 py-12">
      <h2 class="text-3xl font-bold text-gray-800 text-center mb-8">
        What Our Clients Say
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Testimonial Card -->
        <div class="bg-white shadow-md rounded-lg p-6">
          <p class="text-gray-600 italic">
            "The staff was very friendly and professional. I felt at ease
            throughout my visit."
          </p>
          <h3 class="mt-4 text-lg font-semibold text-gray-800">- Sarah Lee</h3>
        </div>
        <!-- Repeat Testimonial Card -->
        <div class="bg-white shadow-md rounded-lg p-6">
          <p class="text-gray-600 italic">
            "I had a great experience with DentalPro. My teeth look amazing!"
          </p>
          <h3 class="mt-4 text-lg font-semibold text-gray-800">- Mark Wilson</h3>
        </div>
        <div class="bg-white shadow-md rounded-lg p-6">
          <p class="text-gray-600 italic">
            "The best dental clinic I've ever visited. Highly recommended!"
          </p>
          <h3 class="mt-4 text-lg font-semibold text-gray-800">- Anna Brown</h3>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const currentSlide = ref(0);
const totalSlides = 3;

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % totalSlides;
}

function prevSlide() {
  currentSlide.value =
    (currentSlide.value - 1 + totalSlides) % totalSlides;
}
</script>

<style scoped>
/* Optional: Add custom styles for smoother transitions */
</style>