import { writable } from "svelte/store";

function createEstimates() {
  const { subscribe, set, update } = writable([]);

  return {
    subscribe,
    append: (name, point) => {
      update((estimates) => {
        let newEstimates = new Array();
        let exist = false;
        for (const estimate of estimates) {
          newEstimates.push(estimate);
          if (estimate.name === name) {
            exist = true;
          }
        }
        if (!exist) {
          newEstimates.push({ name: name, point: point });
        }
        return newEstimates;
      });
    },
    remove: (name) => {
      update((estimates) => {
        let newEstimates = [];
        for (const estimate of estimates) {
          if (estimate.name !== name) {
            newEstimates.push(estimate);
          }
        }
        return newEstimates;
      });
    },
  };
}
export const estimates = createEstimates();
