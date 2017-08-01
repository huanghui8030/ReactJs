<template>
  <div class="ul-lists">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
    <span class='sapn'>{{ message }}</span>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        message: 'hello!'
      }
    },
    created () {
      this.message = 'bye!'
    }
  }
</script>
<style scoped >
  
</style>