<script setup lang="ts">
import { useCellStore } from '~/stores/cell'
const store = useCellStore()
</script>

<template>
  <h1 class="text-slate-800 text-4xl">
    <template v-if="store.accomplished">
      Accomplished in {{ store.steps }} steps
    </template>
    <template v-else>
      Steps: {{ store.steps }}
    </template>
  </h1>

  <div class="border-2 border-slate-100 grid-cols-3 grid-rows-3 inline-grid">
    <cell
      v-for="index in 9"
      :key="index - 1"
      :index="index - 1"
    />
  </div>

  <button
    class="px-4 py-1 shadow text-lg outline-none transition duration-300 text-slate-800 w-24 hover:shadow-md border-slate-200 border"
    @click="store.$reset()"
  >
    Restart
  </button>
</template>
