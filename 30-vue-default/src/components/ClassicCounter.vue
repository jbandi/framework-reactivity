<template>
  <div class="counter">
    <div class="counter-display">{{ count }}</div>
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

<style scoped>
.counter {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightcyan;
  padding: 30px;
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
