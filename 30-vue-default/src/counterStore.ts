import { reactive, computed } from '@vue/composition-api';

export let counterStore: any;

export function initCounterStore() {
  // late init: the composition api can only be used after the vue instance was created ...
  const counterState = reactive({
    count: 42,
    double: computed(() => counterStore.count * 2)
  });

  counterStore = {
    state: counterState,
    increase() {
      counterState.count++;
    },
    decrease() {
      counterState.count--;
    },
  };
}
