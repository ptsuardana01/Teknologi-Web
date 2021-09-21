<template>
  <div class="about">
    <Navbar />
    <h1>This is an about page</h1>
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
