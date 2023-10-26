import { ref, watchEffect } from 'vue';

export const useFetch = (getFunction: () => Promise<any>) => {
  const data = ref(null);
  const error = ref(false);

  watchEffect(async () => {
    error.value = false;

    try {
      data.value = await getFunction();
    } catch {
      error.value = true;
    }
  });

  return {
    data,
    error,
  };
};
