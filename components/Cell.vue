<script setup lang="ts">
import { useCellStore } from '~/stores/cell'

const { index } = defineProps<{ index: number }>()
const store = useCellStore()
</script>

<template>
  <div
    class="w-28 h-28 border-solid border-2 border-slate-100 flex justify-center items-center cursor-pointer"
    @click="store.toggle(index)"
  >
    <transition name="bounce">
      <div v-show="store.status[index]" class="text-7xl font-light text-sky-500">
        O
      </div>
    </transition>
  </div>
</template>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
