<template lang="">
  <div>
    <h1>Main page</h1>
    <router-link 
      :to="{name: 'catalog-list'}">
      <h1>To Catalog</h1>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'main-page',
}
</script>
<style lang="">
  
</style>