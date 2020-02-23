<template>
  <div class="screen">
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
  margin: 20px;
}
</style>
