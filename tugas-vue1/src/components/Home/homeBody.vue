<template>
  <div id="container" class="bg-gradient-to-tr from-indigo-100 flex justify-evenly items-center">
    <div class="profil-home bg-gradient-to-l from-green-300 to-blue-500 rounded-full">
      <img class="rounded-full h-96" src="../../assets/profil-squre.png" alt="psDevelopmen">
    </div>

    <div class="desc-home w-96">
      <h1 class="font-bold text-3xl">{{ msg }}</h1>
      <p class="text-sm pb-8">FrontEnd Development</p>
      <p class="break-word">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo atque, laudantium nihil distinctio vero 
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

