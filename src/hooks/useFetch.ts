import { ref, watchEffect } from 'vue';

export const useFetch = <DataT>(getFunction: () => Promise<DataT>) => {
  const data = ref<null | DataT>(null);
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
