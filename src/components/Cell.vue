<script setup lang="ts">
import { ref } from 'vue'

const shown = ref(true)
</script>

<template>
  <p class="w-32 h-32 border-solid border-2 border-slate-100" @click="shown = !shown">
    <transition name="bounce">
      <div v-show="shown">
        O
      </div>
    </transition>
  </p>
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
