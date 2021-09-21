<template>
  <div class="keranjang-belanja">
    <Navbar />
    <keranjangBody />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import keranjangBody from '@/components/Keranjang-Belanja/keranjangBody.vue'

export default {
  name: 'Keranjang-Belanja',
  components: {
    Navbar,
    keranjangBody
  }
}
</script>