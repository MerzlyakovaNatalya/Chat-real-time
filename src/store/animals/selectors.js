const getFromStoreAnimals = (state) => state.animals;
export const getAnimalsData = (state) => state.animals.data;
export const getAnimalsLoading = (state) =>
  getFromStoreAnimals(state).isLoading;
export const getAnimalsError = (state) => getFromStoreAnimals(state).isError;
