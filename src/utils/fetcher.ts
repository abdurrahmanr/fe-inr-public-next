export const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json()) as Promise<any>;
