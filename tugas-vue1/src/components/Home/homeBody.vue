<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      FrontEnd Development
    </p>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  props: {
    msg: String
  }
}
</script>

