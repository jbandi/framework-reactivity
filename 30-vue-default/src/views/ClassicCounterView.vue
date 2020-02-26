<template>
  <div class="screen">
    <h1>Classic</h1>
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
  background-color: lightgoldenrodyellow;
  padding: 20px;
}
</style>
