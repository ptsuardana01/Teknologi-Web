<template>
  <div class="home">
    <Navbar />
    <Hello msg="Hi, I'm Lorem Ipsum"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Hello from '@/components/Home/homeBody.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Hello
  }
}
</script>
