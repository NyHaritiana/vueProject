<template>
  <navig />
  <h1 class="title-center">Tableau des enseignants </h1>
  <tableau />
</template>


<script setup>
  import navig from '@/components/navig.vue';
  import tableau from '@/components/tableau.vue';
</script>


<style scoped>
  .title-center{
    text-align: center;
    margin-bottom: 25px;
    margin-top: 25px;
  }
</style>