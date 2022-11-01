export const pendingCallback = store => {
  store.isLoading = true;
};

export const rejectedCallback = (store, { payload }) => {
  store.isLoading = false;
  store.error = payload;
};
