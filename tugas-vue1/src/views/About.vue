<template>
  <div class="about">
    <Navbar />
    <aboutBody />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import aboutBody from '@/components/About/aboutBody.vue'

export default {
  name: 'About',
  components: {
    Navbar,
    aboutBody
  }
}
</script>
