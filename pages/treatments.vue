<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Page Header -->
    <header class="bg-blue-600 text-white py-8">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold">Our Treatments</h1>
        <p class="mt-2 text-lg">Explore the wide range of dental treatments we offer.</p>
      </div>
    </header>

    <!-- Treatments Section -->
    <main class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Treatment Card -->
        <div class="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1588774069268-6a6b6aeeea67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHRlZXRoJTIwd2hpdGVuaW5nfGVufDB8fHx8MTY4NTc2NjYzNQ&ixlib=rb-4.0.3&q=80&w=600"
            alt="Teeth Whitening"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h2 class="text-xl font-semibold text-gray-800">Teeth Whitening</h2>
            <p class="mt-2 text-gray-600">
              Brighten your smile with our professional teeth whitening services.
            </p>
            <a
              href="#"
              class="inline-block mt-4 text-blue-600 font-semibold hover:underline"
            >
              Learn More
            </a>
          </div>
        </div>

        <!-- Treatment Card -->
        <div class="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1588774069268-6a6b6aeeea67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fGRlbnRhbCUyMGltcGxhbnRzfGVufDB8fHx8MTY4NTc2NjYzNQ&ixlib=rb-4.0.3&q=80&w=600"
            alt="Dental Implants"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h2 class="text-xl font-semibold text-gray-800">Dental Implants</h2>
            <p class="mt-2 text-gray-600">
              Replace missing teeth with durable and natural-looking implants.
            </p>
            <a
              href="#"
              class="inline-block mt-4 text-blue-600 font-semibold hover:underline"
            >
              Learn More
            </a>
          </div>
        </div>

        <!-- Treatment Card -->
        <div class="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1588774069268-6a6b6aeeea67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fG9ydGhvZG9udGljc3xlbnwwfHx8fDE2ODU3NjY2MzU&ixlib=rb-4.0.3&q=80&w=600"
            alt="Orthodontics"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h2 class="text-xl font-semibold text-gray-800">Orthodontics</h2>
            <p class="mt-2 text-gray-600">
              Straighten your teeth with our advanced orthodontic treatments.
            </p>
            <a
              href="#"
              class="inline-block mt-4 text-blue-600 font-semibold hover:underline"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>