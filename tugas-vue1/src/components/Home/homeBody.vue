<template>
  <div id="container" class="flex items-center">
    <div class="flex-1 flex justify-center">
      <div class="profil-home h-96 w-96 bg-gradient-to-l from-green-100 to-blue-300 rounded-full">
        <img class="rounded-full h-96" src="../../assets/profil-squre.png" alt="psDevelopmen">
      </div>
    </div>

    <div class="desc-home flex flex-col flex-1 items-start justify-center h-full bg-gradient-to-l from-green-100 rounded-lg">
      <h1 class="font-bold text-3xl">{{ msg }}</h1>
      <p class="text-sm pb-8">FrontEnd Development</p>
      <p class="break-word pr-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo atque, laudantium nihil distinctio vero 
        itaque velit voluptates dicta optio eos quisquam illum ipsa ut modi autem ducimus reprehenderit aperiam 
        voluptate.</p>
    </div>


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

<style scoped>
#container {
  height: 90vh;
}
</style>

