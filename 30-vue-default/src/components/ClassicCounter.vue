<template>
  <div>
    <div>{{ count }}</div>
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
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ClassicCounter extends Vue {
  private count = 0;
  private intervalHandle?: number;

  mounted() {
    // setInterval(() => {
    //   this.count++;
    // }, 1000);
  }

  increase() {
    this.count++;
  }

  decrease() {
    this.count--;
  }

  toggle() {
    if (!this.intervalHandle) {
      this.intervalHandle = setInterval(() => {
        this.count++;
      }, 1000);
    } else {
      clearInterval(this.intervalHandle);
      this.intervalHandle = undefined;
    }
  }
}
</script>

<style scoped></style>
