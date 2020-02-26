<template>
  <div class="screen">
    <h1>Counter</h1>
    <Counter />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Counter from '@/components/Counter.vue';

@Component({
  components: { Counter }
})
export default class CounterView extends Vue {}
</script>

<style scoped>
.screen {
  background-color: lightgoldenrodyellow;
  padding: 20px;
}
</style>
