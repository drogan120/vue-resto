<template>
  <div class="flex bg-blue-300 text-gray-200 py-5">
    <div class="flex ml-5">
      <img
        src="../assets/logo.png"
        alt="Vue Logo"
        class="h-10 w-10 my-auto"
      />
      <router-link to="/" class="text-xl ml-3 font-bold my-auto"
        >Vue Resto</router-link
      >
    </div>
    <div class="flex ml-auto">
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
