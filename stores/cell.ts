import { defineStore } from 'pinia'

/**
 * Strategies when toggling.
 * |0|1|2|
 * |3|4|5|
 * |6|7|8|
 */
const strategy: Record<number, number[]> = {
  0: [0, 1, 3],
  1: [0, 1, 2, 4],
  2: [1, 2, 5],
  3: [0, 3, 4, 6],
  4: [1, 3, 4, 5, 7],
  5: [2, 4, 5, 8],
  6: [3, 6, 7],
  7: [4, 6, 7, 8],
  8: [5, 7, 8],
}

export const useCellStore = defineStore('cell', {
  state: () => {
    return {
      active: Array.from({ length: 9 }).map(() => false) as boolean[],
      steps: 0,
    }
  },
  actions: {
    toggle(index: number): void {
      if (this.accomplished)
        return

      this.steps++
      strategy[index].forEach(i => this.active[i] = !this.active[i])
    },
  },
  getters: {
    accomplished(): boolean {
      return this.active[0] && (
        this.active.reduce((a, b) => a + Number(b), 0) === 1
      )
    },
  },
})
