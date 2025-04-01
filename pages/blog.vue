<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Page Header -->
    <header class="bg-blue-600 text-white py-8">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold">Our Blog</h1>
        <p class="mt-2 text-lg">Stay updated with the latest news and articles</p>
      </div>
    </header>

    <!-- Blog Posts Section -->
    <main class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Blog Post Card -->
        <div class="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Blog Post"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h2 class="text-xl font-semibold text-gray-800">
              Blog Post Title
            </h2>
            <p class="mt-2 text-gray-600">
              A short description of the blog post goes here. It should be
              concise and engaging.
            </p>
            <a
              href="#"
              class="inline-block mt-4 text-blue-600 font-semibold hover:underline"
            >
              Read More
            </a>
          </div>
        </div>

        <!-- Repeat Blog Post Card -->
        <div class="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Blog Post"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h2 class="text-xl font-semibold text-gray-800">
              Another Blog Post
            </h2>
            <p class="mt-2 text-gray-600">
              Another short description of the blog post goes here.
            </p>
            <a
              href="#"
              class="inline-block mt-4 text-blue-600 font-semibold hover:underline"
            >
              Read More
            </a>
          </div>
        </div>

        <!-- Add more blog post cards as needed -->
      </div>
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>