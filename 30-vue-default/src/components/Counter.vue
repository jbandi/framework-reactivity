<template>
  <div class="counter">
    <div class="counter-display">{{ state.count }}</div>
    <div>
      <v-btn @click="decrease" color="primary" class="counter-btn">-</v-btn>
      <v-btn @click="increase" color="primary" class="counter-btn">+</v-btn>
    </div>
    <div>
      <v-btn @click="toggle" color="primary" class="counter-btn">Toggle</v-btn>
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

<style scoped>
.counter {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.counter-display {
  margin: 5px;
  padding: 15px;
  border: purple solid 2px;
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: xx-large;
}

.counter-btn {
  margin: 4px;
}
</style>
