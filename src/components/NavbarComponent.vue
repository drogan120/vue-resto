<template>
  <div class="flex bg-blue-300 text-gray-200 py-5 border-b border-gray-400 shadow items-center">
    <div class="flex ml-5 items-center">
      <img
        src="../assets/logo.png"
        alt="Vue Logo"
        class="h-10 w-10"
      />
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
