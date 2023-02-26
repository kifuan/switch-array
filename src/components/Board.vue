<script setup lang="ts">
import { useCellStore } from '../stores/cell'
import Cell from './Cell.vue'

const store = useCellStore()
</script>

<template>
  <section class="flex flex-col items-center gap-10">
    <header class="w-full h-16 bg-slate-50 flex justify-around">
      <span class="h-16 leading-[4rem] text-2xl text-slate-800">SwitchArray</span>
      <a class="h-16 text-slate-800 leading-[4rem]" href="https://github.com" target="blank">GitHub</a>
    </header>
    <h1 class="text-slate-800 text-4xl">
      <template v-if="store.accomplished">
        You did it in {{ store.steps }} steps
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
  </section>
</template>
