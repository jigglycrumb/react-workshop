<template>
  <div class="image-wrapper">
    <img :src="getImageUrl()">
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  src: String
})

function getImageUrl() {
  // This path must be correct for your file
  // return new URL(props.src, '/react-workshop')

  return props.src
}
</script>

<style>
  .image-wrapper {
    width:640px;
    height:376px;
    margin: 1rem auto;
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 5px 0px inset;
  }

  .image-wrapper img {
    position: relative;
    z-index:-1;
  }
</style>
