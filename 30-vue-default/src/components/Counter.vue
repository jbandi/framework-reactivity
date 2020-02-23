<template>
  <div>
    <div>{{ state.count }}</div>
    <div>
      <button @click="decrease">-</button>
      <button @click="increase">+</button>
    </div>
    <div>
      <button @click="toggle">Toggle</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, onMounted } from '@vue/composition-api';

const Component = defineComponent({
  setup() {
    const state = reactive({
      count: 0
    });

    // onMounted(() => {
    //   setInterval(() => {
    //     state.count++;
    //   }, 1000);
    // });

    function increase() {
      state.count++;
    }

    function decrease() {
      state.count--;
    }

    function toggle() {
      setInterval(() => {
        state.count++;
      }, 1000);
    }

    return {
      state,
      increase,
      decrease,
      toggle
    };
  }
});

export default Component;
</script>

<style scoped></style>
