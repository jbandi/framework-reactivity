<template>
  <div class="screen">
    <ClassicCounter />
  </div>
</template>

<script>
import ClassicCounter from '@/components/ClassicCounter';

export default {
  name: 'Home',
  components: {
    ClassicCounter
  }
};
</script>

<style scoped>
  .screen {
    margin: 20px;
  }
</style>
