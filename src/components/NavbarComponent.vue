<template>
  <div class="flex bg-green-100 text-gray-600 antialiased py-5 border-b
  border-green-200 shadow items-center">
    <div class="flex ml-5 items-center  justify-between">
      <div class="border border-green-600 rounded-full p-2">
        <img
        src="../assets/logo.png"
        alt="Vue Logo"
        class="h-6 w-6 md:h-10 md:w-10 object-cover object-center"
      />
      </div>
      <router-link to="/" class="ml-3 font-semibold text-xl"
        >Vue Resto</router-link
      >
    </div>
    <div class="flex">
      <ul>
        <li><router-link to="/menu" class="mx-3 md:mx-5">Menu</router-link></li>
      </ul>
      <ul>
        <li><router-link to="/cart" class="mx-3 md:mx-5">Cart</router-link></li>
      </ul>
      <ul>
        <li><router-link to="/about" class="mx-3 md:mx-5">About</router-link></li>
      </ul>
    </div>
  </div>
</template>
