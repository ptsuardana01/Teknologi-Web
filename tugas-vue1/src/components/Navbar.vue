<template>
    <nav id="nav" class="h-14 bg-gradient-to-l from-green-300 to-blue-500 flex justify-between p-3 px-16 shadow-md">
        <div class="flex justify-center">
            <span class="logo px-2">psWebsite</span>
        </div>
        <div class="nav-menu w-80 flex justify-around">
            <router-link class="text--500 font-medium px-2 hover:text-black" to="/">Home</router-link>
            <router-link class="font-medium px-2" to="/about">About</router-link>
            <router-link class="font-medium px-2" to="/keranjang-belanja">Keranjang Belanja</router-link>
        </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>