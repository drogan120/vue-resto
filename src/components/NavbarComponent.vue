<template>
  <div class="flex bg-green-50 text-gray-400 antialiased py-5 border-b
  border-green-100 border-gray-400 shadow items-center">
    <div class="flex ml-5 items-center">
      <div class="border border-green-600 rounded-full p-2">
        <img
        src="../assets/logo.png"
        alt="Vue Logo"
        class="h-10 w-10 object-cover object-center"
      />
      </div>
      <router-link to="/" class="text-xl ml-3 font-bold"
        >Vue Resto</router-link
      >
    </div>
    <div class="flex justify-between">
      <ul>
        <li><router-link to="/menu" class="mx-5">Menu</router-link></li>
      </ul>
      <ul>
        <li><router-link to="/cart" class="mx-5">Cart</router-link></li>
      </ul>
      <ul>
        <li><router-link to="/about" class="mx-5">About</router-link></li>
      </ul>
    </div>
  </div>
</template>
