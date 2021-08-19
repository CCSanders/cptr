export const createAsyncDelay = (duration: number) => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, duration)
  });
};