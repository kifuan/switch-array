import { defineStore } from 'pinia'

/**
 * Strategies when toggling.
 * |0|1|2|
 * |3|4|5|
 * |6|7|8|
 */
const strategies: Record<number, number[]> = {
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
      status: Array.from({ length: 9 }).fill(false) as boolean[],
      steps: 0,
      expectedActive: [0],
    }
  },
  actions: {
    toggle(index: number): void {
      if (this.accomplished)
        return

      this.steps++
      for (const i of strategies[index])
        this.status[i] = !this.status[i]
    },
  },
  getters: {
    accomplished(): boolean {
      return this.status.every((val, index) => {
        if (this.expectedActive.includes(index))
          return val
        return !val
      })
    },
  },
})
